(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var GaugeBar=function(_scene$Ellipse){_inherits(GaugeBar,_scene$Ellipse);function GaugeBar(){_classCallCheck(this,GaugeBar);return _possibleConstructorReturn(this,Object.getPrototypeOf(GaugeBar).apply(this,arguments))}_createClass(GaugeBar,[{key:"_draw",value:function _draw(context){var _model=this.model;var _model$value=_model.value;var value=_model$value===undefined?0:_model$value;var _model$hidden=_model.hidden;var hidden=_model$hidden===undefined?false:_model$hidden;var _model$lineWidth=_model.lineWidth;var lineWidth=_model$lineWidth===undefined?20:_model$lineWidth;var cx=_model.cx;var cy=_model.cy;var rx=_model.rx;var ry=_model.ry;context.lineCap="round";context.beginPath();context.strokeStyle="#efefef";context.ellipse(cx,cy,Math.abs(rx),Math.abs(ry),0,0,2*Math.PI);context.lineWidth=lineWidth;context.stroke();context.closePath();context.beginPath();var percent=Math.min(Math.max(0,value/100||1),1);context.ellipse(cx,cy,Math.abs(rx),Math.abs(ry),0,-Math.PI/2,percent*2*Math.PI-Math.PI/2);if(!hidden){this.drawFill(context);this.drawStroke(context)}}}]);return GaugeBar}(scene.Ellipse);exports.default=GaugeBar;scene.Component.register("gauge-bar",GaugeBar)},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}function drawStepLine(context,ang,rx,stepNeedleSize){context.rotate(ang);context.translate(0,-rx);context.fillRect(0,-rx*.14,stepNeedleSize,rx*.175);context.translate(0,rx);context.rotate(-ang)}function drawSubStepLine(context,ang,rx,stepNeedleSize){context.rotate(ang);context.translate(0,-rx);context.fillRect(0,-rx*.04,stepNeedleSize,rx*.075);context.translate(0,rx);context.rotate(-ang)}function drawStepText(context,text,ang,rx){context.rotate(ang);context.translate(0,-rx*.83);context.rotate(-ang);context.fillText(text,0,0);context.rotate(ang);context.translate(0,rx*.83);context.rotate(-ang)}function drawNeedle(context,rx,ang){context.rotate(ang);context.beginPath();context.moveTo(rx*.03,0);context.lineTo(0,rx*.8);context.lineTo(-rx*.03,0);context.lineTo(-rx*.02,-rx*.15);context.lineTo(rx*.02,-rx*.15);context.rotate(-ang)}var oldValue=0;function startAnimation(value){console.log(oldValue,value);if(oldValue>value)value+=1;else value-=1}var GaugeCircle=function(_scene$Donut){_inherits(GaugeCircle,_scene$Donut);function GaugeCircle(){_classCallCheck(this,GaugeCircle);return _possibleConstructorReturn(this,Object.getPrototypeOf(GaugeCircle).apply(this,arguments))}_createClass(GaugeCircle,[{key:"_draw",value:function _draw(context){var _model=this.model;var _model$value=_model.value;var value=_model$value===undefined?0:_model$value;var _model$hidden=_model.hidden;var hidden=_model$hidden===undefined?false:_model$hidden;var _model$lineWidth=_model.lineWidth;var lineWidth=_model$lineWidth===undefined?20:_model$lineWidth;var startValue=_model.startValue;var endValue=_model.endValue;var step=_model.step;var subStep=_model.subStep;var _model$startAngle=_model.startAngle;var startAngle=_model$startAngle===undefined?0:_model$startAngle;var _model$endAngle=_model.endAngle;var endAngle=_model$endAngle===undefined?180:_model$endAngle;var _model$fontColor=_model.fontColor;var fontColor=_model$fontColor===undefined?"black":_model$fontColor;var _model$showStepText=_model.showStepText;var showStepText=_model$showStepText===undefined?true:_model$showStepText;var _model$showStartValue=_model.showStartValue;var showStartValue=_model$showStartValue===undefined?true:_model$showStartValue;var _model$showEndValue=_model.showEndValue;var showEndValue=_model$showEndValue===undefined?true:_model$showEndValue;var _model$showStepLine=_model.showStepLine;var showStepLine=_model$showStepLine===undefined?true:_model$showStepLine;var _model$showSubStep=_model.showSubStep;var showSubStep=_model$showSubStep===undefined?true:_model$showSubStep;var colorStops=_model.colorStops;var fillStyle=_model.fillStyle;var _model$textFillStyle=_model.textFillStyle;var textFillStyle=_model$textFillStyle===undefined?"black":_model$textFillStyle;var _model$needleFillStyl=_model.needleFillStyle;var needleFillStyle=_model$needleFillStyl===undefined?"black":_model$needleFillStyl;var _model$innerCircleFil=_model.innerCircleFillStyle;var innerCircleFillStyle=_model$innerCircleFil===undefined?"gray":_model$innerCircleFil;var _model$stepNeedleSize=_model.stepNeedleSize;var stepNeedleSize=_model$stepNeedleSize===undefined?2:_model$stepNeedleSize;var stepFillStyle=_model.stepFillStyle;var subTextSize=_model.subTextSize;var cx=_model.cx;var cy=_model.cy;var rx=_model.rx;var ry=_model.ry;var ratio=_model.ratio;if(oldValue!==value){startAnimation(value);oldValue=value}var RADIAN=.0174533/Math.PI;var rxRatio=rx/100*ratio;var ryRatio=ry/100*ratio;var circleSize=(endAngle-startAngle)/180;var totalValue=endValue-startValue;startAngle=startAngle*RADIAN+.5;endAngle=endAngle*RADIAN+.5;context.translate(cx,cy);context.beginPath();context.ellipse(0,0,Math.abs(rx),Math.abs(ry),0,startAngle*Math.PI,endAngle*Math.PI);context.ellipse(0,0,Math.abs(rxRatio),Math.abs(ryRatio),0,endAngle*Math.PI,startAngle*Math.PI,true);this.drawFill(context);this.drawStroke(context);context.closePath();if(colorStops){(function(){var beforeValue=0;colorStops.forEach(function(v){context.beginPath();var value=Math.max(Math.min(v.position-startValue,totalValue),0);var startStepAngle=Math.PI*(startAngle+circleSize*beforeValue/totalValue);var endStepAngle=Math.PI*(startAngle+circleSize*value/totalValue);if(beforeValue>totalValue)return false;context.moveTo(0,0);context.ellipse(0,0,Math.abs(rx),Math.abs(ry),0,startStepAngle,endStepAngle);context.lineTo(0,0);context.ellipse(0,0,Math.abs(rxRatio),Math.abs(ryRatio),0,endStepAngle,startStepAngle,true);context.fillStyle=v.color;context.fill();beforeValue=value})})()}context.scale(1,ry/rx);value=Math.max(Math.min(value,endValue),startValue);var ang=Math.PI*(circleSize*(value-startValue)/totalValue+startAngle-.5);drawNeedle(context,rx,ang);context.fillStyle=needleFillStyle;context.fill();context.closePath();context.beginPath();context.ellipse(0,0,Math.abs(rx)/15,Math.abs(rx)/15,0,0,2*Math.PI);context.fillStyle=innerCircleFillStyle;context.fill();context.fillStyle=stepFillStyle;if(showStepLine){var count=totalValue/step;drawStepLine(context,Math.PI*(startAngle+.5),rx*.8,stepNeedleSize);for(var num=1;num<count;num++){var _ang=Math.PI*(circleSize/count*num+startAngle+.5);drawStepLine(context,_ang,rx*.8,stepNeedleSize)}drawStepLine(context,Math.PI*(endAngle+.5),rx*.8,stepNeedleSize)}if(showSubStep){var _count=totalValue;drawSubStepLine(context,Math.PI*(startAngle+.5),rx*.8,stepNeedleSize);for(var _num=1;_num<_count;_num++){if(_num%step==0||_num%subStep!=0){continue}var _ang2=Math.PI*(circleSize/_count*_num+startAngle+.5);drawSubStepLine(context,_ang2,rx*.8,stepNeedleSize)}drawSubStepLine(context,Math.PI*(endAngle+.5),rx*.8,stepNeedleSize)}context.fillStyle=textFillStyle;context.font=rx*subTextSize/50+"px arial";context.textBaseline="middle";context.textAlign="center";if(showStartValue){drawStepText(context,startValue,Math.PI*(startAngle+.5),rx*.8)}if(showEndValue){drawStepText(context,endValue,Math.PI*(endAngle+.5),rx*.8)}if(showStepText){var _count2=totalValue/step;for(var _num2=1;_num2<_count2;_num2++){var _value=startValue+step*_num2;var _ang3=Math.PI*(circleSize/_count2*_num2+startAngle+.5);drawStepText(context,_value,_ang3,rx*.8)}}context.scale(1,rx/ry);context.translate(-cx,-cy)}},{key:"contains",value:function contains(x,y){var _model2=this.model;var cx=_model2.cx;var cy=_model2.cy;var rx=_model2.rx;var ry=_model2.ry;var normx=(x-cx)/(rx*2-.5);var normy=(y-cy)/(ry*2-.5);return normx*normx+normy*normy<.25}},{key:"onchange",value:function onchange(after,before){if(!after.hasOwnProperty("value"))return;var value=after.value;var self=this;this.model.value=before.value;this.animate({step:function step(delta){self.model.value=before.value+delta*(value-before.value);self.invalidate()},delta:"back",options:{x:1},ease:"out"}).start()}}]);return GaugeCircle}(scene.Donut);exports.default=GaugeCircle;scene.Component.register("gauge-circle",GaugeCircle)},{}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _gaugeCircle=require("./gauge-circle");Object.defineProperty(exports,"GaugeCircle",{enumerable:true,get:function get(){return _interopRequireDefault(_gaugeCircle).default}});var _gaugeBar=require("./gauge-bar");Object.defineProperty(exports,"GaugeBar",{enumerable:true,get:function get(){return _interopRequireDefault(_gaugeBar).default}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}},{"./gauge-bar":1,"./gauge-circle":2}]},{},[3]);