!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@hatiolab/things-scene")):"function"==typeof define&&define.amd?define(["exports","@hatiolab/things-scene"],t):t((e=e||self)["things-scene-gauge"]={},e.scene)}(this,function(e,t){"use strict";const l={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"value",name:"value",property:"value"},{type:"number",label:"start-value",name:"startValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"end-value",name:"endValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"step-text-size",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"sub-step",name:"subStep",property:"subStep"},{type:"number",label:"step-needle-size",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"number",label:"start-angle",name:"startAngle",property:"startAngle"},{type:"number",label:"end-angle",name:"endAngle",property:"endAngle"},{type:"color",label:"text-fill-style",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needle-fill-style",name:"needleFillStyle",property:"needleFillStyle"},{type:"color",label:"inner-circle-fill-style",name:"innerCircleFillStyle",property:"innerCircleFillStyle"},{type:"color",label:"step-fill-style",name:"stepFillStyle",property:"stepFillStyle"},{type:"solid-color-stops",label:"color-stops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"show-start-value",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"show-end-value",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"show-step-line",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"show-step-text",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"show-sub-step",name:"showSubStep",property:"showSubStep"},{type:"checkbox",label:"in-text",name:"inText",property:"inText"}]};function a(e,t,l,a){e.rotate(t),e.translate(0,-l),e.fillRect(0,.14*-l,a,.175*l),e.translate(0,l),e.rotate(-t)}function o(e,t,l,a){e.rotate(t),e.translate(0,-l),e.fillRect(0,.04*-l,a,.075*l),e.translate(0,l),e.rotate(-t)}function r(e,t,l,a){e.rotate(l),e.translate(0,.83*-a),e.rotate(-l),e.fillText(t,0,0),e.rotate(l),e.translate(0,.83*a),e.rotate(-l)}class p extends(t.ValueHolder(t.Donut)){_draw(e){var{lineWidth:t=20,startValue:l,endValue:p,step:n,subStep:s,startAngle:i=0,endAngle:y=180,fontColor:h="black",showStepText:u=!0,showStartValue:b=!0,showEndValue:c=!0,showStepLine:S=!0,showSubStep:m=!0,inText:d=!0,colorStops:f,fillStyle:x,textFillStyle:w="black",needleFillStyle:g="black",innerCircleFillStyle:T="gray",stepNeedleSize:V=2,stepFillStyle:v,stepTextSize:M,cx:z,cy:F,rx:P,ry:k,ratio:I}=this.model;this.animOnValueChange(this.value);const N=.0174533/Math.PI,R=P/100*I,E=k/100*I,C=(y-i)/180,_=p-l;if(i=i*N-.5,y=y*N-.5,e.translate(z,F),e.beginPath(),e.ellipse(0,0,Math.abs(P),Math.abs(k),0,(i*Math.PI).toFixed(2),(y*Math.PI).toFixed(2)),this.drawStroke(e),e.ellipse(0,0,Math.abs(R),Math.abs(E),0,(y*Math.PI).toFixed(2),(i*Math.PI).toFixed(2),!0),e.closePath(),f){let t=0,a=0;e.moveTo(0,0),f.forEach(function(o,r,p){e.beginPath();let n=Math.max(Math.min(o.position-l,_),0),s=a||Math.PI*(i+C*t/_);if(a=r===p.length-1?Math.PI*(i+C):Math.PI*(i+C*n/_),t>_||t>n)return!1;e.ellipse(0,0,Math.abs(P),Math.abs(k),0,s,a),e.ellipse(0,0,Math.abs(R),Math.abs(E),0,a,s,!0),e.fillStyle=o.color,e.fill(),t=n})}e.scale(1,k/P),e.beginPath();let O=this.animValue;O=Math.max(Math.min(O,p),l);let A=Math.PI*(C*(O-l)/_+i-.5);if(function(e,t,l){e.rotate(l),e.beginPath(),e.moveTo(.035*t,0),e.lineTo(0,.8*t),e.lineTo(.035*-t,0),e.lineTo(.015*-t,.2*-t),e.lineTo(.015*t,.2*-t),e.rotate(-l)}(e,P,A),e.fillStyle=g,e.fill(),e.beginPath(),e.ellipse(0,0,Math.abs(P)/15,Math.abs(P)/15,0,0,2*Math.PI),e.fillStyle=T,e.fill(),e.fillStyle=v,S){let t=_/n;a(e,Math.PI*(i+.5),.8*P,V);for(let l=1;l<t;l++){let o=Math.PI*(C/t*l+i+.5);a(e,o,.8*P,V)}a(e,Math.PI*(y+.5),.8*P,V)}if(m){let t=_;for(let l=1;l<=t;l++){if(l%n==0||l%s!=0)continue;let a=Math.PI*(C/t*l+i+.5);o(e,a,.8*P,V)}}e.fillStyle=w,e.font=P*M/50+"px arial",e.textBaseline="middle",e.textAlign="center";let L=d?.8:1.35;if(b&&r(e,l,Math.PI*(i+.5),P*L),c&&r(e,p,Math.PI*(y+.5),P*L),u){let t=_/n;for(let a=1;a<t;a++){let o=l+n*a,p=Math.PI*(C/t*a+i+.5);r(e,o,p,P*L)}}e.scale(1,P/k),e.translate(-z,-F)}contains(e,t){var{cx:l,cy:a,rx:o,ry:r}=this.model,p=(e-l)/(2*o-.5),n=(t-a)/(2*r-.5);return p*p+n*n<.25}_post_draw(e){this.drawText(e)}get nature(){return l}}t.Component.register("gauge-circle",p);const n={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"value",name:"value",property:"value"},{type:"number",label:"start-value",name:"startValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"end-value",name:"endValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"step-text-size",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"sub-step",name:"subStep",property:"subStep"},{type:"number",label:"step-needle-size",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"color",label:"text-fill-style",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needle-fill-style",name:"needleFillStyle",property:"needleFillStyle"},{type:"number",label:"needle-size",name:"needleSize",property:"needleSize"},{type:"color",label:"step-fill-style",name:"stepFillStyle",property:"stepFillStyle"},{type:"solid-color-stops",label:"color-stops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"show-start-value",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"show-end-value",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"show-step-line",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"show-step-text",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"show-sub-step",name:"showSubStep",property:"showSubStep"}]};class s extends(t.ValueHolder(t.RectPath(t.Shape))){_draw(e){var{startValue:t,endValue:l,step:a,subStep:o,colorStops:r,needleFillStyle:p,stepFillStyle:n,textFillStyle:s,needleSize:i,stepNeedleSize:y,stepTextSize:h,showStepText:u=!0,showStartValue:b=!0,showEndValue:c=!0,showStepLine:S=!0,showSubStep:m=!0,width:d,height:f,top:x,left:w}=this.model;this.animOnValueChange(this.value);const g=l-t;if(e.translate(w,x),e.beginPath(),e.rect(0,0,d,f),this.drawFill(e),this.drawStroke(e),e.closePath(),r){let l=0;r.forEach(function(a,o,r){e.beginPath();let p,n=Math.max(Math.min(a.position-t,g),0),s=f*l/g;if(p=o===r.length-1||s+f*n/g?f-s:f-f*n/g,l>g||l>n)return!1;e.rect(0,f-s,d,-p),e.fillStyle=a.color,e.fill(),l=n})}e.beginPath();let T=this.animValue;T=Math.max(Math.min(T,l),t);let V=f-(T-t)/g*f;if(i*=4,e.moveTo(1.05*d,V),e.lineTo(1.05*d+i,V+i/2),e.lineTo(1.05*d+i,V-i/2),e.fillStyle=p,e.fill(),e.closePath(),e.fillStyle=n,S){let t=g/a;e.fillRect(0,f,.06*f,y);for(let l=1;l<t;l++){let a=f/t*l;e.fillRect(0,a,.06*f,y)}e.fillRect(0,0,.06*f,y)}if(m){let t=g;e.fillRect(0,0,.027*f,y);for(let l=1;l<=t;l++){if(l%a==0||l%o!=0)continue;let r=f/t*l;e.fillRect(0,r,.027*f,y)}}let v=f*h/150;if(e.fillStyle=s,e.font=v+"px arial",e.textBaseline="middle",e.textAlign="center",b&&e.fillText(t,-v,f),c&&e.fillText(l,-v,0),u){let l=g/a;for(let o=1;o<l;o++){let r=t+a*o,p=f-f/l*o;e.fillText(r,-v,p)}}e.translate(-w,-x)}_post_draw(e){this.drawText(e)}get nature(){return n}}t.Component.register("gauge-vertical",s);const i={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"value",name:"value",property:"value"},{type:"number",label:"start-value",name:"startValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"end-value",name:"endValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"step-text-size",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"sub-step",name:"subStep",property:"subStep"},{type:"number",label:"step-needle-size",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"color",label:"text-fill-style",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needle-fill-style",name:"needleFillStyle",property:"needleFillStyle"},{type:"number",label:"needle-size",name:"needleSize",property:"needleSize"},{type:"color",label:"step-fill-style",name:"stepFillStyle",property:"stepFillStyle"},{type:"solid-color-stops",label:"color-stops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"show-start-value",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"show-end-value",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"show-step-line",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"show-step-text",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"show-sub-step",name:"showSubStep",property:"showSubStep"}]};class y extends(t.ValueHolder(t.RectPath(t.Shape))){_draw(e){var{startValue:t,endValue:l,step:a,subStep:o,colorStops:r,needleFillStyle:p,stepFillStyle:n,textFillStyle:s,needleSize:i,stepNeedleSize:y,stepTextSize:h,showStepText:u=!0,showStartValue:b=!0,showEndValue:c=!0,showStepLine:S=!0,showSubStep:m=!0,width:d,height:f,top:x,left:w}=this.model;this.animOnValueChange(this.value);const g=l-t;if(e.translate(w,x),e.beginPath(),e.rect(0,0,d,f),this.drawFill(e),this.drawStroke(e),e.closePath(),r){let l=0;r.forEach(function(a,o,r){e.beginPath();let p,n=Math.max(Math.min(a.position-t,g),0),s=d*l/g;if(p=o==r.length-1||s+d*n/g?d-s:d*n/g,l>g||l>n)return!1;e.rect(s,0,p,f),e.fillStyle=a.color,e.fill(),l=n})}if(e.fillStyle=n,S){let t=g/a,l=.06*d;e.fillRect(0,f-l,y,l);for(let a=1;a<t;a++){let o=d/t*a;e.fillRect(o,f-l,y,l)}e.fillRect(d,f-l,y,l)}if(m){let t=g,l=.027*d;e.fillRect(0,f-l,y,l);for(let r=1;r<=t;r++){if(r%a==0||r%o!=0)continue;let p=d/t*r;e.fillRect(p,f-l,y,l)}}let T=d*h/150;if(e.fillStyle=s,e.font=T+"px arial",e.textBaseline="middle",e.textAlign="center",b&&e.fillText(t,0,f+.75*T),c&&e.fillText(l,d,f+.75*T),u){let l=g/a;for(let o=1;o<l;o++){let r=t+a*o,p=d/l*o;e.fillText(r,p,f+.75*T)}}e.beginPath();let V=this.animValue,v=((V=Math.max(Math.min(V,l),t))-t)/g*d;i*=4,e.moveTo(v,f+1.4*T),e.lineTo(v+i/2,f+i+1.4*T),e.lineTo(v-i/2,f+i+1.4*T),e.fillStyle=p,e.fill(),e.closePath(),e.translate(-w,-x)}_post_draw(e){this.drawText(e)}get nature(){return i}}t.Component.register("gauge-horizon",y),e.GaugeCircle=p,e.GaugeVertical=s,e.GaugeHorizon=y,Object.defineProperty(e,"__esModule",{value:!0})});
