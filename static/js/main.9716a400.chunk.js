(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(a,e,t){a.exports=t(500)},325:function(a,e){},327:function(a,e){},365:function(a,e){},366:function(a,e){},422:function(a,e,t){},423:function(a,e,t){},424:function(a,e,t){},425:function(a,e,t){},500:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),r=t(46),s=t(13),o=t(38),c=t(18),l=t(199),u=t(36),m=t(83),d="ADD_FLASH_MESSAGE",T="DELETE_FLASH_MESSAGE",h="SET_CURRENT_USER",M=t(200),p=t.n(M),G=t(201),b=t.n(G),g=t(47),f=t.n(g),v={isAuthenticated:!1,user:{}},E=Object(u.c)({flashMessages:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case d:return[].concat(Object(m.a)(a),[{id:p.a.generate(),type:e.message.type,text:e.message.text}]);case T:var t=b()(a,{id:e.id});return t>=0?[].concat(Object(m.a)(a.slice(0,t)),Object(m.a)(a.slice(t+1))):a;default:return a}},auth:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case h:return{isAuthenticated:!f()(e.user),user:e.user};default:return a}}}),A=t(37),k=t.n(A);function y(a){a?k.a.defaults.headers.common.Authorization="Bearer "+a:delete k.a.defaults.headers.common.Authorization}var C=t(78),N=t.n(C);function j(a){return{type:h,user:a}}function w(){return function(a){localStorage.removeItem("jwtToken"),y(!1),a(j({}))}}t(422),t(423),t(424),t(425);var O=t(8),P=t(9),S=t(11),B=t(10),R=t(12),x=t(17),D=t(505),_=t(504),I=function(a){function e(a){var t;return Object(O.a)(this,e),(t=Object(S.a)(this,Object(B.a)(e).call(this,a))).logout=t.logout.bind(Object(x.a)(t)),t}return Object(R.a)(e,a),Object(P.a)(e,[{key:"logout",value:function(a){a.preventDefault(),this.props.logout()}},{key:"render",value:function(){var a=this.props.auth.isAuthenticated,e=n.a.createElement(D.a,{className:"mr-auto"},n.a.createElement(s.b,{onClick:this.logout,to:"/logout",className:"nav-link",activeClassName:"active"},"Logout")),t=n.a.createElement(D.a,{className:"mr-auto"},n.a.createElement(s.b,{to:"/home",className:"nav-link",activeClassName:"active"},"Home"),n.a.createElement(s.b,{to:"/portfolio",className:"nav-link",activeClassName:"active"},"portfolio"),n.a.createElement(s.b,{to:"/blog",className:"nav-link",activeClassName:"active"},"My Blog"));return n.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg"},n.a.createElement(_.a.Brand,null),n.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(D.a,{className:"mr-auto"},n.a.createElement(s.b,{to:"/",className:"nav-link",activeClassName:"selected"},"Ramy"),a?e:t)))}}]),e}(i.Component);Object(c.b)(function(a){return{auth:a.auth}},{logout:w})(I);var z=function(a){function e(a){var t;return Object(O.a)(this,e),(t=Object(S.a)(this,Object(B.a)(e).call(this,a))).logout=t.logout.bind(Object(x.a)(t)),t}return Object(R.a)(e,a),Object(P.a)(e,[{key:"logout",value:function(a){a.preventDefault(),this.props.logout()}},{key:"render",value:function(){this.props.auth.isAuthenticated,n.a.createElement(D.a,{className:"mr-auto"},n.a.createElement(s.b,{onClick:this.logout,to:"/logout",className:"nav-link",activeClassName:"active"},"Logout")),n.a.createElement(D.a,{className:"mr-auto"},n.a.createElement(s.b,{to:"/home",className:"nav-link",activeClassName:"active"},"Home"),n.a.createElement(s.b,{to:"/portfolio",className:"nav-link",activeClassName:"active"},"Portfolio"),n.a.createElement(s.b,{to:"/blog",className:"nav-link",activeClassName:"active"},"My Blog"));return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},n.a.createElement("div",{className:"container"},n.a.createElement(s.b,{to:"/home",className:"nav-link navbar-brand",activeClassName:"active"},"Ramy Farid"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},n.a.createElement(D.a,null),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(s.b,{to:"/home",className:"nav-link",activeClassName:"active"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{to:"/blog",className:"nav-link",activeClassName:"active"},"My Blog")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{to:"/portfolio",className:"nav-link",activeClassName:"active"},"Portfolio"))))))}}]),e}(i.Component);var K=Object(c.b)(function(a){return{auth:a.auth}},{logout:w})(z),L=t(6),q=t.n(L),F=function(a){function e(a){var t;return Object(O.a)(this,e),(t=Object(S.a)(this,Object(B.a)(e).call(this,a))).onClick=t.onClick.bind(Object(x.a)(t)),t}return Object(R.a)(e,a),Object(P.a)(e,[{key:"onClick",value:function(){this.props.deleteFlashMessage(this.props.message.id)}},{key:"render",value:function(){var a=this.props.message,e=(a.id,a.type),t=a.text;return n.a.createElement("div",{className:q()("alert",{"alert-success":"success"===e,"alert-danger":"error"===e})},n.a.createElement("button",{onClick:this.onClick,className:"close"},n.a.createElement("span",null,"\xd7")),t)}}]),e}(i.Component);var H=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){var a=this,e=this.props.messages.map(function(e){return n.a.createElement(F,{deleteFlashMessage:a.props.deleteFlashMessage,key:e.id,message:e})});return n.a.createElement("div",null,e)}}]),e}(i.Component);var U=Object(c.b)(function(a){return{messages:a.flashMessages}},{deleteFlashMessage:function(a){return{type:T,id:a}}})(H),V=t(502),J=(t(503),t(81)),W={"(GMT-11:00) Niue":"Pacific/Niue","(GMT-11:00) Pago Pago":"Pacific/Pago_Pago","(GMT-10:00) Hawaii Time":"Pacific/Honolulu","(GMT-10:00) Rarotonga":"Pacific/Rarotonga","(GMT-10:00) Tahiti":"Pacific/Tahiti","(GMT-09:30) Marquesas":"Pacific/Marquesas","(GMT-09:00) Alaska Time":"America/Anchorage","(GMT-09:00) Gambier":"Pacific/Gambier","(GMT-08:00) Pacific Time":"America/Los_Angeles","(GMT-08:00) Pacific Time - Tijuana":"America/Tijuana","(GMT-08:00) Pacific Time - Vancouver":"America/Vancouver","(GMT-08:00) Pacific Time - Whitehorse":"America/Whitehorse","(GMT-08:00) Pitcairn":"Pacific/Pitcairn","(GMT-07:00) Mountain Time - Dawson Creek":"America/Dawson_Creek","(GMT-07:00) Mountain Time":"America/Denver","(GMT-07:00) Mountain Time - Edmonton":"America/Edmonton","(GMT-07:00) Mountain Time - Hermosillo":"America/Hermosillo","(GMT-07:00) Mountain Time - Chihuahua, Mazatlan":"America/Mazatlan","(GMT-07:00) Mountain Time - Arizona":"America/Phoenix","(GMT-07:00) Mountain Time - Yellowknife":"America/Yellowknife","(GMT-06:00) Belize":"America/Belize","(GMT-06:00) Central Time":"America/Chicago","(GMT-06:00) Costa Rica":"America/Costa_Rica","(GMT-06:00) El Salvador":"America/El_Salvador","(GMT-06:00) Guatemala":"America/Guatemala","(GMT-06:00) Managua":"America/Managua","(GMT-06:00) Central Time - Mexico City":"America/Mexico_City","(GMT-06:00) Central Time - Regina":"America/Regina","(GMT-06:00) Central Time - Tegucigalpa":"America/Tegucigalpa","(GMT-06:00) Central Time - Winnipeg":"America/Winnipeg","(GMT-06:00) Galapagos":"Pacific/Galapagos","(GMT-05:00) Bogota":"America/Bogota","(GMT-05:00) America Cancun":"America/Cancun","(GMT-05:00) Cayman":"America/Cayman","(GMT-05:00) Guayaquil":"America/Guayaquil","(GMT-05:00) Havana":"America/Havana","(GMT-05:00) Eastern Time - Iqaluit":"America/Iqaluit","(GMT-05:00) Jamaica":"America/Jamaica","(GMT-05:00) Lima":"America/Lima","(GMT-05:00) Nassau":"America/Nassau","(GMT-05:00) Eastern Time":"America/New_York","(GMT-05:00) Panama":"America/Panama","(GMT-05:00) Port-au-Prince":"America/Port-au-Prince","(GMT-05:00) Rio Branco":"America/Rio_Branco","(GMT-05:00) Eastern Time - Toronto":"America/Toronto","(GMT-05:00) Easter Island":"Pacific/Easter","(GMT-04:30) Caracas":"America/Caracas","(GMT-03:00) Asuncion":"America/Asuncion","(GMT-04:00) Barbados":"America/Barbados","(GMT-04:00) Boa Vista":"America/Boa_Vista","(GMT-03:00) Campo Grande":"America/Campo_Grande","(GMT-03:00) Cuiaba":"America/Cuiaba","(GMT-04:00) Curacao":"America/Curacao","(GMT-04:00) Grand Turk":"America/Grand_Turk","(GMT-04:00) Guyana":"America/Guyana","(GMT-04:00) Atlantic Time - Halifax":"America/Halifax","(GMT-04:00) La Paz":"America/La_Paz","(GMT-04:00) Manaus":"America/Manaus","(GMT-04:00) Martinique":"America/Martinique","(GMT-04:00) Port of Spain":"America/Port_of_Spain","(GMT-04:00) Porto Velho":"America/Porto_Velho","(GMT-04:00) Puerto Rico":"America/Puerto_Rico","(GMT-04:00) Santo Domingo":"America/Santo_Domingo","(GMT-04:00) Thule":"America/Thule","(GMT-04:00) Bermuda":"Atlantic/Bermuda","(GMT-03:30) Newfoundland Time - St. Johns":"America/St_Johns","(GMT-03:00) Araguaina":"America/Araguaina","(GMT-03:00) Buenos Aires":"America/Argentina/Buenos_Aires","(GMT-03:00) Salvador":"America/Bahia","(GMT-03:00) Belem":"America/Belem","(GMT-03:00) Cayenne":"America/Cayenne","(GMT-03:00) Fortaleza":"America/Fortaleza","(GMT-03:00) Godthab":"America/Godthab","(GMT-03:00) Maceio":"America/Maceio","(GMT-03:00) Miquelon":"America/Miquelon","(GMT-03:00) Montevideo":"America/Montevideo","(GMT-03:00) Paramaribo":"America/Paramaribo","(GMT-03:00) Recife":"America/Recife","(GMT-03:00) Santiago":"America/Santiago","(GMT-02:00) Sao Paulo":"America/Sao_Paulo","(GMT-03:00) Palmer":"Antarctica/Palmer","(GMT-03:00) Rothera":"Antarctica/Rothera","(GMT-03:00) Stanley":"Atlantic/Stanley","(GMT-02:00) Noronha":"America/Noronha","(GMT-02:00) South Georgia":"Atlantic/South_Georgia","(GMT-01:00) Scoresbysund":"America/Scoresbysund","(GMT-01:00) Azores":"Atlantic/Azores","(GMT-01:00) Cape Verde":"Atlantic/Cape_Verde","(GMT+00:00) Abidjan":"Africa/Abidjan","(GMT+00:00) Accra":"Africa/Accra","(GMT+00:00) Bissau":"Africa/Bissau","(GMT+00:00) Casablanca":"Africa/Casablanca","(GMT+00:00) El Aaiun":"Africa/El_Aaiun","(GMT+00:00) Monrovia":"Africa/Monrovia","(GMT+00:00) Danmarkshavn":"America/Danmarkshavn","(GMT+00:00) Canary Islands":"Atlantic/Canary","(GMT+00:00) Faeroe":"Atlantic/Faroe","(GMT+00:00) Reykjavik":"Atlantic/Reykjavik","(GMT+00:00) GMT (no daylight saving)":"Etc/GMT","(GMT+00:00) Dublin":"Europe/Dublin","(GMT+00:00) Lisbon":"Europe/Lisbon","(GMT+00:00) London":"Europe/London","(GMT+01:00) Algiers":"Africa/Algiers","(GMT+01:00) Ceuta":"Africa/Ceuta","(GMT+01:00) Lagos":"Africa/Lagos","(GMT+01:00) Ndjamena":"Africa/Ndjamena","(GMT+01:00) Tunis":"Africa/Tunis","(GMT+02:00) Windhoek":"Africa/Windhoek","(GMT+01:00) Amsterdam":"Europe/Amsterdam","(GMT+01:00) Andorra":"Europe/Andorra","(GMT+01:00) Central European Time - Belgrade":"Europe/Belgrade","(GMT+01:00) Berlin":"Europe/Berlin","(GMT+01:00) Brussels":"Europe/Brussels","(GMT+01:00) Budapest":"Europe/Budapest","(GMT+01:00) Copenhagen":"Europe/Copenhagen","(GMT+01:00) Gibraltar":"Europe/Gibraltar","(GMT+01:00) Luxembourg":"Europe/Luxembourg","(GMT+01:00) Madrid":"Europe/Madrid","(GMT+01:00) Malta":"Europe/Malta","(GMT+01:00) Monaco":"Europe/Monaco","(GMT+01:00) Oslo":"Europe/Oslo","(GMT+01:00) Paris":"Europe/Paris","(GMT+01:00) Central European Time - Prague":"Europe/Prague","(GMT+01:00) Rome":"Europe/Rome","(GMT+01:00) Stockholm":"Europe/Stockholm","(GMT+01:00) Tirane":"Europe/Tirane","(GMT+01:00) Vienna":"Europe/Vienna","(GMT+01:00) Warsaw":"Europe/Warsaw","(GMT+01:00) Zurich":"Europe/Zurich","(GMT+02:00) Cairo":"Africa/Cairo","(GMT+02:00) Johannesburg":"Africa/Johannesburg","(GMT+02:00) Maputo":"Africa/Maputo","(GMT+02:00) Tripoli":"Africa/Tripoli","(GMT+02:00) Amman":"Asia/Amman","(GMT+02:00) Beirut":"Asia/Beirut","(GMT+02:00) Damascus":"Asia/Damascus","(GMT+02:00) Gaza":"Asia/Gaza","(GMT+02:00) Jerusalem":"Asia/Jerusalem","(GMT+02:00) Nicosia":"Asia/Nicosia","(GMT+02:00) Athens":"Europe/Athens","(GMT+02:00) Bucharest":"Europe/Bucharest","(GMT+02:00) Chisinau":"Europe/Chisinau","(GMT+02:00) Helsinki":"Europe/Helsinki","(GMT+02:00) Istanbul":"Europe/Istanbul","(GMT+02:00) Moscow-01 - Kaliningrad":"Europe/Kaliningrad","(GMT+02:00) Kiev":"Europe/Kiev","(GMT+02:00) Riga":"Europe/Riga","(GMT+02:00) Sofia":"Europe/Sofia","(GMT+02:00) Tallinn":"Europe/Tallinn","(GMT+02:00) Vilnius":"Europe/Vilnius","(GMT+03:00) Khartoum":"Africa/Khartoum","(GMT+03:00) Nairobi":"Africa/Nairobi","(GMT+03:00) Syowa":"Antarctica/Syowa","(GMT+03:00) Baghdad":"Asia/Baghdad","(GMT+03:00) Qatar":"Asia/Qatar","(GMT+03:00) Riyadh":"Asia/Riyadh","(GMT+03:00) Minsk":"Europe/Minsk","(GMT+03:00) Moscow+00 - Moscow":"Europe/Moscow","(GMT+03:30) Tehran":"Asia/Tehran","(GMT+04:00) Baku":"Asia/Baku","(GMT+04:00) Dubai":"Asia/Dubai","(GMT+04:00) Tbilisi":"Asia/Tbilisi","(GMT+04:00) Yerevan":"Asia/Yerevan","(GMT+04:00) Moscow+01 - Samara":"Europe/Samara","(GMT+04:00) Mahe":"Indian/Mahe","(GMT+04:00) Mauritius":"Indian/Mauritius","(GMT+04:00) Reunion":"Indian/Reunion","(GMT+04:30) Kabul":"Asia/Kabul","(GMT+05:00) Mawson":"Antarctica/Mawson","(GMT+05:00) Aqtau":"Asia/Aqtau","(GMT+05:00) Aqtobe":"Asia/Aqtobe","(GMT+05:00) Ashgabat":"Asia/Ashgabat","(GMT+05:00) Dushanbe":"Asia/Dushanbe","(GMT+05:00) Karachi":"Asia/Karachi","(GMT+05:00) Tashkent":"Asia/Tashkent","(GMT+05:00) Moscow+02 - Yekaterinburg":"Asia/Yekaterinburg","(GMT+05:00) Kerguelen":"Indian/Kerguelen","(GMT+05:00) Maldives":"Indian/Maldives","(GMT+05:30) India Standard Time":"Asia/Calcutta","(GMT+05:30) Colombo":"Asia/Colombo","(GMT+05:45) Katmandu":"Asia/Katmandu","(GMT+06:00) Vostok":"Antarctica/Vostok","(GMT+06:00) Almaty":"Asia/Almaty","(GMT+06:00) Bishkek":"Asia/Bishkek","(GMT+06:00) Dhaka":"Asia/Dhaka","(GMT+06:00) Moscow+03 - Omsk, Novosibirsk":"Asia/Omsk","(GMT+06:00) Thimphu":"Asia/Thimphu","(GMT+06:00) Chagos":"Indian/Chagos","(GMT+06:30) Rangoon":"Asia/Rangoon","(GMT+06:30) Cocos":"Indian/Cocos","(GMT+07:00) Davis":"Antarctica/Davis","(GMT+07:00) Bangkok":"Asia/Bangkok","(GMT+07:00) Hovd":"Asia/Hovd","(GMT+07:00) Jakarta":"Asia/Jakarta","(GMT+07:00) Moscow+04 - Krasnoyarsk":"Asia/Krasnoyarsk","(GMT+07:00) Hanoi":"Asia/Saigon","(GMT+07:00) Christmas":"Indian/Christmas","(GMT+08:00) Casey":"Antarctica/Casey","(GMT+08:00) Brunei":"Asia/Brunei","(GMT+08:00) Choibalsan":"Asia/Choibalsan","(GMT+08:00) Hong Kong":"Asia/Hong_Kong","(GMT+08:00) Moscow+05 - Irkutsk":"Asia/Irkutsk","(GMT+08:00) Kuala Lumpur":"Asia/Kuala_Lumpur","(GMT+08:00) Macau":"Asia/Macau","(GMT+08:00) Makassar":"Asia/Makassar","(GMT+08:00) Manila":"Asia/Manila","(GMT+08:00) China Time - Beijing":"Asia/Shanghai","(GMT+08:00) Singapore":"Asia/Singapore","(GMT+08:00) Taipei":"Asia/Taipei","(GMT+08:00) Ulaanbaatar":"Asia/Ulaanbaatar","(GMT+08:00) Western Time - Perth":"Australia/Perth","(GMT+08:30) Pyongyang":"Asia/Pyongyang","(GMT+09:00) Dili":"Asia/Dili","(GMT+09:00) Jayapura":"Asia/Jayapura","(GMT+09:00) Seoul":"Asia/Seoul","(GMT+09:00) Tokyo":"Asia/Tokyo","(GMT+09:00) Moscow+06 - Yakutsk":"Asia/Yakutsk","(GMT+09:00) Palau":"Pacific/Palau","(GMT+10:30) Central Time - Adelaide":"Australia/Adelaide","(GMT+09:30) Central Time - Darwin":"Australia/Darwin","(GMT+10:00) Dumont D'Urville":"Antarctica/DumontDUrville","(GMT+10:00) Moscow+07 - Magadan":"Asia/Magadan","(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk":"Asia/Vladivostok","(GMT+10:00) Eastern Time - Brisbane":"Australia/Brisbane","(GMT+11:00) Eastern Time - Hobart":"Australia/Hobart","(GMT+11:00) Eastern Time - Melbourne, Sydney":"Australia/Sydney","(GMT+10:00) Truk":"Pacific/Chuuk","(GMT+10:00) Guam":"Pacific/Guam","(GMT+10:00) Port Moresby":"Pacific/Port_Moresby","(GMT+11:00) Efate":"Pacific/Efate","(GMT+11:00) Guadalcanal":"Pacific/Guadalcanal","(GMT+11:00) Kosrae":"Pacific/Kosrae","(GMT+11:00) Norfolk":"Pacific/Norfolk","(GMT+11:00) Noumea":"Pacific/Noumea","(GMT+11:00) Ponape":"Pacific/Pohnpei","(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy":"Asia/Kamchatka","(GMT+13:00) Auckland":"Pacific/Auckland","(GMT+13:00) Fiji":"Pacific/Fiji","(GMT+12:00) Funafuti":"Pacific/Funafuti","(GMT+12:00) Kwajalein":"Pacific/Kwajalein","(GMT+12:00) Majuro":"Pacific/Majuro","(GMT+12:00) Nauru":"Pacific/Nauru","(GMT+12:00) Tarawa":"Pacific/Tarawa","(GMT+12:00) Wake":"Pacific/Wake","(GMT+12:00) Wallis":"Pacific/Wallis","(GMT+14:00) Apia":"Pacific/Apia","(GMT+13:00) Enderbury":"Pacific/Enderbury","(GMT+13:00) Fakaofo":"Pacific/Fakaofo","(GMT+13:00) Tongatapu":"Pacific/Tongatapu","(GMT+14:00) Kiritimati":"Pacific/Kiritimati"},Y=t(28),Q=t.n(Y);var Z=function(a){var e=a.field,t=a.value,i=a.label,r=a.error,s=a.type,o=a.onChange,c=a.checkUserExists;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"control-label"},i),n.a.createElement("input",{onChange:o,onBlur:c,name:e,value:t,type:s,className:q()("form-control",{"is-invalid":r})}),r&&n.a.createElement("small",{className:"text-danger"},r))};Z.defaultProps={type:"text"};var X=Z,$=function(a){function e(a){var t;return Object(O.a)(this,e),(t=Object(S.a)(this,Object(B.a)(e).call(this,a))).state={username:"",email:"",password:"",passwordConfirmation:"",timezone:"",errors:{},isLoading:!1,invalid:!1,toHome:!1},t.onChange=t.onChange.bind(Object(x.a)(t)),t.onSubmit=t.onSubmit.bind(Object(x.a)(t)),t.checkUserExists=t.checkUserExists.bind(Object(x.a)(t)),t}return Object(R.a)(e,a),Object(P.a)(e,[{key:"isValid",value:function(){var a=function(a){var e={};return Q.a.isEmail(a.email)||(e.email="Email is invalid"),Q.a.isEmpty(a.email)&&(e.email="This field is required"),Q.a.isEmpty(a.username)&&(e.username="This field is required"),Q.a.isEmpty(a.password)&&(e.password="This field is required"),Q.a.isEmpty(a.passwordConfirmation)&&(e.passwordConfirmation="This field is required"),Q.a.equals(a.password,a.passwordConfirmation)||(e.passwordConfirmation="Passwords must match"),Q.a.isEmpty(a.timezone)&&(e.timezone="This field is required"),{errors:e,isValid:f()(e)}}(this.state),e=a.errors,t=a.isValid;return t||this.setState({errors:e}),t}},{key:"onChange",value:function(a){this.setState(Object(J.a)({},a.target.name,a.target.value))}},{key:"checkUserExists",value:function(a){var e=this,t=a.target.name,i=a.target.value;""!==i&&this.props.isUserExists(i).then(function(a){var i,n=e.state.errors;a.data.user?(n[t]="There's a user with such "+t,i=!0):(n[t]="",i=!1),e.setState({errors:n,invalid:i})})}},{key:"onSubmit",value:function(a){var e=this;a.preventDefault(),this.isValid()&&(this.setState({errors:{}}),this.props.userSignupRequest(this.state).then(function(a){console.log(a.data),e.props.addFlashMessage({type:"success",text:"You signed up successfully. Welcome!"}),e.props.history.push("/")},function(a){var t=a.response;console.log(t.data),e.setState({errors:t.data})}))}},{key:"render",value:function(){var a=this.state.errors,e=Object.keys(W).map(function(a){return n.a.createElement("option",{key:W[a],value:W[a]},a)});return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(V.a,null,n.a.createElement("h3",null,"Sign up"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement(X,{field:"username",label:"Username",value:this.state.username,onChange:this.onChange,checkUserExists:this.checkUserExists,error:a.username}),n.a.createElement(X,{field:"email",label:"Email",value:this.state.email,onChange:this.onChange,error:a.email,checkUserExists:this.checkUserExists}),n.a.createElement(X,{field:"password",label:"Password",value:this.state.password,onChange:this.onChange,error:a.password,type:"password"}),n.a.createElement(X,{field:"passwordConfirmation",label:"Confirm Password",value:this.state.passwordConfirmation,onChange:this.onChange,error:a.passwordConfirmation,type:"password"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"control-label"},"Timezone"),n.a.createElement("select",{value:this.state.timezone,onChange:this.onChange,name:"timezone",className:q()("form-control",{"is-invalid":a.timezone})},n.a.createElement("option",{value:"",disabled:!0},"Choose Your Timezone"),e),a.timezone&&n.a.createElement("small",{className:"text-danger"},a.timezone)),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{disabled:this.state.invalid,className:"btn btn-primary btn-lg"},"Sign up")))))))))}}]),e}(i.Component),aa=Object(o.f)($);var ea=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){var a=this.props,e=a.userSignupRequest,t=a.addFlashMessage,i=a.isUserExists;return console.log(this.props),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(aa,{isUserExists:i,userSignupRequest:e,addFlashMessage:t})))}}]),e}(i.Component),ta=Object(c.b)(function(a){return{}},{userSignupRequest:function(a){return function(e){return k.a.post("/api/users",a)}},addFlashMessage:function(a){return{type:d,message:a}},isUserExists:function(a){return function(e){return k.a.get("/api/users/"+a)}}})(ea);var ia=function(a){function e(a){var t;return Object(O.a)(this,e),(t=Object(S.a)(this,Object(B.a)(e).call(this,a))).state={identifier:"",password:"",errors:{},isLoading:!1},t.onChange=t.onChange.bind(Object(x.a)(t)),t.onSubmit=t.onSubmit.bind(Object(x.a)(t)),t}return Object(R.a)(e,a),Object(P.a)(e,[{key:"onChange",value:function(a){this.setState(Object(J.a)({},a.target.name,a.target.value))}},{key:"isValid",value:function(){var a=function(a){var e={};return Q.a.isEmpty(a.identifier)&&(e.identifier="This field is required"),Q.a.isEmpty(a.password)&&(e.password="This field is required"),{errors:e,isValid:f()(e)}}(this.state),e=a.errors,t=a.isValid;return t||this.setState({errors:e}),t}},{key:"onSubmit",value:function(a){var e=this;a.preventDefault(),this.isValid()&&(this.setState({errors:{},isLoading:!0}),this.props.login(this.state).then(function(a){console.log(a),e.props.history.push("/")},function(a){var t=a.response;console.log(t.data.errors),e.setState({errors:t.data.errors})}))}},{key:"render",value:function(){var a=this.state,e=a.identifier,t=a.password,i=a.errors;a.isLoading,a.onChange;return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(V.a,null,n.a.createElement("h3",null,"Log In"),i.form&&n.a.createElement("div",{className:"alert alert-danger"},i.form),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement(X,{field:"identifier",label:"Username/Email",value:e,onChange:this.onChange,error:i.identifier}),n.a.createElement(X,{field:"password",label:"Username/Email",value:t,onChange:this.onChange,error:i.password,type:"password"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary btn-lg"},"Login")))))))))}}]),e}(i.Component),na=Object(o.f)(Object(c.b)(null,{login:function(a){return function(e){return k.a.post("/api/auth",a).then(function(a){var t=a.data.token;localStorage.setItem("jwtToken",t),y(t),e(j(N.a.decode(t)))})}}})(ia)),ra=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(na,null)))}}]),e}(i.Component),sa=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){return n.a.createElement("img",{className:"image-card",src:"/img/ramy.jpg"})}}]),e}(i.Component),oa=function(a){function e(a){var t;return Object(O.a)(this,e),(t=Object(S.a)(this,Object(B.a)(e).call(this,a))).logout=t.logout.bind(Object(x.a)(t)),t}return Object(R.a)(e,a),Object(P.a)(e,[{key:"logout",value:function(a){a.preventDefault(),this.props.logout()}},{key:"render",value:function(){this.props.auth.isAuthenticated;return n.a.createElement("header",{className:"bg-dark py-5 h-100"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100 align-items-center"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"display-4 text-white mt-5 mb-2"},"Ramy Farid"),n.a.createElement("p",{className:"lead mb-5 text-white-50"},"Full stack web developer and a computer engineer at heart with a rigid foundation in software engineering discipline. Throughout my career I have used many technologies to code across the web applications development stack from the initial phase of the application design and architecture further to coding in any part of the stack from deploying using the cloud web services and up to refining the web UI and what's in between."))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"container image-section"},n.a.createElement(sa,null))))))}}]),e}(i.Component);var ca=Object(c.b)(function(a){return{auth:a.auth}},{logout:w})(oa),la=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(ca,null))}}]),e}(i.Component),ua=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(ca,null))}}]),e}(i.Component),ma=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 blog-posts-list"},n.a.createElement("div",{className:"card mb-4"},n.a.createElement("img",{className:"card-img-top",src:"/img/zsh-term.jpg"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Why I decided to use zsh terminal"),n.a.createElement("small",null,"Posted on January 1, 2017 by \xa0",n.a.createElement(s.b,{to:"/home"},"Ramy")),n.a.createElement("p",{className:"card-text"},"Since I started using linux and until now I, like anyone who migrated to linux from windows, have been using the default Ubuntu terminal which is the bash terminal. It looked good and was smooth from a UX point of view and I had some preferences in tweaking its look to give me that sense of control..until I discovered zsh"),n.a.createElement(s.b,{to:"/readmore"}," Read More \u2192")))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card my-4"},n.a.createElement("h5",{className:"card-header"},"Search"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for..."}),n.a.createElement("span",{className:"input-group-btn"},n.a.createElement("button",{className:"btn btn-secondary",type:"button"},"Go!"))))),n.a.createElement("div",{className:"card my-4"},n.a.createElement("h5",{className:"card-header"},"Categories"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("ul",{className:"list-unstyled mb-0"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Web Design")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"HTML")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Freebies")))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("ul",{className:"list-unstyled mb-0"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"JavaScript")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"CSS")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Tutorials"))))))))))}}]),e}(i.Component),da=function(a){function e(){return Object(O.a)(this,e),Object(S.a)(this,Object(B.a)(e).apply(this,arguments))}return Object(R.a)(e,a),Object(P.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(K,null),n.a.createElement(U,null),n.a.createElement("div",{className:"fluid"},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:la}),n.a.createElement(o.a,{path:"/signup",component:ta}),n.a.createElement(o.a,{path:"/home",component:la}),n.a.createElement(o.a,{path:"/portfolio",component:ua}),n.a.createElement(o.a,{path:"/blog",component:ma}),n.a.createElement(o.a,{path:"/login",component:ra}))))}}]),e}(i.Component),Ta=Object(u.e)(E,Object(u.d)(Object(u.a)(l.a),window.devToolsExtension?window.devToolsExtension():function(a){return a}));localStorage.jwtToken&&(y(localStorage.getItem("jwtToken")),Ta.dispatch(j(N.a.decode(localStorage.jwtToken)))),Object(r.render)(n.a.createElement(c.a,{store:Ta},n.a.createElement(s.a,null,n.a.createElement(o.a,{path:"/",component:da}))),document.getElementById("app"))}},[[208,1,2]]]);
//# sourceMappingURL=main.9716a400.chunk.js.map