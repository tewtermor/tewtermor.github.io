import{d as m,r as y,o as x,v,g as I,t as N,au as C,A as T,x as p,z as _,Z as g,C as D,D as k,_ as A}from"./entry.b81563d5.js";const W=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(i,{slots:t,attrs:e}){const s=y(!1);return x(()=>{s.value=!0}),h=>{var l;if(s.value)return(l=t.default)==null?void 0:l.call(t);const o=t.fallback||t.placeholder;if(o)return o();const n=h.fallback||h.placeholder||"",a=h.fallbackTag||h.placeholderTag||"span";return v(a,e,n)}}});var B=m({name:"VueDrawingCanvas",props:{strokeType:{type:String,validator:i=>["dash","line","square","circle","triangle","half_triangle"].indexOf(i)!==-1,default:()=>"dash"},fillShape:{type:Boolean,default:()=>!1},width:{type:[String,Number],default:()=>600},height:{type:[String,Number],default:()=>400},image:{type:String,default:()=>""},eraser:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#000000"},lineWidth:{type:Number,default:()=>5},lineCap:{type:String,validator:i=>["round","square","butt"].indexOf(i)!==-1,default:()=>"round"},lineJoin:{type:String,validator:i=>["miter","round","bevel"].indexOf(i)!==-1,default:()=>"miter"},lock:{type:Boolean,default:()=>!1},styles:{type:[Array,String,Object]},classes:{type:[Array,String,Object]},backgroundColor:{type:String,default:()=>"#FFFFFF"},backgroundImage:{type:String,default:()=>null},watermark:{type:Object,default:()=>null},saveAs:{type:String,validator:i=>["jpeg","png"].indexOf(i)!==-1,default:()=>"png"},canvasId:{type:String,default:()=>"VueDrawingCanvas"},initialImage:{type:Array,default:()=>[]},additionalImages:{type:Array,default:()=>[]},outputWidth:{type:Number},outputHeight:{type:Number}},data(){return{loadedImage:null,drawing:!1,context:null,images:[],strokes:{type:"",from:{x:0,y:0},coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},guides:[],trash:[]}},mounted(){this.setContext(),this.$nextTick(()=>{this.drawInitialImage(),this.drawAdditionalImages()})},watch:{backgroundImage:function(){this.loadedImage=null}},methods:{async setContext(){let i=document.querySelector("#"+this.canvasId);this.context=this.context?this.context:i.getContext("2d"),await this.setBackground()},drawInitialImage(){this.initialImage&&this.initialImage.length>0&&(this.images=[].concat(this.images,this.initialImage),this.redraw(!0))},drawAdditionalImages(){if(this.additionalImages&&this.additionalImages.length>0){let i=document.querySelector("#"+this.canvasId);this.additionalImages.forEach(t=>{this.drawWatermark(i,this.context,t)})}},clear(){this.context.clearRect(0,0,Number(this.width),Number(this.height))},async setBackground(){this.clear(),this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,Number(this.width),Number(this.height)),await this.$nextTick(async()=>{await this.drawBackgroundImage()}),this.save()},async drawBackgroundImage(){if(this.loadedImage)this.context.drawImage(this.loadedImage,0,0,Number(this.width),Number(this.height));else return new Promise(i=>{if(!this.backgroundImage){i();return}const t=new Image;t.src=this.backgroundImage,t.onload=()=>{this.context.drawImage(t,0,0,Number(this.width),Number(this.height)),this.loadedImage=t,i()}})},getCoordinates(i){let t,e;if(i.touches&&i.touches.length>0){let h=document.querySelector("#"+this.canvasId).getBoundingClientRect();t=i.touches[0].clientX-h.left,e=i.touches[0].clientY-h.top}else t=i.offsetX,e=i.offsetY;return{x:t,y:e}},startDraw(i){if(!this.lock){this.drawing=!0;let t=this.getCoordinates(i);this.strokes={type:this.eraser?"eraser":this.strokeType,from:t,coordinates:[],color:this.eraser?this.backgroundColor:this.color,width:this.lineWidth,fill:this.eraser||this.strokeType==="dash"||this.strokeType==="line"?!1:this.fillShape,lineCap:this.lineCap,lineJoin:this.lineJoin},this.guides=[]}},draw(i){if(this.drawing){this.context||this.setContext();let t=this.getCoordinates(i);if(this.eraser||this.strokeType==="dash")this.strokes.coordinates.push(t),this.drawShape(this.context,this.strokes,!1);else{switch(this.strokeType){case"line":this.guides=[{x:t.x,y:t.y}];break;case"square":this.guides=[{x:t.x,y:this.strokes.from.y},{x:t.x,y:t.y},{x:this.strokes.from.x,y:t.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"triangle":let e=Math.floor((t.x-this.strokes.from.x)/2)<0?Math.floor((t.x-this.strokes.from.x)/2)*-1:Math.floor((t.x-this.strokes.from.x)/2),s=this.strokes.from.x<t.x?this.strokes.from.x+e:this.strokes.from.x-e;this.guides=[{x:t.x,y:this.strokes.from.y},{x:s,y:t.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"half_triangle":this.guides=[{x:t.x,y:this.strokes.from.y},{x:this.strokes.from.x,y:t.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"circle":let h=this.strokes.from.x-t.x<0?(this.strokes.from.x-t.x)*-1:this.strokes.from.x-t.x;this.guides=[{x:this.strokes.from.x>t.x?this.strokes.from.x-h:this.strokes.from.x+h,y:this.strokes.from.y},{x:h,y:h}];break}this.drawGuide(!0)}}},drawGuide(i){this.redraw(!0),this.$nextTick(()=>{this.context.strokeStyle=this.color,this.context.lineWidth=1,this.context.lineJoin=this.lineJoin,this.context.lineCap=this.lineCap,this.context.beginPath(),this.context.setLineDash([15,15]),this.strokes.type==="circle"?this.context.ellipse(this.guides[0].x,this.guides[0].y,this.guides[1].x,this.guides[1].y,0,0,Math.PI*2):(this.context.moveTo(this.strokes.from.x,this.strokes.from.y),this.guides.forEach(t=>{this.context.lineTo(t.x,t.y)}),i&&this.context.closePath()),this.context.stroke()})},drawShape(i,t,e){i.strokeStyle=t.color,i.fillStyle=t.color,i.lineWidth=t.width,i.lineJoin=t.lineJoin===void 0?this.lineJoin:t.lineJoin,i.lineCap=t.lineCap===void 0?this.lineCap:t.lineCap,i.beginPath(),i.setLineDash([]),t.type==="circle"?i.ellipse(t.coordinates[0].x,t.coordinates[0].y,t.coordinates[1].x,t.coordinates[1].y,0,0,Math.PI*2):(i.moveTo(t.from.x,t.from.y),t.coordinates.forEach(s=>{i.lineTo(s.x,s.y)}),e&&i.closePath()),t.fill?i.fill():i.stroke()},stopDraw(){this.drawing&&(this.strokes.coordinates=this.guides.length>0?this.guides:this.strokes.coordinates,this.images.push(this.strokes),this.redraw(!0),this.drawing=!1,this.trash=[])},reset(){this.lock||(this.images=[],this.strokes={type:"",coordinates:[],color:"",width:"",fill:!1,lineCap:"",lineJoin:""},this.guides=[],this.trash=[],this.redraw(!0))},undo(){if(!this.lock){let i=this.images.pop();i&&(this.trash.push(i),this.redraw(!0))}},redo(){if(!this.lock){let i=this.trash.pop();i&&(this.images.push(i),this.redraw(!0))}},async redraw(i){i=typeof i<"u"?i:!0,await this.setBackground().then(()=>{this.drawAdditionalImages()}).then(()=>{let t=document.createElement("canvas"),e=t.getContext("2d");t.width=Number(this.width),t.height=Number(this.height),e&&(this.images.forEach(s=>{e&&(e.globalCompositeOperation=s.type==="eraser"?"destination-out":"source-over",(s.type!=="circle"||s.type==="circle"&&s.coordinates.length>0)&&this.drawShape(e,s,!(s.type==="eraser"||s.type==="dash"||s.type==="line")))}),this.context.drawImage(t,0,0,Number(this.width),Number(this.height)))}).then(()=>{i&&this.save()})},wrapText(i,t,e,s,h,o){const n=/(\r\n|\n\r|\n|\r)+/g,a=/\s+/g;var l=t.split(n).filter(c=>c.length>0);for(let c=0;c<l.length;c++){for(var r=l[c].split(a).filter(w=>w.length>0),d="",u=0;u<r.length;u++){var f=d+r[u]+" ",S=i.measureText(f),b=S.width;b>h&&u>0?(this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&this.watermark.fontStyle.drawType==="stroke"?i.strokeText(d,e,s):i.fillText(d,e,s),d=r[u]+" ",s+=o):d=f}this.watermark&&this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&this.watermark.fontStyle.drawType==="stroke"?i.strokeText(d,e,s):i.fillText(d,e,s),s+=r.length>0?o:0}},save(){let i=document.querySelector("#"+this.canvasId);if(this.watermark){let t=document.createElement("canvas"),e=t.getContext("2d");e&&(t.width=Number(this.width),t.height=Number(this.height),e.drawImage(i,0,0,Number(this.width),Number(this.height)),this.drawWatermark(t,e,this.watermark))}else{let t=document.createElement("canvas"),e=t.getContext("2d"),s=this.outputWidth===void 0?this.width:this.outputWidth,h=this.outputHeight===void 0?this.height:this.outputHeight;if(t.width=Number(s),t.height=Number(h),e)return e.drawImage(i,0,0,Number(s),Number(h)),this.$emit("update:image",t.toDataURL("image/"+this.saveAs,1)),t.toDataURL("image/"+this.saveAs,1)}},drawWatermark(i,t,e){if(e.type==="Image"){let s=e.imageStyle?e.imageStyle.width?e.imageStyle.width:Number(this.width):Number(this.width),h=e.imageStyle?e.imageStyle.height?e.imageStyle.height:Number(this.height):Number(this.height);const o=new Image;o.src=e.source,o.onload=()=>{e&&t&&t.drawImage(o,e.x,e.y,Number(s),Number(h));let n=document.createElement("canvas"),a=n.getContext("2d"),l=this.outputWidth===void 0?this.width:this.outputWidth,r=this.outputHeight===void 0?this.height:this.outputHeight;if(n.width=Number(l),n.height=Number(r),a)return a.drawImage(i,0,0,Number(l),Number(r)),this.$emit("update:image",n.toDataURL("image/"+this.saveAs,1)),n.toDataURL("image/"+this.saveAs,1)}}else if(e.type==="Text"){let s=e.fontStyle&&e.fontStyle.font?e.fontStyle.font:"20px serif",h=e.fontStyle&&e.fontStyle.textAlign?e.fontStyle.textAlign:"start",o=e.fontStyle&&e.fontStyle.textBaseline?e.fontStyle.textBaseline:"alphabetic",n=e.fontStyle&&e.fontStyle.color?e.fontStyle.color:"#000000";if(t.font=s,t.textAlign=h,t.textBaseline=o,e.fontStyle&&e.fontStyle.rotate){let u,f;e.fontStyle&&e.fontStyle.width?u=e.x+Math.floor(e.fontStyle.width/2):u=e.x,e.fontStyle&&e.fontStyle.lineHeight?f=e.y+Math.floor(e.fontStyle.lineHeight/2):f=e.y,t.translate(u,f),t.rotate(e.fontStyle.rotate*Math.PI/180),t.translate(u*-1,f*-1)}e.fontStyle&&e.fontStyle.drawType&&e.fontStyle.drawType==="stroke"?(t.strokeStyle=e.fontStyle.color,e.fontStyle&&e.fontStyle.width?this.wrapText(t,e.source,e.x,e.y,e.fontStyle.width,e.fontStyle.lineHeight):t.strokeText(e.source,e.x,e.y)):(t.fillStyle=n,e.fontStyle&&e.fontStyle.width?this.wrapText(t,e.source,e.x,e.y,e.fontStyle.width,e.fontStyle.lineHeight):t.fillText(e.source,e.x,e.y));let a=document.createElement("canvas"),l=a.getContext("2d"),r=this.outputWidth===void 0?this.width:this.outputWidth,d=this.outputHeight===void 0?this.height:this.outputHeight;if(a.width=Number(r),a.height=Number(d),l)return l.drawImage(i,0,0,Number(r),Number(d)),this.$emit("update:image",a.toDataURL("image/"+this.saveAs,1)),a.toDataURL("image/"+this.saveAs,1)}},isEmpty(){return!(this.images.length>0)},getAllStrokes(){return this.images}},render(){return I("canvas",{id:this.canvasId,height:Number(this.height),width:Number(this.width),style:{touchAction:"none",...this.styles},class:this.classes,onMousedown:i=>this.startDraw(i),onMousemove:i=>this.draw(i),onMouseup:()=>this.stopDraw(),onMouseleave:()=>this.stopDraw(),onTouchstart:i=>this.startDraw(i),onTouchmove:i=>this.draw(i),onTouchend:()=>this.stopDraw(),onTouchleave:()=>this.stopDraw(),onTouchcancel:()=>this.stopDraw(),onPointerdown:i=>this.startDraw(i),onPointermove:i=>this.draw(i),onPointerup:()=>this.stopDraw(),onPointerleave:()=>this.stopDraw(),onPointercancel:()=>this.stopDraw()})}});const H=i=>(D("data-v-fd165f2f"),i=i(),k(),i),M={class:"noselect"},P=H(()=>p("h1",{style:{"text-align":"center"}},"Drawing",-1)),J={class:"drawing"},E=m({__name:"test1",setup(i){const t=y(500),e=y(500);return x(()=>{t.value=window.innerWidth-32,e.value=window.innerHeight-128,console.log(t,e)}),(s,h)=>{const o=W;return N(),C(o,null,{default:T(()=>[p("div",M,[P,p("div",J,[_(g(B),{width:g(t),height:g(e),eraser:!1,lineWidth:3,lineJoin:"round",lock:!1},null,8,["width","height"])])])]),_:1})}}});const O=A(E,[["__scopeId","data-v-fd165f2f"]]);export{O as default};
