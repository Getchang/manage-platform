(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[538],{7538:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});r(8304),r(489),r(2419),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948);var n=r(7294),o=r(4494),a=r(9865),i=r(7692),l=r(86),c=r(371),u=r(8222),s=r(9366),f=r(2603);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(m,e);var t,r,o,a=h(m);function m(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),g(b(e=a.call(this)),"onFinish",(function(e){console.log("Success:",e);var t=new FormData;t.append("user_name",e.username),t.append("password",e.password)})),g(b(e),"onFinishFailed",(function(e){console.log("Failed:",e)})),e}return t=m,(r=[{key:"render",value:function(){var e=this;return n.createElement(i.Z,{name:"basic",className:"loginForm",initialValues:{remember:!0},onFinish:this.onFinish,onFinishFailed:this.onFinishFailed},n.createElement(i.Z.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},n.createElement(l.Z,{prefix:n.createElement(s.Z,{className:"site-form-item-icon"}),placeholder:"Username"})),n.createElement(i.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},n.createElement(l.Z,{prefix:n.createElement(f.Z,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),n.createElement(i.Z.Item,null,n.createElement(i.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0},n.createElement(c.Z,null,"Remember me")),n.createElement("a",{className:"login-form-forgot",href:""},"Forgot password")),n.createElement(i.Z.Item,null,n.createElement(u.Z,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.createElement("a",{onClick:function(){e.props.switchLoginType("register")}},"register now!")))}}])&&p(t.prototype,r),o&&p(t,o),m}(n.Component),E=(r(8674),r(1249),r(2222),r(7042),r(8309),r(1038),r(9601),r(2832)),P=r(9288);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=E.Z.Option,S={labelCol:{xs:{span:24}},wrapperCol:{xs:{span:24}}},_={wrapperCol:{xs:{span:24,offset:0}}},k=function(e){var t=O(i.Z.useForm(),1)[0],r=n.createElement(i.Z.Item,{name:"prefix",noStyle:!0},n.createElement(E.Z,{style:{width:70}},n.createElement(j,{value:"86"},"+86"),n.createElement(j,{value:"87"},"+87"))),o=O((0,n.useState)([]),2),a=o[0],s=o[1],f=a.map((function(e){return{label:e,value:e}}));return n.createElement(i.Z,Z({},S,{form:t,className:"registerForm",name:"register",onFinish:function(e){console.log("Received values of form: ",e);var t=new FormData;t.append("email",e.email),t.append("user_name",e.nickname),t.append("password",e.password),t.append("phone",e.phone),fetch("http://localhost:3000/users/register",{method:"POST",body:t}).then((function(e){return e.json()}))},onFinishFailed:function(e){console.log("Failed:",e)},initialValues:{prefix:"86"},scrollToFirstError:!0}),n.createElement(i.Z.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},n.createElement(P.Z,{options:f,onChange:function(e){s(e?["@163.com","@qq.com","@gmail.com"].map((function(t){return"".concat(e).concat(t)})):[])},placeholder:"website"},n.createElement(l.Z,null))),n.createElement(i.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},n.createElement(l.Z.Password,null)),n.createElement(i.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}]},n.createElement(l.Z.Password,null)),n.createElement(i.Z.Item,{name:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]},n.createElement(l.Z,null)),n.createElement(i.Z.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},n.createElement(l.Z,{addonBefore:r,style:{width:"100%"}})),n.createElement(i.Z.Item,Z({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}}]},_),n.createElement(c.Z,null,"I have read the ",n.createElement("a",{href:""},"agreement"))),n.createElement(i.Z.Item,_,n.createElement(u.Z,{type:"primary",htmlType:"submit"},"Register")))};r(5546);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=N(e);if(t){var o=N(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}function x(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q={switchLoginType:function(e){return{type:a.W,loginType:e}}},L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(i,e);var t,r,o,a=C(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={},e}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=e.isRegister,r=e.switchLoginType;return console.log(this.props,r),n.createElement(n.Fragment,null,n.createElement("div",{className:"head"}," ","login"==t?"登录页面":"注册"," "),"login"==t?n.createElement(v,{switchLoginType:r}):n.createElement(k,{switchLoginType:r}))}}])&&I(t.prototype,r),o&&I(t,o),i}(n.Component),A=(0,o.$j)((function(e){return{isRegister:e.loginData.swithLoginType}}),q)(L)}}]);