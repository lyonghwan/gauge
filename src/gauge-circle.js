function drawStepLine(context, ang, rx, stepNeedleSize) {
  context.rotate(ang)
  context.translate(0, - rx)

  context.fillRect(0, -rx * 0.14, stepNeedleSize, rx * 0.175)
  context.translate(0, rx)
  context.rotate(-ang)
}

function drawSubStepLine(context, ang, rx, stepNeedleSize) {
  context.rotate(ang)
  context.translate(0, - rx)

  context.fillRect(0, -rx * 0.04, stepNeedleSize, rx * 0.075)
  context.translate(0, rx)
  context.rotate(-ang)
}

function drawStepText(context, text, ang, rx) {
  context.rotate(ang)
  context.translate(0, - rx * 0.83)
  context.rotate(-ang)

  context.fillText(text, 0, 0)
  context.rotate(ang)
  context.translate(0, rx * 0.83)
  context.rotate(-ang)
}

function drawNeedle(context, rx, ang){
  context.rotate(ang)

  context.beginPath()

  context.moveTo(rx * 0.03, 0)

  context.lineTo(0, rx * 0.8)

  context.lineTo(-rx * 0.03, 0)

  context.lineTo(-rx * 0.02, -rx * 0.15)
  context.lineTo(rx * 0.02, -rx * 0.15)

  context.rotate(-ang)
}

var oldValue = 0

function startAnimation(value){
  console.log(oldValue,value)

    if(oldValue > value)
      value+= 1
    else
      value-= 1

    // if(oldValue != value)
    //   window.requestAnimationFrame(startAnimation);
}

export default class GaugeCircle extends scene.Donut {

