(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{144:function(e,a,t){e.exports=t(237)},153:function(e,a,t){},216:function(e,a,t){},217:function(e,a,t){},237:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(10),i=t.n(l),o=(t(149),t(150),t(151),t(152),t(24)),c=(t(153),t(15)),s=t(238),m=t(266),d=t(53),p=t(6),g=t(77),h=t.n(g);var u={WEATHER_API_KEY:"4fd7addc78281697bde98a701e9006d6",NEWS_API:"5de39280cf6b49c1aeef1c0b14c6754f"};function E(e){return"http://openweathermap.org/img/wn/"+e+"@2x.png"}class b extends r.a.Component{constructor(e){super(e),this.state={}}renderHourly(){if(this.props.weatherData.hourly.length>0){let e=1;return this.props.weatherData.hourly.map((a,t)=>{if(e<=4)return e++,r.a.createElement(m.a,{item:!0,xs:3,key:a.dt},r.a.createElement(d.a,{align:"center",variant:"subtitle2",style:{color:"white"}},function(e){var a=(e=(e=new Date(1e3*e)).getHours())>=12?"PM":"AM";return(e=(e%=12)||12)+" "+a}(a.dt)),r.a.createElement(d.a,{align:"center",variant:"h6",color:"primary",style:{color:"white"}},Math.round(a.temp-273),"\xb0"),r.a.createElement("img",{src:E(a.weather[0].icon),style:{display:"block",margin:"-15px auto",padding:"0",width:"50px"}}))})}return null}render(){const e=this.props.classes;let a=new Date(1e3*this.props.weatherData.current.dt),t=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],n=a.getDate();return n=n+" "+t,r.a.createElement("div",{style:{backgroundColor:"black"},className:e.WeatherDiv1},r.a.createElement(d.a,{align:"center",variant:"h5",style:{color:"white"}},this.props.CT_NAME,", ",n),r.a.createElement(m.a,{container:!0,style:{padding:20}},r.a.createElement(m.a,{item:!0,lg:6,xs:6},r.a.createElement(d.a,{align:"center",variant:"subtitle2",style:{color:"white"}},"Day ",Math.round(this.props.weatherData.daily[0].temp.day-273),"\xb0 - Night"," ",Math.round(this.props.weatherData.daily[0].temp.night-273),"\xb0"),r.a.createElement(d.a,{align:"center",variant:"h3",style:{color:"white"}},Math.round(this.props.weatherData.current.temp-273),"\xb0C"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",style:{color:"white"}},"Feels Like"," ",this.props.weatherData.hourly.length>0?Math.round(this.props.weatherData.hourly[0].feels_like-273):0,"\xb0")),r.a.createElement(m.a,{item:!0,lg:6,xs:6},r.a.createElement("img",{src:E(this.props.weatherData.current.weather[0].icon),className:e.images}),r.a.createElement(d.a,{align:"center",variant:"subtitle1",style:{color:"white"}},this.props.weatherData.current.weather[0].main))),r.a.createElement("hr",null),r.a.createElement(m.a,{container:!0},this.renderHourly()))}}var f=Object(p.a)(e=>({textColor:{color:"#7f7f7f"},images:{display:"block",margin:"-15px auto",padding:"0",width:"100px"},images2:{display:"block",margin:"-15px auto",padding:"0",width:"50px"},sections:{marginTop:"20px"},WeatherDiv1:{padding:"15% 0px"}}))(b),y=t(284),x=t(121),v=t.n(x),w=(t(99),t(269));class k extends r.a.Component{constructor(e){super(e),this.state={weatherData1:{current:{dt:0,temp:0,feels_like:0,weather:[{icon:"50n",main:""}]},daily:[{temp:{day:0,night:0}}],hourly:[]},weatherData2:{current:{dt:0,temp:0,feels_like:0,weather:[{icon:"50n",main:""}]},daily:[{temp:{day:0,night:0}}],hourly:[]},loading:!1,noInternet1:!1,noInternet2:!1,swapDiv:!1,opacityVal:.9,imageLoading:!0}}componentDidMount(){this.setState({loading:!0}),setInterval(()=>this.setState({date:new Date}),1e3),h.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&appid="+u.WEATHER_API_KEY).then(e=>{this.setState({weatherData1:e.data}),setTimeout(()=>{this.setState({loading:!1})},200)}).catch(e=>{this.setState({loading:!1,noInternet1:!0})}),h.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=23.5450&lon=89.1726&appid="+u.WEATHER_API_KEY).then(e=>{this.setState({weatherData2:e.data})}).catch(e=>{this.setState({loading:!1,noInternet2:!0})})}render(){const e=this.props.classes;return r.a.createElement("div",{className:"px-lg-5 px-md-5"},r.a.createElement("div",{className:"px-lg-5 px-md-5"},r.a.createElement(s.a,{elevation:24,className:e.containerDiv},r.a.createElement(m.a,{container:!0,spacing:0,className:e.sections},r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement("div",{className:e.personalInfo},r.a.createElement("img",{src:"./01.jpg",onLoad:()=>this.setState({imageLoading:!1}),style:{display:this.state.imageLoading?"none":"block"},className:e.images}),this.state.imageLoading?r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(w.a,{variant:"circle",width:200,height:200,style:{background:"#36373b"}})):null,r.a.createElement("br",null),this.state.imageLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"50%",margin:"0 auto"}},r.a.createElement(d.a,{align:"center",variant:"h4"},r.a.createElement(w.a,{width:"90%",style:{background:"#36373b",marginLeft:"5%"}})),r.a.createElement(w.a,{width:"60%",height:20,style:{background:"#36373b",marginLeft:"20%"}}),r.a.createElement(w.a,{width:"80%",height:20,style:{background:"#36373b",marginLeft:"10%"}}),r.a.createElement(w.a,{width:"70%",height:20,style:{background:"#36373b",marginLeft:"15%"}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{align:"center",variant:"h5",color:"secondary"},"Nakib Hossain"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",className:e.textColor},"CSE, RUET"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",className:e.textColor},"hussain0296@gmail.com"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",className:e.textColor},"+8801967101376")))),r.a.createElement(m.a,{item:!0,lg:8,md:6,sm:12,xs:12},this.state.loading?r.a.createElement("div",{className:e.Spinner},r.a.createElement(y.a,{size:"large"})):r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,lg:6,xs:12},r.a.createElement("div",null,0==this.state.noInternet1?r.a.createElement(f,{weatherData:this.state.weatherData1,CT_NAME:"Dhaka"}):null)),r.a.createElement(m.a,{item:!0,lg:6,xs:12,style:{background:"black"}},r.a.createElement("div",{style:{width:"250px",margin:"15% auto"}},r.a.createElement(v.a,{value:this.state.date,hourHandLength:60,hourHandOppositeLength:20,hourHandWidth:8,hourMarksLength:20,hourMarksWidth:8,minuteHandLength:90,minuteHandOppositeLength:20,minuteHandWidth:6,minuteMarksWidth:3,secondHandLength:75,secondHandOppositeLength:25,secondHandWidth:3,size:250,minuteMarksLength:6,renderHourMarks:!0,renderMinuteHand:!0,renderMinuteMarks:!0,renderSecondHand:!0,className:e.ClockPos})))))))))}}var S=Object(p.a)(e=>({Spinner:{textAlign:"center",background:"rgba(0, 0, 0, 0.05)",borderRadius:"4px",marginBottom:"20px",padding:"153px 50px",height:"100%"},textColor:{color:"#7f7f7f"},images:{borderRadius:"50%",display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"},personalInfo:{padding:"30px 0px",backgroundColor:"#000",height:"100%"},sections:{marginTop:"40px"},ClockPos:{backgroundColor:"#ffffff",borderColor:"#ffffff",borderRadius:"50%"},containerDiv:{maxWidth:"1500px",margin:"0 auto"}}))(k),N=t(20),j=t(270),C=t(39),D=t(280),O=t(286),W=t(271),P=t(272),I=t(281),_=t(273),M=t(279);const R="<b style='color:green'>Description:</b><br/> Doctors can write prescription with a few clicks by our user friendly UI, mail the patient or print them. <br/>Provides every important aspects related to patient and prescription in one place. <br/>Stores patient records with treatment and consists huge medicine database. <br/><br/><b  style='color:green'>My Contribution:</b><br/> I worked in this project as a part time front end developer in Reactjs - Redux under the team 71bits, a startup company. <br/> I am currently working in the patient android app of this project with React-Native. I am working with them as a part time developer for more than a year",H="<b style='color:green'>Description:</b><br/> Talibe-Ilm is a web based generalised Madrasa / School management application. <br/>The main features are keeping tracks of expense revenue and other financial records, efficient Student management and performance tracking, handling course curriculam and employee management, results & notice publishing etc<br/><br/><b  style='color:green'>My Contribution:</b><br/> I worked in this project as a front end developer in Reactjs - Redux with a three man team led by <a href='https://www.linkedin.com/in/hasan-cse/' target='_blank'>Hasanul Islam</a>. The back end was handled by <a href='https://www.linkedin.com/in/adilreza043/' target='_blank'>Adil Reza</a> and I handled the whole front end. <br/>",L="<b style='color:green'>Description:</b><br/> Daily-Shobji is an e-commerce solution for fresh vegetables, an upcoming startup by <a href='https://aamartaka.com' target='_blank'>Aamartaka.com<a/> team. <br/>Buy Daily Vegetables as a package with proper nutrition plan for family or sick people who needs to follow strict nutrition plan. <br/> Create your own custom package with different vegetables. <br/>Buy vegetables in monthly plan and get discount etc.<br/> <br/><b  style='color:green'>My Contribution:</b><br/> I led the front end of this project as a full time Software Developer at <a href='https://aamartaka.com' target='_blank'>Aamartaka.com<a/>, where we used Reactjs - Redux as our main front end technology. It's a subsidiary project by the mother company Aamartaka.com<br/>",A="<b style='color:green'>Description:</b><br/> Online News portal mainly focused on University news. <br/>Covers daily news of public/private institutions in Bangladesh, national and international news, career and scholarship news, motivational stories of students etc. <br/> Promotes Student journalism and gives a platform to gather experience for beginner journalists.<br/> <br/><b  style='color:green'>My Contribution:</b><br/> It's a client project. I developed the entire thing.<br/>",T=[{imgPath:"./epres01.png"},{imgPath:"./epres02.png"},{imgPath:"./ePres04.png"},{imgPath:"./epres05.png"}],z=[{imgPath:"./madrasa10.png"},{imgPath:"./madrasa06.png"},{imgPath:"./madrasa04.png"},{imgPath:"./madrasa09.png"},{imgPath:"./madrasa03.png"},{imgPath:"./madrasa02.png"}],B=Object(j.a)(e=>({card:{width:"100%"},media:{height:180},root:{maxWidth:400,flexGrow:1},gridPadding:{"@media (min-width:320px)":{padding:"10px !important"},"@media (min-width:768px)":{padding:"20px !important"},"@media (min-width:1024px)":{padding:"35px !important"},"@media (min-width:1400px)":{padding:"45px !important"}}}));var G=()=>{const e=B();return r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:e.gridPadding},r.a.createElement(W.a,{className:e.card},r.a.createElement(P.a,{title:r.a.createElement(w.a,{animation:"wave",height:20,width:"50%",style:{marginBottom:6}}),subheader:r.a.createElement(w.a,{animation:"wave",height:10,width:"80%"})}),r.a.createElement(w.a,{animation:"wave",variant:"rect",className:e.media}),r.a.createElement(_.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(w.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(w.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(w.a,{animation:"wave",height:10,width:"80%"})),r.a.createElement(d.a,{variant:"h3"},r.a.createElement(w.a,{width:"100%"})))))},J=t(124),F=t.n(J),U=t(125),V=t(134),K=t(285),Y=t(274),$=t(276),q=t(277),Q=t(275),X=t(126),Z=t.n(X);t(216);const ee=e=>({root:{margin:0,paddingTop:"1rem",paddingBottom:"0.2rem"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500],border:"none !important",outline:"none !important"},dialogPaper:{borderRadius:"10px"}}),ae=Object(p.a)(ee)(e=>{const a=e.children,t=e.classes,n=e.onClose,l=Object(V.a)(e,["children","classes","onClose"]);return r.a.createElement(Y.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(d.a,{variant:"h6"},a),n?r.a.createElement(Q.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(Z.a,null)):null)}),te=Object(p.a)(e=>({root:{padding:e.spacing(2)}}))($.a);Object(p.a)(e=>({root:{margin:0,padding:e.spacing(1)}}))(q.a);class ne extends r.a.Component{constructor(e){super(e),this.state={open:e.open}}render(){const e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(K.a,{onClose:this.props.handleClose,"aria-labelledby":"customized-dialog-title",open:this.props.open,fullWidth:!0,disableBackdropClick:!0,scroll:"body",classes:{paper:e.dialogPaper}},r.a.createElement(ae,{style:{textAlign:"center",fontFamily:"Exo 2"},onClose:this.props.handleClose},this.props.nutritionOf),r.a.createElement(te,null,r.a.createElement("div",{className:"n-info"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.nutrition_details}})))))}}var re=Object(p.a)(ee)(ne);const le=Object(U.autoPlay)(F.a),ie=Object(j.a)(e=>({card:{width:"100%"},media:{height:180},root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:180,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},img2:{height:160,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},button1:{background:"#418a3b",color:"#fff",width:"98%",border:"none !important",outline:"none !important","&:hover":{background:"#348c2d"}},button2:{background:"#5db83c",flexGrow:1,border:"none !important",outline:"none !important","&:hover":{background:"#4eba27"}},wrapper:{margin:"20px auto","@media (min-width:320px)":{width:"90%"},"@media (min-width:768px)":{width:"85%"},"@media (min-width:1024px)":{width:"85%"},"@media (min-width:1400px)":{width:"70%"}},gridPadding:{"@media (min-width:320px)":{padding:"10px !important"},"@media (min-width:768px)":{padding:"20px !important"},"@media (min-width:1024px)":{padding:"35px !important"},"@media (min-width:1400px)":{padding:"45px !important"}}}));var oe=e=>{const a=Object(n.useState)(!0),t=Object(N.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(!1),c=Object(N.a)(o,2),s=c[0],p=c[1],g=Object(n.useState)(""),h=Object(N.a)(g,2),u=h[0],E=h[1],b=Object(n.useState)(""),f=Object(N.a)(b,2),y=f[0],x=f[1],v=(e,a)=>{p(!0),E(e),x(a)};Object(n.useEffect)(()=>{setTimeout(()=>{i(!1)},1e3)},[]);const w=r.a.useState(0),k=Object(N.a)(w,2),S=k[0],j=k[1],B=(T.length,r.a.useState(0)),J=Object(N.a)(B,2),F=J[0],U=J[1],V=(z.length,window.innerWidth,ie()),K=Object(C.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:V.wrapper},0==l?r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:V.gridPadding},r.a.createElement(W.a,{className:V.root,elevation:"12"},r.a.createElement(P.a,{title:"E-DoctorScript",subheader:"Cross Platform Desktop Application",style:{color:"green"}}),r.a.createElement(le,{axis:"rtl"===K.direction?"x-reverse":"x",index:S,onChangeIndex:e=>{j(e)},enableMouseEvents:!0},T.map((e,a)=>r.a.createElement("div",{key:e.imgPath},Math.abs(S-a)<=2?r.a.createElement("img",{className:V.img,src:e.imgPath}):null))),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("i",null,r.a.createElement("span",{style:{color:"green"}},"Development Tools:"," "),"ReactJs, Redux, ElectronJs, Java Spring"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"https://e-doctorscript.com/",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:V.button1},"Website")),r.a.createElement(D.a,{variant:"contained",className:V.button2,onClick:()=>v("E-DoctorScript",R)},"Details")))),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:V.gridPadding},r.a.createElement(W.a,{className:V.root,elevation:"12"},r.a.createElement(P.a,{title:"Talibe-ilm",subheader:"Madrasa Management Application",style:{color:"green"}}),r.a.createElement(le,{axis:"rtl"===K.direction?"x-reverse":"x",index:F,onChangeIndex:e=>{U(e)},enableMouseEvents:!0,interval:4e3},z.map((e,a)=>r.a.createElement("div",{key:e.imgPath},Math.abs(F-a)<=2?r.a.createElement("img",{className:V.img2,src:e.imgPath}):null))),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p",className:"mt-3 pb-1"},r.a.createElement("i",null,r.a.createElement("span",{style:{color:"green"}},"Development Tools:"," "),"ReactJs, Redux, Django Rest Framework"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"javascript:void(0)",style:{flexGrow:1},target:"_blank"},r.a.createElement(O.a,{title:"Guest view not available yet"},r.a.createElement(D.a,{variant:"contained",className:V.button1},"Demo"))),r.a.createElement(D.a,{variant:"contained",className:V.button2,onClick:()=>v("Talibe-ilm",H)},"Details")))),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:V.gridPadding},r.a.createElement(W.a,{className:V.root,elevation:"12"},r.a.createElement(P.a,{title:"Daily-Shobji",subheader:"E-commerce site for fresh vegetables",style:{color:"green"}}),r.a.createElement(I.a,{className:V.media,image:"./dailyShobji.png",title:"Daily-Shobji"}),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("i",null,r.a.createElement("span",{style:{color:"green"}},"Development Tools:"," "),"ReactJs, Redux, Django Rest Framework"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"http://test.dailyshobji.com/",style:{flexGrow:1},target:"_blank"},r.a.createElement(O.a,{title:"Test Version"},r.a.createElement(D.a,{variant:"contained",className:V.button1},"Live Demo"))),r.a.createElement(D.a,{variant:"contained",className:V.button2,onClick:()=>v("Daily-Shobji",L)},"Details")))),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:V.gridPadding},r.a.createElement(W.a,{className:V.root,elevation:"12"},r.a.createElement(P.a,{title:"VarsityVoice",subheader:"An Online News Portal",style:{color:"green"}}),r.a.createElement(I.a,{className:V.media,image:"./varsityvoice.png",title:"VarsityVoice"}),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("i",null,r.a.createElement("span",{style:{color:"green"}},"Development Tools:"," "),"HTML, CSS, JavaScript, Php"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"https://www.varsityvoice.net/",style:{flexGrow:1},target:"_blank"},r.a.createElement(O.a,{title:"Test Version"},r.a.createElement(D.a,{variant:"contained",className:V.button1},"Live Demo"))),r.a.createElement(D.a,{variant:"contained",className:V.button2,onClick:()=>v("VarsityVoice",A)},"Details"))))):r.a.createElement(m.a,{container:!0,style:{padding:"1px"}},r.a.createElement(G,null),r.a.createElement(G,null),r.a.createElement(G,null))),r.a.createElement(re,{open:s,nutritionOf:u,nutrition_details:y,handleClose:()=>{p(!1)},padding:"20px"}))};t(217);const ce=Object(j.a)(e=>({card:{width:"100%"},media:{height:240},root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},small:{width:e.spacing(3),height:e.spacing(3)},button1:{background:"#3996cc",color:"#fff",width:"100%",border:"none !important",outline:"none !important","&:hover":{background:"#278fcc"}},button2:{background:"#011e30",color:"#fff",flexGrow:1,border:"none !important",outline:"none !important","&:hover":{background:"#012942"}},wrapper:{margin:"20px auto","@media (min-width:320px)":{width:"90%"},"@media (min-width:768px)":{width:"85%"},"@media (min-width:1024px)":{width:"85%"},"@media (min-width:1400px)":{width:"70%"}},gridPadding:{"@media (min-width:320px)":{padding:"10px !important"},"@media (min-width:768px)":{padding:"20px !important"},"@media (min-width:1024px)":{padding:"30px !important"},"@media (min-width:1400px)":{padding:"40px !important"}}}));var se=e=>{const a=Object(n.useState)(!0),t=Object(N.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(!1),c=Object(N.a)(o,2),s=(c[0],c[1],Object(n.useState)("")),p=Object(N.a)(s,2),g=(p[0],p[1],Object(n.useState)("")),h=Object(N.a)(g,2);h[0],h[1];Object(n.useEffect)(()=>{setTimeout(()=>{i(!1)},1e3)},[]);window.innerWidth;const u=ce();Object(C.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.wrapper},0==l?r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:u.gridPadding},r.a.createElement(W.a,{className:u.root,elevation:"12"},r.a.createElement(P.a,{title:"AWS Fundamentals: Going Cloud-Native",className:"cardHeader",style:{color:"#3996cc"}}),r.a.createElement(I.a,{className:u.media,image:"./coursera1.png",title:"AWS Coursera"}),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("i",null,"by Coursera"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"https://www.coursera.org/learn/aws-fundamentals-going-cloud-native",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:u.button2},"Course Link")),r.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/records/WSDSBTNE75GR",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:u.button1},"View Credential"))))),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:u.gridPadding},r.a.createElement(W.a,{className:u.root,elevation:"12"},r.a.createElement(P.a,{title:"Ultimate AWS Certified Cloud Practitioner - 2020",className:"cardHeader",style:{color:"#3996cc"}}),r.a.createElement(I.a,{className:u.media,image:"./udemy1.jpg",title:"AWS Udemy"}),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("i",null,"by Stephane Maarek, Udemy"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"https://www.udemy.com/course/aws-certified-cloud-practitioner-new/",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:u.button2},"Course Link")),r.a.createElement("a",{href:"https://www.udemy.com/certificate/UC-1922951a-987a-4ecc-a646-e090eb7fe68b/",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:u.button1},"View Credential"))))),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12,className:u.gridPadding},r.a.createElement(W.a,{className:u.root,elevation:"12"},r.a.createElement(P.a,{title:"Modern JavaScript for React JS - ES6",className:"cardHeader",style:{color:"#3996cc"}}),r.a.createElement(I.a,{className:u.media,image:"./udemy2.jpg",title:"ES6 Udemy"}),r.a.createElement(_.a,null,r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("i",null,"by Udemy"))),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement("a",{href:"https://www.udemy.com/course/modern-javascript-es6-for-react-js/",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:u.button2},"Course Link")),r.a.createElement("a",{href:"https://www.udemy.com/certificate/UC-f2cd5b05-cb35-406c-bfd9-9b11aa9636a2/",style:{flexGrow:1},target:"_blank"},r.a.createElement(D.a,{variant:"contained",className:u.button1},"View Credential")))))):r.a.createElement(m.a,{container:!0,style:{padding:"1px"}},r.a.createElement(G,null),r.a.createElement(G,null),r.a.createElement(G,null))))},me=t(287),de=t(44),pe=t.n(de),ge=t(27),he=t.n(ge);var ue=Object(p.a)(e=>({sections:{marginTop:"20px"},containerDiv:{maxWidth:"1500px",margin:"10px auto"},personalInfo:{padding:"20px",backgroundColor:"#fff",height:"100%"},personalInfo2:{backgroundColor:"#fff",height:"100%","@media (min-width:320px)":{padding:"35px 20px 0px"},"@media (min-width:768px)":{padding:"10px 20px 10px"},"@media (min-width:1024px)":{padding:"5px 20px 0"}},personalInfo3:{padding:"3px 20px 20px",backgroundColor:"#fff",height:"100%"},images:{display:"block",transition:"transform .2s","&:hover":{transform:"scale(1.25) translate(10%, 10%)"},"@media (min-width:320px)":{width:"80%"},"@media (min-width:1000px)":{width:"60%"},"@media (min-width:1100px)":{width:"80%"}},infoHeader:{marginBottom:"5px"}}))(e=>{const a=Object(n.useState)(!0),t=Object(N.a)(a,2),l=t[0],i=t[1];console.log(l);const o=e.classes;return r.a.createElement("div",{className:"px-lg-5 px-md-5"},r.a.createElement("div",{className:"px-lg-5 px-md-5"},r.a.createElement(s.a,{elevation:24,className:o.containerDiv},r.a.createElement(m.a,{container:!0,spacing:0,className:o.sections},r.a.createElement(m.a,{item:!0,lg:3,md:6,sm:12,xs:12},r.a.createElement("div",{className:o.personalInfo},r.a.createElement("img",{src:"./img3.jpg",onLoad:()=>i(!1),className:o.images,style:{display:l?"none":"block"}}),l?r.a.createElement(w.a,{variant:"rect",width:200,height:200}):null)),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement("div",{className:o.personalInfo},r.a.createElement(d.a,{align:"left",variant:"h5",color:"secondary",className:o.infoHeader},"Personal Info:"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Name:")," Nakib Hossain"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Birthday:")," 09 Feb, 1997"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Mobile:")," +8801967101376"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Email:")," hussain0296@gmail.com"),r.a.createElement(d.a,{align:"left",variant:"subtitle1",style:{width:"300px"}},r.a.createElement("b",null,"Address:")," Hamdah, Jhenidah Sadar, Jhenidah"))),r.a.createElement(m.a,{item:!0,lg:5,md:6,sm:12,xs:12},r.a.createElement("div",{className:o.personalInfo},r.a.createElement(d.a,{align:"left",variant:"h5",color:"secondary",className:o.infoHeader},"Education:"),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},"BSc. in Computer Science & Engineering,"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Rajshahi University of Engineering & Technology")),r.a.createElement(d.a,{align:"left",variant:"subtitle2",className:"pt-2"},"HSC - 2014"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Govt K.C College, Jhenidah")),r.a.createElement(d.a,{align:"left",variant:"subtitle2",className:"pt-2"},"SSC - 2012"),r.a.createElement(d.a,{align:"left",variant:"subtitle1"},r.a.createElement("b",null,"Govt Boys High School, Jhenidah")))),r.a.createElement(m.a,{item:!0,lg:3,md:6,sm:12,xs:12},r.a.createElement("div",{className:o.personalInfo2},r.a.createElement(d.a,{align:"left",variant:"h5",color:"secondary",className:o.infoHeader},"Problem Solving:"),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("a",{href:"https://codeforces.com/profile/NAkib_RUET",target:"_blank"},"Codeforces -"),r.a.createElement("i",null," Solved 170+ problems")),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("a",{href:"http://lightoj.com/volume_userstat.php?user_id=28194",target:"_blank"},"LightOj -"),r.a.createElement("i",null," Solved 86 problems")),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("a",{href:"https://uhunt.onlinejudge.org/id/695159",target:"_blank"},"UVa -"),r.a.createElement("i",null," Solved 131 problems")),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},"HackerRank -",r.a.createElement("i",null," Solved 12 problems")))),r.a.createElement(m.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement("div",{className:o.personalInfo2},r.a.createElement(d.a,{align:"left",variant:"h5",color:"secondary",className:o.infoHeader},"Coding & Social Profiles:"),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("b",null,"Github:")," ",r.a.createElement("a",{href:"https://github.com/NAkibRUET",target:"_blank"},"github.com/NAkibRUET")),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("b",null,"StackOverflow:")," ",r.a.createElement("a",{href:"https://stackoverflow.com/users/9481880/nakib",target:"_blank"},"stackoverflow.com/users/9481880")),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("b",null,"LinkedIn:")," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/nakib-hossain-143048/",target:"_blank"},"linkedin.com/in/nakib-hossain-143048/")),r.a.createElement(d.a,{align:"left",variant:"subtitle2"},r.a.createElement("b",null,"Facebook:")," ",r.a.createElement("a",{href:"https://www.facebook.com/N4K1B",target:"_blank"},"facebook.com/N4K1B")))),r.a.createElement(m.a,{item:!0,lg:5,md:6,sm:12,xs:12,className:""},r.a.createElement("div",{className:o.personalInfo2},r.a.createElement(d.a,{align:"left",variant:"h5",color:"secondary",className:o.infoHeader},"Languages & Skills:"),r.a.createElement("div",null,r.a.createElement(me.a,{icon:r.a.createElement(pe.a,{style:{fontSize:"18px"}}),label:"C/C++",variant:"default",color:"primary",size:"small",style:{margin:"0px 6px 4px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(pe.a,{style:{fontSize:"18px"}}),label:"Python",variant:"default",size:"small",color:"primary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(pe.a,{style:{fontSize:"18px"}}),label:"JavaScript",variant:"default",size:"small",color:"primary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(pe.a,{style:{fontSize:"18px"}}),label:"HTML",variant:"default",size:"small",color:"primary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(pe.a,{style:{fontSize:"18px"}}),label:"CSS",variant:"default",size:"small",color:"primary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"ReactJs",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"Redux",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"Gatsby",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"NodeJs",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"ExpressJs",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"MongoDB",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"Django",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"Linux",variant:"default",size:"small",color:"secondary",style:{margin:"0px 6px 6px 0px",fontWeight:500}}),r.a.createElement(me.a,{icon:r.a.createElement(he.a,{style:{fontSize:"18px"}}),label:"AWS IAM, S3, EC2",variant:"default",size:"small",color:"secondary",style:{margin:"0px 5px 6px 0px",fontWeight:500}}))))),r.a.createElement("br",null),r.a.createElement("div",{className:o.personalInfo2},r.a.createElement(d.a,{align:"left",variant:"h5",color:"secondary",className:o.infoHeader},"Work Experiences:")),r.a.createElement(m.a,{container:!0,spacing:0},r.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12,className:""},r.a.createElement("div",{className:o.personalInfo3},r.a.createElement(d.a,{align:"left",variant:"h6"},r.a.createElement("b",null,"Front end Developer at"," ",r.a.createElement("a",{href:"https://aamartaka.com",target:"_blank"},"AamarTaka.com"))," "),r.a.createElement(d.a,{align:"left",variant:"subtitle2",color:"textSecondary"},r.a.createElement("i",null,"August 2020")),r.a.createElement(d.a,{align:"left",variant:"subtitle2",color:"textSecondary",className:"mb-2"},r.a.createElement("i",null,"Fin-tech Company, Banani, Dhaka")),r.a.createElement(d.a,{align:"justify",variant:"subtitle2",color:"textSecondary"},"- Worked at an e-commerce project named"," ",r.a.createElement("a",{href:"http://test.dailyshobji.com/",target:"_blank"},"Daily-Shobji"," "),"with React-Redux, a subsidiary project of the mother company."),r.a.createElement(d.a,{align:"justify",variant:"subtitle2",color:"textSecondary"},"- Led the whole front end of the project, designed the project structure, connected APIs from backend, managed states with Redux etc."))),r.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12,className:""},r.a.createElement("div",{className:o.personalInfo3},r.a.createElement(d.a,{align:"left",variant:"h6"},r.a.createElement("b",null,"Part time Software Developer at 71bits")," "),r.a.createElement(d.a,{align:"left",variant:"subtitle2",color:"textSecondary",className:"mb-2"},r.a.createElement("i",null,"Feb 2019 - Aug 2019 \xa0 & \xa0 Mar 2020 - July 2020")),r.a.createElement(d.a,{align:"justify",variant:"subtitle2",color:"textSecondary"},"- Worked as a front end developer at a cross-platform desktop application named",r.a.createElement("a",{href:"http://e-doctorscript.com/",target:"_blank"}," ","E-DoctorScript"," "),"with React-Redux, a startup project by team 71bits"),r.a.createElement(d.a,{align:"justify",variant:"subtitle2",color:"textSecondary"},"- Worked at the patient mobile app of"," ",r.a.createElement("a",{href:"http://e-doctorscript.com/",target:"_blank"},"E-DoctorScript"," "),"with React-Native"),r.a.createElement(d.a,{align:"justify",variant:"subtitle2",color:"textSecondary"},"- Worked at an e-commerce project named"," ",r.a.createElement("a",{href:"http://design-glasses.com/",target:"_blank"},"Design Glasses"," "),", which is made with Shopware CMS. Fixed front end issues and developed plugin.")))))))}),Ee=t(17);class be extends n.Component{constructor(e){super(e),this.toggleCollapse=()=>{this.setState({isOpen:!this.state.isOpen})},this.state={isOpen:!1}}render(){const e=this.props.location.pathname;return console.log(e),r.a.createElement(o.a,null,r.a.createElement(Ee.h,{color:"black",dark:!0,expand:"md",className:"px-lg-5 px-md-5",style:{}},r.a.createElement(Ee.i,{className:"pl-lg-5"},r.a.createElement("img",{src:"./icon4.png",width:"50"})),r.a.createElement(Ee.k,{onClick:this.toggleCollapse}),r.a.createElement(Ee.c,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(Ee.j,{right:!0,className:"pr-lg-5"},r.a.createElement(Ee.f,{active:"/myportfolio/"==e},r.a.createElement(Ee.g,{to:"/myportfolio/",onClick:()=>this.props.history.push("/myportfolio/")},"Home")),r.a.createElement(Ee.f,{active:null!=e.match(/about/g),onClick:()=>this.props.history.push("/myportfolio/about")},r.a.createElement(Ee.g,{to:"/myportfolio/about"},"About")),r.a.createElement(Ee.f,{active:null!=e.match(/projects/g),onClick:()=>this.props.history.push("/myportfolio/projects")},r.a.createElement(Ee.g,{to:"/myportfolio/projects"},"Projects")),r.a.createElement(Ee.f,{active:null!=e.match(/certifications/g),onClick:()=>this.props.history.push("/myportfolio/certifications")},r.a.createElement(Ee.g,{to:"/myportfolio/certifications"},"Certifications")),r.a.createElement(Ee.f,null,r.a.createElement(Ee.g,{to:"#!"},"My Blogs")),r.a.createElement(Ee.f,null,r.a.createElement(Ee.g,{to:"#!"},"Contact Me"))))))}}var fe=Object(c.f)(be),ye=t(283),xe=t(133),ve=t(282),we=t(66);var ke=Object(xe.a)({palette:{type:"light",primary:{main:ve.a[500],dark:ve.a[700],contrastText:"#fff"},secondary:{main:we.a[400],contrastText:"#fff"}}});var Se=e=>r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(ye.a,{theme:ke},e.children));class Ne extends n.Component{render(){return r.a.createElement(Se,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/myportfolio",exact:!0,component:S}),r.a.createElement(c.a,{path:"/myportfolio/about",exact:!0,component:ue}),r.a.createElement(c.a,{path:"/myportfolio/projects",exact:!0,component:oe}),r.a.createElement(c.a,{path:"/myportfolio/certifications",exact:!0,component:se})))}}var je=Ne;const Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(o.a,null,r.a.createElement(je,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/myportfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/myportfolio","/service-worker.js");Ce?function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):De(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):De(e)})}}()}},[[144,1,2]]]);
//# sourceMappingURL=main.e6fd4ae1.chunk.js.map