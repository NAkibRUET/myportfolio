(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{102:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(17),l=a.n(o),i=(a(98),a(99),a(100),a(101),a(16)),s=(a(102),a(7)),c=a(205),h=a(202),d=a(209),m=a(22),p=a(43),g=a.n(p);var u={WEATHER_API_KEY:"4fd7addc78281697bde98a701e9006d6"};function E(e){return"http://openweathermap.org/img/wn/"+e+"@2x.png"}class w extends r.a.Component{constructor(e){super(e),this.state={}}renderHourly(){if(this.props.weatherData.hourly.length>0){let e=1;return this.props.weatherData.hourly.map((t,a)=>{if(e<=4)return e++,r.a.createElement(h.a,{item:!0,xs:3,key:t.dt},r.a.createElement(d.a,{align:"center",variant:"subtitle2",style:{color:"white"}},function(e){var t=(e=(e=new Date(1e3*e)).getHours())>=12?"PM":"AM";return(e=(e%=12)||12)+" "+t}(t.dt)),r.a.createElement(d.a,{align:"center",variant:"h6",color:"primary",style:{color:"white"}},Math.round(t.temp-273),"\xb0"),r.a.createElement("img",{src:E(t.weather[0].icon),style:{display:"block",margin:"-15px auto",padding:"0",width:"50px"}}))})}return null}render(){const e=this.props.classes;let t,a=new Date(1e3*this.props.weatherData.current.dt),n=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],o=a.getDate();o+=n;let l=this.props.weatherData.current.weather[0].icon;return t="50d"==l?"./haze_day.jpg":"04n"==l||"04d"==l?"./cloudy.jpeg":"10n"==l||"9n"==l||"10d"==l||"9d"==l?"./rain1.webp":"11n"==l||"11d"==l?"./thunderStorm.jpg":"./else.jpg",r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")},className:e.WeatherDiv1},r.a.createElement(d.a,{align:"center",variant:"h5",style:{color:"white"}},this.props.CT_NAME,", ",o),r.a.createElement(h.a,{container:!0,style:{padding:20}},r.a.createElement(h.a,{item:!0,lg:6,xs:6},r.a.createElement(d.a,{align:"center",variant:"subtitle2",style:{color:"white"}},"Day ",Math.round(this.props.weatherData.daily[0].temp.day-273),"\xb0 - Night"," ",Math.round(this.props.weatherData.daily[0].temp.night-273),"\xb0"),r.a.createElement(d.a,{align:"center",variant:"h3",style:{color:"white"}},Math.round(this.props.weatherData.current.temp-273),"\xb0C"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",style:{color:"white"}},"Feels Like"," ",this.props.weatherData.hourly.length>0?Math.round(this.props.weatherData.hourly[0].feels_like-273):0,"\xb0")),r.a.createElement(h.a,{item:!0,lg:6,xs:6},r.a.createElement("img",{src:E(this.props.weatherData.current.weather[0].icon),className:e.images}),r.a.createElement(d.a,{align:"center",variant:"subtitle1",style:{color:"white"}},this.props.weatherData.current.weather[0].main))),r.a.createElement("hr",null),r.a.createElement(h.a,{container:!0},this.renderHourly()))}}var f=Object(m.a)(e=>({textColor:{color:"#7f7f7f"},images:{display:"block",margin:"-15px auto",padding:"0",width:"100px"},images2:{display:"block",margin:"-15px auto",padding:"0",width:"50px"},sections:{marginTop:"20px"},WeatherDiv1:{padding:"45px 0px"}}))(w),y=a(208),v=a(81),x=a.n(v);a(60);class k extends r.a.Component{constructor(e){super(e),this.state={weatherData1:{current:{dt:0,temp:0,feels_like:0,weather:[{icon:"50n",main:""}]},daily:[{temp:{day:0,night:0}}],hourly:[]},weatherData2:{current:{dt:0,temp:0,feels_like:0,weather:[{icon:"50n",main:""}]},daily:[{temp:{day:0,night:0}}],hourly:[]},loading:!1,noInternet1:!1,noInternet2:!1}}componentDidMount(){this.setState({loading:!0}),setInterval(()=>this.setState({date:new Date}),1e3),g.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&appid="+u.WEATHER_API_KEY).then(e=>{this.setState({weatherData1:e.data}),setTimeout(()=>{this.setState({loading:!1})},1500)}).catch(e=>{this.setState({loading:!1,noInternet1:!0})}),g.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=23.5450&lon=89.1726&appid="+u.WEATHER_API_KEY).then(e=>{this.setState({weatherData2:e.data})}).catch(e=>{this.setState({loading:!1,noInternet2:!0})})}render(){const e=this.props.classes;return r.a.createElement("div",{className:"px-lg-5 px-md-5"},r.a.createElement("div",{className:"px-lg-5 px-md-5"},r.a.createElement(c.a,{elevation:24},r.a.createElement(h.a,{container:!0,spacing:0,className:e.sections},r.a.createElement(h.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement("div",{className:e.personalInfo},r.a.createElement("img",{src:"./01.jpg",className:e.images}),r.a.createElement(d.a,{align:"center",variant:"h5",color:"primary"},"Nakib Hossain"),r.a.createElement(d.a,{align:"center",variant:"h6",color:"secondary"},"Software Developer"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",className:e.textColor},"hussain0296@gmail.com"),r.a.createElement(d.a,{align:"center",variant:"subtitle2",className:e.textColor},"+8801967101376"))),r.a.createElement(h.a,{item:!0,lg:8,md:6,sm:12,xs:12},this.state.loading?r.a.createElement("div",{className:e.Spinner},r.a.createElement(y.a,{size:"large"})):r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,lg:6,xs:12},0==this.state.noInternet1?r.a.createElement(f,{weatherData:this.state.weatherData1,CT_NAME:"Dhaka"}):null),r.a.createElement(h.a,{item:!0,lg:6,xs:12},0==this.state.noInternet2?r.a.createElement(f,{weatherData:this.state.weatherData2,CT_NAME:"Jhenidah"}):null))))),r.a.createElement("div",{style:{display:"block",width:"150px",margin:"20px auto"}},r.a.createElement(x.a,{value:this.state.date,hourHandLength:60,hourHandOppositeLength:20,hourHandWidth:8,hourMarksLength:20,hourMarksWidth:8,minuteHandLength:90,minuteHandOppositeLength:20,minuteHandWidth:6,minuteMarksWidth:3,secondHandLength:75,secondHandOppositeLength:25,secondHandWidth:3,size:150,minuteMarksLength:6,renderHourMarks:!0,renderMinuteHand:!0,renderMinuteMarks:!0,renderSecondHand:!0,className:e.ClockPos}))))}}var b=Object(m.a)(e=>({Spinner:{textAlign:"center",background:"rgba(0, 0, 0, 0.05)",borderRadius:"4px",marginBottom:"20px",padding:"153px 50px",height:"100%"},textColor:{color:"#7f7f7f"},images:{borderRadius:"50%",display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"},personalInfo:{padding:"30px 0px",backgroundColor:"#000000",height:"100%"},sections:{marginTop:"20px"},ClockPos:{backgroundColor:"#ffffff",borderColor:"#ffffff",borderRadius:"50%"},WeatherDiv2:{padding:"45px 0px"}}))(k),D=a(9);class C extends n.Component{constructor(...e){super(...e),this.state={isOpen:!1},this.toggleCollapse=()=>{this.setState({isOpen:!this.state.isOpen})}}render(){return r.a.createElement(i.a,null,r.a.createElement(D.h,{color:"black",dark:!0,expand:"md",className:"px-lg-5 px-md-5"},r.a.createElement(D.i,{className:"pl-lg-5"},r.a.createElement("img",{src:"./icon4.png",width:"50"})),r.a.createElement(D.k,{onClick:this.toggleCollapse}),r.a.createElement(D.c,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(D.j,{right:!0,className:"pr-lg-5"},r.a.createElement(D.f,{active:!0},r.a.createElement(D.g,{to:"/"},"Home")),r.a.createElement(D.f,null,r.a.createElement(D.g,{to:"#!"},"Projects")),r.a.createElement(D.f,null,r.a.createElement(D.g,{to:"#!"},"Certifications")),r.a.createElement(D.f,null,r.a.createElement(D.g,{to:"#!"},"My Blogs")),r.a.createElement(D.f,null,r.a.createElement(D.g,{to:"#!"},"Gallery")),r.a.createElement(D.f,null,r.a.createElement(D.g,{to:"#!"},"Contact Me"))))))}}var M=C,N=a(207),H=a(90),W=a(206),A=a(35);var I=Object(H.a)({palette:{type:"light",primary:{main:W.a[500],dark:W.a[700],contrastText:"#fff"},secondary:{main:A.a[400],contrastText:"#fff"}}});var S=e=>r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(N.a,{theme:I},e.children));class O extends n.Component{render(){return r.a.createElement(S,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:b})))}}var _=O;const j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(i.a,null,r.a.createElement(_,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/myportfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/myportfolio","/service-worker.js");j?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):L(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):L(e)})}}()},93:function(e,t,a){e.exports=a(184)}},[[93,1,2]]]);
//# sourceMappingURL=main.d6ee8a24.chunk.js.map