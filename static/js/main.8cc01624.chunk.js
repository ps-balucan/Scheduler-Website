(this.webpackJsonpschedulerwebsite=this.webpackJsonpschedulerwebsite||[]).push([[0],{461:function(e,t,n){},462:function(e,t,n){},862:function(e,t){},863:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),o=n.n(s),i=(n(461),n(60)),r=(n(462),n(896)),l=n(895),d=n(894),u=n(865),j=n(890),b=n(887),h=n(15),m=function(){return Object(h.jsx)(b.a,{variant:"h5",style:{marginTop:"4rem"},children:"crs.scheduler"})},g=n(866),O=n(149),x=n.p+"static/media/classes.37a73850.csv",p=n(381),f=n.n(p),w=n(383),v=n(382),D=n(898),y=Object(g.a)({root:{marginTop:20},buttons:{justifyContent:"center",marginTop:20,marginBottom:40}}),k=Object(w.a)();function C(e){var t=y(),n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),d=l[0],u=l[1];Object(a.useEffect)((function(){Object(O.a)(x).then(o),console.log("Loaded data")}),[]);Object(O.b)(s,(function(e){return e.name}));console.log("Going here."),console.log(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v.a,{cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return new Promise((function(t){setTimeout((function(){t(function(e){return s.filter((function(t){return t.label.toLowerCase().includes(e.toLowerCase())}))}(e))}),1e3)}))},size:"large",isMulti:!0,onChange:function(e){u(e),console.log("input changed!!"),console.log(e)},value:d,components:k,className:t.root}),Object(h.jsx)(D.a,{id:"btn-go",onClick:function(){e.isLoading(!0),console.log("is loading: ");var t=Object(O.b)(d,(function(e){return e.value}));console.log(t),f.a.get("https://6wyc8n688h.execute-api.ap-southeast-1.amazonaws.com/dev/echo/main",{params:{message:t}}).then((function(t){console.log(t),e.data([t.data]),e.isLoading(!1)})).catch((function(t){console.log(t),e.isLoading(!1),e.data([["Error: One of the subjects you input does not exist."]])}))},className:t.buttons,variant:"outlined",size:"large",children:" Generate "})]})}var F=n(891),L=n(893),N=n(892),S=n(889);var T=n(897),I=n(110),z=n.n(I),E=(new Date(2015,3,17,17,0,0,0),new Date(2015,3,17,17,30,0,0),new Date(2015,3,15,20,0,0,0),new Date(2015,3,15,21,0,0,0),new Date(2015,3,13,7,0,0),new Date(2015,3,13,10,30,0),new Date(2015,3,13,7,0,0),new Date(2015,3,13,10,30,0),new Date(2015,3,13,7,0,0),new Date(2015,3,13,10,30,0),new Date(2015,3,17,19,30,0),new Date(2015,3,18,2,0,0),new Date(2015,3,20,19,30,0),new Date(2015,3,22,2,0,0),n(861),n(238)),B=n.n(E);function M(e){var t=Object.keys(z.a.Views).map((function(e){return z.a.Views[e]}));console.log("here i am at the calendar");var n=e.schedules[0];n=n.replace(/\'/g,'"');var a=JSON.parse(n);console.log(a);var c=a.flatMap((function(e){var t=function(e){for(var t=2021,n=e.split(" ").splice(-2),a=n[0].split("-"),c=n[1].split("-"),s=c[0].split(":"),o=s[0],i=s[1],r=c[1].split(":"),l=r[0],d=r[1],u=[],j=0;j<a.length;j++){var b={title:e.split(" ").slice(0,-2).join(" "),start:new Date(t,8,h,o,i),end:new Date(t,8,h,l,d)},h=19;switch(a[j]){case"M":h+=1;break;case"T":h+=2;break;case"W":h+=3;break;case"Th":h+=4;break;case"F":h+=5;break;case"S":h+=6;break;default:h=19}console.log("days here!"),console.log(h),b.start=new Date(t,8,h,o,i),b.end=new Date(t,8,h,l,d),u.push(b)}return console.log("generating.."),u}(e);return[t[0],t[1]]}));return console.log(c),Object(h.jsx)(z.a,{toolbar:!1,events:c,date:new Date(2021,8,20),step:50,views:t,view:"week",onView:function(){}})}B.a.locale("en"),z.a.momentLocalizer(B.a);var P=Object(j.a)({bullet:{justifyContent:"center",alignItems:"center",display:"flex"},modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:20,backgroundColor:"#FFF"}});function A(e){var t=P(),n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],o=c[1],l=function(){o(!s),console.log("modal toggled")};return Object(h.jsx)(r.a,{children:e.isLoading?Object(h.jsx)(F.a,{variant:"outlined",children:Object(h.jsx)(N.a,{className:t.bullet,children:Object(h.jsx)(S.a,{color:"inherit",children:" "})})}):e.schedules.map((function(n){return Object(h.jsxs)(F.a,{variant:"outlined",className:t.root,children:[Object(h.jsx)(N.a,{children:Object(h.jsx)(b.a,{variant:"body2",component:"p",children:n})}),Object(h.jsxs)(L.a,{children:[Object(h.jsx)(D.a,{size:"small",onClick:l,children:"SHOW IN CALENDAR"}),Object(h.jsx)(T.a,{open:s,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsxs)(d.a,{container:!0,direction:"row",children:[Object(h.jsx)(d.a,{item:!0,container:!0,direction:"column",xs:"auto",sm:2,children:" "}),Object(h.jsxs)(d.a,{item:!0,container:!0,direction:"column",xs:12,sm:8,className:t.modal,children:[Object(h.jsx)(b.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Schedule"}),Object(h.jsx)(M,{schedules:e.schedules}),Object(h.jsx)(D.a,{onClick:l,children:" Close"})]}),Object(h.jsx)(d.a,{item:!0,container:!0,direction:"column",xs:"auto",sm:2,children:" "})]})})]})]})}))})}var J=Object(j.a)({color:{background:"#970709"},secondary:{background:"#FFFFFF",flex:1,"flex-grow":1},paper:{textAlign:"center",color:"#B23E41"},card:{marginTop:30}});var V=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),j=o[0],b=o[1],g=J();return Object(h.jsxs)(r.a,{style:{height:"100vh"},children:[Object(h.jsx)(l.a,{}),Object(h.jsxs)(d.a,{container:!0,direction:"row",justify:"center",style:{height:"100%"},children:[Object(h.jsxs)(d.a,{item:!0,container:!0,direction:"row",className:g.color,style:{"flex-grow":0,height:"30%"},children:[Object(h.jsx)(d.a,{item:!0,xs:"auto",sm:2}),Object(h.jsxs)(d.a,{item:!0,xs:12,sm:8,align:"center",children:[Object(h.jsx)(m,{}),Object(h.jsx)(C,{data:c,isLoading:b})]}),Object(h.jsx)(d.a,{item:!0,xs:"auto",sm:2,children:"  "})]}),Object(h.jsxs)(d.a,{item:!0,container:!0,direction:"row",className:g.secondary,style:{"flex-grow":1,height:"70%"},children:[Object(h.jsx)(d.a,{item:!0,xs:2,sm:2,md:2,lg:2}),Object(h.jsxs)(d.a,{item:!0,xs:8,sm:8,md:8,lg:8,className:g.card,children:[Object(h.jsx)(A,{schedules:n,isLoading:j,children:"  "}),Object(h.jsxs)(u.a,{className:g.paper,children:[Object(h.jsx)("h3",{children:" Instructions"}),"Input the subjects you need to take this semester in the search bar above. The website will output a possible schedule you can take based on the released schedules in the UP Diliman website."]})]}),Object(h.jsx)(d.a,{item:!0,xs:2,sm:2,md:2,lg:2})]})]})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,902)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};n(862);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(V,{})}),document.getElementById("root")),G()}},[[863,1,2]]]);
//# sourceMappingURL=main.8cc01624.chunk.js.map