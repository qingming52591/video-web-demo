(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2946b1c2"],{"007b":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chat"},[e("el-input",{staticClass:"textInput",attrs:{type:"textarea",resize:"none",rows:15,placeholder:"请输入内容！"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}}),e("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("一键生成视频")]),e("div",{staticClass:"videos"},t._l(t.videoList,(function(n,i){return e("div",{key:i,staticClass:"cont"},[e("div",{staticClass:"video"},[e("video",{ref:"videoElement",refInFor:!0,staticStyle:{width:"100%",height:"100%"},attrs:{id:"video"+i,controls:"",autoplay:"",src:n.url,crossOrigin:"Anonymous"}},[e("source",{attrs:{src:n.url,type:"video/mp4"}})])]),e("div",{staticClass:"des"},[t._v(" "+t._s(n.text)+" ")])])})),0)],1)},s=[],o=e("b775");var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg",class:t.moreLine?"moreLineB":"",attrs:{id:"myDiv"}},[e("div",{staticClass:"cc",class:t.moreLine?"moreLineB":""},[e("div",{staticClass:"middle"},[e("el-input",{ref:"input",attrs:{type:"textarea",autosize:{minRows:1,maxRows:6},placeholder:"Ask Follow-up..."},nativeOn:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.send(n)}},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1),e("div",{staticClass:"bottomBar"},[e("i",{staticClass:"el-icon-top icon",class:!t.loading&&t.content&&t.content.length>0?"act":"",on:{click:function(n){return t.send(!1)}}})])])])},r=[],a=e("5530");e("4de4"),e("d3b7"),e("159b");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pageIndex:1,pageSize:50};return Object(o["a"])({url:"https://bubbie.dekolla.xyz/v1/api/prompt_template",method:"get",params:t})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pageIndex:1,pageSize:50};return Object(o["a"])({url:"https://bubbie.dekolla.xyz/v1/api/chatgpt_instances",method:"get",params:t})}var l=e("2f62"),p={name:"input",data:function(){return{promptId:void 0,promptContent:void 0,content:"",prompts:void 0,instances:void 0,defalutId:"6524d622603ffff765a95dd8",model_id:"6475b02bfdf6513a1c08bf5b",app_id:"652fb8812faca8d253c51c30",moreLine:!1}},props:{loading:{type:Boolean,default:!1}},watch:{content:{immediate:!0,handler:function(t,n){this.inputChange()}}},computed:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["detailInfo","tags"])),{},{getPromptContent:function(){var t=this;if(this.promptId===this.defalutId)return this.promptContent;if(this.prompts){var n=this.prompts.filter((function(n){return n._id===t.promptId}));if(n.length)return n[0].content}return""}}),mounted:function(){},methods:{inputChange:function(){var t=document.getElementById("myDiv");if(t){var n=t.clientHeight;this.moreLine=n>66}},getProm:function(){var t=this;u().then((function(n){n&&n.data&&(t.prompts=n.data.items||[],t.prompts&&t.prompts.length&&(t.prompts.forEach((function(n){n._id===t.defalutId&&(t.promptId=n._id,t.promptContent=n.content)})),setTimeout((function(){t.send(!0)}),500)))})).catch((function(t){})),d().then((function(n){n&&n.data&&(t.instances=n.data.items)})).catch((function(t){}))},send:function(t){!this.loading&&this.content&&(this.$emit("send",{content:this.content}),this.content="",this.moreLine=!1,this.$refs.input.blur())},getModelId:function(){var t=this,n=void 0;if(this.prompts){var e=this.prompts.filter((function(n){return n._id===t.promptId}));e&&e.length&&(n=e[0].model_id)}return n},getType:function(){var t=this,n=void 0;if(this.prompts){var e=this.prompts.filter((function(n){return n._id===t.promptId}));e&&e.length&&(n=e[0].type)}return n},getPromptName:function(){var t=this,n=void 0;if(this.prompts&&this.promptId!=this.defalutId){var e=this.prompts.filter((function(n){return n._id===t.promptId}));e&&e.length&&(n=e[0].prompt_name)}return n}}},f=p,m=(e("8f93"),e("2877")),h=Object(m["a"])(f,c,r,!1,null,"ea345130",null),v=h.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cc"},[t.sourceList.length?e("div",{staticClass:"source"},[e("img",{staticClass:"icon",attrs:{src:t.sourceIcon}}),e("div",{staticClass:"title"},[t._v("Source")])]):t._e(),t.sourceList.length?e("div",{staticClass:"sourceC"},t._l(t.sourceList,(function(n,i){return e("div",{key:i,staticClass:"items",class:(i+1)%4==0?"last":"",on:{click:function(e){return t.openSource(n)}}},[t._v(" "+t._s(n)+" ")])})),0):t._e(),e("div",{staticClass:"source",staticStyle:{"margin-top":"30px"}},[e("img",{staticClass:"icon",attrs:{src:t.answerIcon}}),e("div",{staticClass:"title"},[t._v("Answer")])]),e("div",{staticClass:"chatContent",attrs:{id:t.elId}})])},b=[],C=e("5f87"),w={data:function(){return{imgsrc:e("fb2d"),sourceIcon:e("3cae"),answerIcon:e("c69a"),elId:(new Date).getTime()}},props:{info:{type:Object}},computed:{isUser:function(){return this.info&&"user"===this.info.role},sourceList:function(){if(this.info&&this.info.sourceList)return this.info.sourceList}},mounted:function(){var t=document.getElementById(this.elId);if(t.innerHTML="",this.isUser){var n=document.getElementById(this.elId);this.info.prompt&&this.info.content?n.innerHTML+=this.info.prompt+"<br>"+this.info.content:this.info.content&&(n.innerHTML+=this.info.content)}else this.writing(0)},methods:{openSource:function(t){window.open(t)},writing:function(t){var n=document.getElementById(this.elId),e=this.info.content.split("");t<e.length&&(n.innerHTML+=e[t],setTimeout(this.writing,20,++t))},usreIcon:function(){if(this.isUser){var t=Object(C["c"])();return t&&(t=JSON.parse(t)),t.avatar||this.imgsrc}return this.imgsrc},copyContent:function(){var t=document.createElement("input");t.value=this.info.content,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),this.$message.success("拷贝成功!")},saveContent:function(){this.$emit("saveContent")}}},S=w,x=(e("6267"),Object(m["a"])(S,g,b,!1,null,"60eaf696",null)),I=x.exports,A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},[t._v(t._s(t.info.content))])])},O=[],y={name:"user",data:function(){return{imgsrc:"https://file.yueli.com/soucang_avatar_default.png"}},props:{info:{type:Object}},methods:{imgUrl:function(){var t=Object(C["c"])();return t&&(t=JSON.parse(t)),t.avatar||this.imgsrc}}},k=y,j=(e("61bc"),Object(m["a"])(k,A,O,!1,null,"026a0416",null)),L=j.exports,D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg"},[e("div",{staticClass:"title"},[t._v("Where knowledge begins")]),e("div",{staticClass:"cc"},[e("el-input",{ref:"input",attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"Ask anything..."},nativeOn:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.send(n)}},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}}),e("div",{staticClass:"bottomBar"},[e("i",{staticClass:"el-icon-right icon",class:t.content&&t.content.length>0?"act":"",on:{click:function(n){return t.send(!1)}}})])],1)])},R=[],E={name:"input",data:function(){return{promptId:void 0,promptContent:void 0,content:void 0,prompts:void 0,instances:void 0,defalutId:"6524d622603ffff765a95dd8",model_id:"6475b02bfdf6513a1c08bf5b",app_id:"652fb8812faca8d253c51c30"}},props:{loading:{type:Boolean,default:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["detailInfo","tags"])),{},{getPromptContent:function(){var t=this;if(this.promptId===this.defalutId)return this.promptContent;if(this.prompts){var n=this.prompts.filter((function(n){return n._id===t.promptId}));if(n.length)return n[0].content}return""}}),mounted:function(){},methods:{getProm:function(){var t=this;u().then((function(n){n&&n.data&&(t.prompts=n.data.items||[],t.prompts&&t.prompts.length&&(t.prompts.forEach((function(n){n._id===t.defalutId&&(t.promptId=n._id,t.promptContent=n.content)})),setTimeout((function(){t.send(!0)}),500)))})).catch((function(t){})),d().then((function(n){n&&n.data&&(t.instances=n.data.items)})).catch((function(t){}))},send:function(t){!this.loading&&this.content&&(this.$emit("send",{content:this.content}),this.content="",this.$refs.input.blur())},getModelId:function(){var t=this,n=void 0;if(this.prompts){var e=this.prompts.filter((function(n){return n._id===t.promptId}));e&&e.length&&(n=e[0].model_id)}return n},getType:function(){var t=this,n=void 0;if(this.prompts){var e=this.prompts.filter((function(n){return n._id===t.promptId}));e&&e.length&&(n=e[0].type)}return n},getPromptName:function(){var t=this,n=void 0;if(this.prompts&&this.promptId!=this.defalutId){var e=this.prompts.filter((function(n){return n._id===t.promptId}));e&&e.length&&(n=e[0].prompt_name)}return n}}},_=E,J=(e("7049"),Object(m["a"])(_,D,R,!1,null,"72d8b190",null)),T=J.exports,Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cc"},[e("div",{staticClass:"source",staticStyle:{"margin-top":"30px"}},[e("img",{staticClass:"icon",attrs:{src:t.relatedIcon}}),e("div",{staticClass:"title"},[t._v("Related")])]),e("div",{staticClass:"related"},t._l(t.questions,(function(n,i){return e("div",{key:i,staticClass:"item",on:{click:function(e){return t.sendMsg(n)}}},[e("div",{staticClass:"txt"},[t._v(" "+t._s(n))]),e("div",{staticClass:"add"},[t._v("+")])])})),0)])},B=[],F={data:function(){return{imgsrc:e("fb2d"),sourceIcon:e("3cae"),relatedIcon:e("4c21"),elId:(new Date).getTime()}},props:{questions:{type:Array}},computed:{isUser:function(){return this.info&&"user"===this.info.role}},mounted:function(){},methods:{sendMsg:function(t){this.$emit("send",{content:t})}}},U=F,Y=(e("c056"),Object(m["a"])(U,Z,B,!1,null,"5ec922e2",null)),z=Y.exports,M=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.show?i("div",{staticClass:"loader-inner"},[i("img",{staticClass:"loading-player",class:t.small?"small":"",attrs:{src:e("cf1c")}}),i("div",{staticClass:"wavy"},[t.message?[i("span",[t._v(t._s(t.message))])]:t._e()],2)]):t._e()},G=[],N={name:"Loading002",props:{show:Boolean,msg:Array,small:Boolean},data:function(){return{showIndex:0,timer:void 0}},computed:{message:function(){return this.msg&&this.msg.length?this.msg[this.showIndex]:"zh"===this.$i18n.locale?"加载中......":"hk"===this.$i18n.locale?"加載中......":void 0}},watch:{show:function(t){var n=this;this.msg&&this.msg.length&&(t?(this.showIndex=0,this.timer||(this.timer=setInterval((function(){n.showIndex<n.msg.length-1&&n.showIndex++}),3e3))):(clearInterval(this.timer),this.timer=null))}}},q=N,K=(e("5af5"),Object(m["a"])(q,M,G,!1,null,"074c68fe",null)),Q=K.exports;function X(t){return Object(o["a"])({url:"http://43.154.145.166:8707/video_g",method:"post",data:t})}function H(t){return Object(o["a"])({url:"http://43.154.145.166:8707/list",method:"post",data:t})}var W={components:{inputView:v,robot:I,user:L,firstInput:T,related:z,loadingItem:Q},data:function(){return{loading:!1,content:void 0,timer:void 0,videoList:void 0}},mounted:function(){var t=this;this.getData(),this.timer=setInterval((function(){setTimeout(t.getData,0)}),5e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{nextStep:function(){var t=new FormData;t.append("text",this.content),X(t).then((function(t){})).catch((function(t){})),this.$message.success("内容已提交，稍后视频将显示在下方！"),this.content=void 0},getData:function(){var t=this;H({}).then((function(n){t.videoList=n.data||[]})).catch((function(t){}))}}},P=W,V=(e("d2bf"),Object(m["a"])(P,i,s,!1,null,"fc0a2a38",null));n["default"]=V.exports},"1dac":function(t,n,e){},2586:function(t,n,e){},"3cae":function(t,n,e){t.exports=e.p+"static/img/source.46f0de1b.svg"},"41d2":function(t,n,e){},"4c21":function(t,n,e){t.exports=e.p+"static/img/related.1adf578e.svg"},"52e8":function(t,n,e){},"5af5":function(t,n,e){"use strict";e("b298")},"5e9a":function(t,n,e){},"61bc":function(t,n,e){"use strict";e("5e9a")},6267:function(t,n,e){"use strict";e("1dac")},7049:function(t,n,e){"use strict";e("52e8")},8485:function(t,n,e){},"8f93":function(t,n,e){"use strict";e("2586")},b298:function(t,n,e){},c056:function(t,n,e){"use strict";e("8485")},c69a:function(t,n,e){t.exports=e.p+"static/img/answer.50bb6a04.svg"},d2bf:function(t,n,e){"use strict";e("41d2")},fb2d:function(t,n){t.exports="data:image/png;base64,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"}}]);