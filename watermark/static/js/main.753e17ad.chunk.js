(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(14),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),h=(a(15),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.state.imgShow?alert("\u8bf7\u5148\u9009\u62e9\u56fe\u7247"):a.setState({waterValue:e.target.value})},a.focusChange=function(){a.setState({waterinputFocus:!0})},a.blurChange=function(){a.setState({waterinputFocus:!1})},a.colorChange=function(e){e.preventDefault(),a.state.imgShow?alert("\u8bf7\u5148\u9009\u62e9\u56fe\u7247"):a.setState({waterColor:e.target.value})},a.fontChange=function(e){a.state.imgShow?alert("\u8bf7\u5148\u9009\u62e9\u56fe\u7247"):a.setState({waterFont:e.target.value})},a.clearanceChange=function(e){a.state.imgShow?alert("\u8bf7\u5148\u9009\u62e9\u56fe\u7247"):a.setState({clearance:e.target.value})},a.inputChange=function(e){var t=new FileReader,n=e.target.files[0];t.readAsDataURL(n),t.onload=function(e){a.setState({imgUrl:e.target.result,imgShow:!1});var t=new Image;t.src=e.target.result,t.onload=function(){a.addWaterMark()}}},a.addWaterMark=function(){var e=a.state,t=e.waterColor,n=e.waterFont,r=e.clearance,l=e.waterValue,c=document.getElementById("img"),o=document.getElementById("canvas"),i=o.getContext("2d"),s=o.width/2,m=o.height/2;o.width=c.width,o.height=c.height,i.drawImage(c,0,0),i.save(),i.translate(s,m),i.rotate(45*Math.PI/180),i.translate(-s,-m),i.fillStyle=t,i.font="".concat(n,"px Georgia");for(var u=-c.width/r;u<c.width/r;u++)for(var h=-c.height/r;h<c.height/r*2;h++)i.fillText(l,u*r*2,10+h*r);i.restore()},a.saveImg=function(e){if(a.state.imgShow)alert("\u8bf7\u5148\u9009\u62e9\u56fe\u7247"),e.preventDefault();else{var t=document.getElementById("canvas").toDataURL("image/png");document.getElementById("saveimg").href=t}},a.state={waterValue:"\u6b64\u8bc1\u4ef6\u4ec5\u4f9b\u529e\u7406XX\u4e1a\u52a1\u4f7f\u7528\uff0c\u4ed6\u7528\u65e0\u6548",waterinputFocus:!1,imgUrl:"https://ws1.sinaimg.cn/large/007DE5Hlgy1g3hy90jdjkj30ic0bcaig.jpg",imgShow:!0,waterColor:"#000000",waterFont:"10",clearance:"100"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.addWaterMark()}},{key:"render",value:function(){var e=this.state,t=e.waterValue,a=e.waterinputFocus,n=e.imgUrl,l=e.imgShow,c=e.waterColor,o=e.waterFont,i=e.clearance;return r.a.createElement("div",{className:"watermark"},r.a.createElement("div",{className:"header"},r.a.createElement("label",{htmlFor:"waterValue",className:"waterLabel"},"\u6c34\u5370\u6587\u5b57"),r.a.createElement("input",{type:"text",value:t,id:"waterValue",onFocus:this.focusChange,onBlur:this.blurChange,className:"waterinput ".concat(a?"active":""),onChange:this.handleChange}),r.a.createElement("div",{className:"selectImg"},r.a.createElement("input",{type:"file",id:"inputimg",accept:"image/png, image/jpeg, image/gif, image/jpg",onChange:this.inputChange}),r.a.createElement("label",{className:"labelimg",htmlFor:"inputimg"},"\u9009\u62e9\u56fe\u7247")),r.a.createElement("div",{className:"saveImg",onClick:this.saveImg},r.a.createElement("a",{href:{javascript:void 0},id:"saveimg",download:"shenzjd_com.png"},"\u4fdd\u5b58\u56fe\u7247"))),r.a.createElement("div",{className:"config"},r.a.createElement("div",{className:"waterColor"},r.a.createElement("label",{htmlFor:"waterColor"},"\u6c34\u5370\u989c\u8272(\u70b9\u6211\u9009\u62e9\u6c34\u5370\u989c\u8272)\uff1a"),r.a.createElement("input",{value:c,type:"color",id:"waterColor",onChange:this.colorChange})),r.a.createElement("div",{className:"waterFont"},r.a.createElement("label",{htmlFor:"waterFont"},"\u5b57\u4f53\u5927\u5c0f\uff1a"),r.a.createElement("input",{type:"number",id:"waterFont",onChange:this.fontChange,value:o}),"px"),r.a.createElement("div",{className:"clearance"},r.a.createElement("label",{htmlFor:"clearance"},"\u6587\u5b57\u95f4\u9699\uff1a"),r.a.createElement("input",{type:"number",id:"clearance",onChange:this.clearanceChange,value:i}),"px")),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:n,alt:"",id:"img",className:l?"":"none"}),r.a.createElement("canvas",{id:"canvas",className:l?"none":"",width:"1000px",height:"700px"})))}}]),t}(r.a.Component)),g=(a(16),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},"\u5b98\u65b9\u7f51\u7ad9\uff1a ",r.a.createElement("a",{href:"https://shenzjd.com",target:"_blank"},"\u795e\u65cf\u4e5d\u5e1d"),"\u2003 \u6e90\u7801\uff1a",r.a.createElement("a",{href:"https://github.com/wu529778790/shenzjd.com",target:"_blank"},"Github")))}}]),t}(r.a.Component));var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\u6c34\u58a8\u6e05\u9999\uff1a\u4e00\u6b3e\u672c\u5730\u6c34\u5370\u6dfb\u52a0\u5de5\u5177"),r.a.createElement("h5",null,"\u52a0\u6c34\u5370\u64cd\u4f5c\u5728\u672c\u5730\u5b8c\u6210\uff0c\u4efb\u4f55\u8bc1\u4ef6\u4fe1\u606f\u4e0d\u4f1a\u4e0a\u4f20\u5230\u7f51\u7ad9\uff0c\u8bf7\u653e\u5fc3\u4f7f\u7528",r.a.createElement("a",{href:"https://github.com/wu529778790/shenzjd.com",target:"_blank"},"\u5f00\u6e90\u66f4\u653e\u5fc3"))),r.a.createElement(h,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.753e17ad.chunk.js.map