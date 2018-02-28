import locales from './locales';

var templates = [{
  name: 'Gauge Circle', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'chartAndGauge', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'gauge-circle',
    model: {
        type: 'gauge-circle',
        cx: 150,
        cy: 150,
        rx: 100,
        ry: 100,
        fontSize: 15,
        fillStyle: '#ff00ff',
        // strokeStyle: '#552555',
        fontColor: 'black',
        lineWidth: 0,
        value: 65,
        startValue: 0,
        endValue: 100,
        step: 20,
        colorStops: [
            {
            position: 50,
            color: '#76c045'
            },
            {
            position: 80,
            color: '#ffa302'
            },
            {
            position: 100,
            color: '#fd3c00'
            }],
        textFillStyle: '#585858',
        stepFillStyle: '#ffffff',
        needleFillStyle: '#585858',
        ratio: 70,
        startAngle: -120,
        endAngle: 120,
        subStep: 5,
        stepTextSize: 5,
        stepNeedleSize: 1,
        alpha: 1,
        showStartValue: true,
        showEndValue: true,
        showStepLine: true,
        showStepText: true,
        showSubStep: true,
        inText: true
    }
  }
}, {
  name: 'Gauge Vertical', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'chartAndGauge', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'gauge-vertical',
    model: {
        type: 'gauge-vertical',
        top: 100,
        left: 100,
        width: 60,
        height: 200,
        value: 65,
        fontSize: 15,
        fontColor: '#585858',
        startValue: 0,
        endValue: 100,
        needleFillStyle: '#585858',
        stepFillStyle: '#ffffff',
        textFillStyle: '#585858',
        needleSize: 3,
        stepNeedleSize: 1,
        stepTextSize: 7,
        step: 20,
        subStep: 5,
        showStepText: true,
        showStartValue: true,
        showEndValue: true,
        showStepLine: true,
        showSubStep: true,
        colorStops: [
            {
            position: 50,
            color: '#76c045'
            },
            {
            position: 80,
            color: '#ffa302'
            },
            {
            position: 100,
            color: '#fd3c00'
            }],
        alpha: 1
    }
  }
}, {
    name: 'Gauge Horizontal', /* 다국어 키 표현을 어떻게.. */
    description: '...', /* 다국어 키 표현을 어떻게.. */
    group: 'chartAndGauge', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
    icon: '../', /* 또는, Object */
    template: {
      type: 'gauge-horizon',
      model: {
        type: 'gauge-horizon',
        top: 100,
        left: 100,
        width: 200,
        height: 60,
        value: 65,
        fontSize: 15,
        fontColor: '#585858',
        fillStyle: '#ff00ff',
        startValue: 0,
        endValue: 100,
        needleFillStyle: '#585858',
        stepFillStyle: '#ffffff',
        textFillStyle: '#585858',
        stepNeedleSize: 1,
        needleSize: 3,
        stepTextSize: 7,
        step: 20,
        subStep: 5,
        showStepText: true,
        showStartValue: true,
        showEndValue: true,
        showStepLine: true,
        showSubStep: true,
        colorStops: [
          {
            position: 50,
            color: '#76c045'
          },
          {
            position: 80,
            color: '#ffa302'
          },
          {
            position: 100,
            color: '#fd3c00'
          }],
        alpha: 1
      }
    }
}];

module.exports = {
  locales,
  templates
};