  _draw(context) {
    var {
      value = 0,
      hidden = false,
      lineWidth = 20,
      startValue,
      endValue,
      step,
      subStep,
      startAngle = 0,
      endAngle = 180,
      fontColor = 'black',
      showStepText = true,
      showStartValue = true,
      showEndValue = true,
      showStepLine = true,
      showSubStep = true,
      colorStops,   // 스텝별 각각 다른 색
      fillStyle,
      textFillStyle = 'black',
      needleFillStyle = 'black',
      innerCircleFillStyle = 'gray',
      stepNeedleSize = 2,
      stepFillStyle,
      subTextSize,
      cx, cy, rx, ry, ratio
    } = this.model

    // console.log(oldValue, value)
    if(oldValue !== value){
      startAnimation(value)
      // render();
      oldValue = value
    }

    const RADIAN = 0.0174533 / Math.PI
    const rxRatio = rx / 100 * ratio  // 원 안에 지워지는 비율을 계산한 rx - ratio의 비율에 따라 크기가 변함
    const ryRatio = ry / 100 * ratio  // 원 안에 지워지는 비율을 계산한 ry - ratio의 비율에 따라 크기가 변함
    const circleSize = (endAngle - startAngle) / 180  // 원의 총 길이. - PI * 2가 원이므로 (360도 = 2, 180도 = 1)
    const totalValue = endValue - startValue          // 게이지의 시작과 끝 값의 크기

    startAngle = startAngle * RADIAN + 0.5  //  맨 위쪽을 중심으로 앵글의 범위에 따라 왼쪽으로 넓어짐
    endAngle   = endAngle * RADIAN + 0.5    //  맨 위쪽을 중심으로 앵글의 범위에 따라 오른쪽으로 넓어짐

    context.translate(cx, cy)


    ////  메인 게이지 원 그리  ////
    context.beginPath()

    context.ellipse(0, 0, Math.abs(rx), Math.abs(ry), 0, startAngle * Math.PI, endAngle * Math.PI)
    context.ellipse(0, 0, Math.abs(rxRatio), Math.abs(ryRatio), 0, endAngle * Math.PI, startAngle * Math.PI, true)  // 반대로 그리며 원을 지움.
    
    this.drawFill(context)
    this.drawStroke(context)
    
    context.closePath()


    ////  스텝별 색 칠하기  ////
    if(colorStops){ 
      let beforeValue = 0
      colorStops.forEach(v =>{
        context.beginPath()
        
        let value = Math.max(Math.min(v.position - startValue, totalValue), 0)   // v.position 범위의 최소값은 0, 최대값은 totalValue가 되야함. 
        let startStepAngle = Math.PI * (startAngle + circleSize * beforeValue / totalValue)
        let endStepAngle = Math.PI * (startAngle + circleSize * value / totalValue)

        if(beforeValue > totalValue)  // 값이 게이지의 최대값을 넘어가면 그 다음부턴 다시 그릴 필요 없음
          return false

        context.moveTo(0, 0)
        context.ellipse(0, 0, Math.abs(rx), Math.abs(ry), 0, startStepAngle, endStepAngle)
        context.lineTo(0, 0)

        context.ellipse(0, 0, Math.abs(rxRatio), Math.abs(ryRatio), 0, endStepAngle, startStepAngle, true)
   
        context.fillStyle = v.color
        context.fill()

        beforeValue = value //v.position - startValue
      })
    }

    context.scale(1, ry / rx)


    ////  바늘 그리기  ////
    value = Math.max(Math.min(value, endValue), startValue)   // 값이 startValue보다 작을 수 없고, endValue보다 클 수 없음.
    let ang = Math.PI * (circleSize * (value - startValue) / totalValue + startAngle - 0.5)

    drawNeedle(context, rx, ang)

    context.fillStyle = needleFillStyle
    context.fill()
    context.closePath()


    ////  작은 원 그리기  ////
    context.beginPath()
    context.ellipse(0, 0, Math.abs(rx) / 15, Math.abs(rx) / 15, 0, 0, 2 * Math.PI)
    context.fillStyle = innerCircleFillStyle
    context.fill()


    ////  스텝 선 그리기  ////
    context.fillStyle = stepFillStyle
    if(showStepLine){
      let count = totalValue / step

      // Draw StartValue 
      drawStepLine(context, Math.PI * (startAngle + 0.5), rx * 0.8, stepNeedleSize) // 원을 그릴때 PI는 45도 부터 그리지만 angle은 0도부터 틀어서 + 0.5도를 곱해줘야함
      // Draw StepValue
      for(let num = 1; num < count; num++){
        let ang = Math.PI * (circleSize / count * num + startAngle + 0.5)

        drawStepLine(context, ang, rx * 0.8, stepNeedleSize)
      }
      // Draw EndValue
      drawStepLine(context, Math.PI * (endAngle + 0.5), rx * 0.8, stepNeedleSize)
    }


    ////  서브 스탭 그리기  ////
    if(showSubStep){
      let count = totalValue

      // Draw StartValue
      drawSubStepLine(context, Math.PI * (startAngle + 0.5), rx * 0.8, stepNeedleSize)
      
      // Draw StepValue
      for(let num = 1; num < count; num++){
        if(num % step == 0 || num % subStep != 0){  // 메인 스탭과 서브 스탭은 그리지 않음
          continue;
        }
        let ang = Math.PI * (circleSize / count * num + startAngle + 0.5)

        drawSubStepLine(context, ang, rx * 0.8, stepNeedleSize)
      }
      // Draw EndValue
      drawSubStepLine(context, Math.PI * (endAngle + 0.5), rx * 0.8, stepNeedleSize)
    }


    ////  스텝 텍스트 그리기  ////
    context.fillStyle = textFillStyle
    context.font = rx * subTextSize / 50 + "px arial"
    context.textBaseline = "middle"
    context.textAlign = "center"
    if(showStartValue){  // Draw StartText
      drawStepText(context, startValue, Math.PI * (startAngle + 0.5), rx * 0.8)
    }

    if(showEndValue){   // Draw EndText
      drawStepText(context, endValue, Math.PI * (endAngle + 0.5), rx * 0.8)
    }

    if(showStepText){  // Draw StepText
      let count = totalValue / step

      for(let num = 1; num < count; num++){
        let value = startValue + step * num
        let ang = Math.PI * (circleSize / count * num + startAngle + 0.5)

        drawStepText(context, value, ang, rx * 0.8)
      }
    }

    context.scale(1, rx / ry)
    context.translate(-cx, -cy)
  }

  contains(x, y) {   // 컨테인즈는 Ellipse로 정의함
    var { cx, cy, rx, ry } = this.model;

    var normx = (x - cx) / (rx * 2 - 0.5);
    var normy = (y - cy) / (ry * 2 - 0.5);

    return (normx * normx + normy * normy) < 0.25;
  }
}

scene.Component.register('gauge-circle', GaugeCircle)