(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),o=n.n(c),i=n(8),r=(n(30),n(24)),l=n(2),u=n(3),p=n(9),d=n(25),j=n(0),h=function(e){var t=e.component,n=Object(d.a)(e,["component"]);return Object(j.jsx)(u.b,{children:function(){return n.loggedIn?Object(j.jsx)(t,Object(p.a)({},n)):Object(j.jsx)(u.a,{to:"./signin"})}})},b=n.p+"static/media/header__logo.03b78ada.svg";var m=function(e){var t=e.onSignOut,n=e.email,a=s.a.useState(!1),c=Object(l.a)(a,2),o=c[0],r=c[1],p=Object(u.h)({path:"/main",exact:!0});return Object(j.jsxs)("header",{className:"header ".concat(o?"header_menu-open":""," ").concat(p?"header_page-main":""),children:[Object(j.jsx)("img",{className:"header__logo",src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto"}),Object(j.jsxs)(u.d,{children:[Object(j.jsxs)(u.b,{exact:!0,path:"/main",children:[Object(j.jsx)("button",{className:"header__burger",type:"button","aria-label":"\u043c\u0435\u043d\u044e",onClick:function(){r(!o)}}),Object(j.jsxs)("div",{className:"header__auth-container",children:[Object(j.jsx)("p",{className:"header__auth-email",children:n}),Object(j.jsx)("button",{className:"header__logout-link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(j.jsx)(u.b,{path:"/signup",children:Object(j.jsx)(i.b,{className:"header__login-link",to:"signin",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(j.jsx)(u.b,{path:"/signin",children:Object(j.jsx)(i.b,{className:"header__login-link",to:"signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})},f=s.a.createContext();var O=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,o=s.a.useContext(f),i=t.likes.some((function(e){return e._id===o._id})),r=t.owner._id===o._id,l="element__delete-button ".concat(r?"element__delete-button_active":""),u="element__like-button ".concat(i?"element__like-button_active":"");return Object(j.jsxs)("article",{className:"element",children:[Object(j.jsx)("div",{className:"element__img-wrap",children:Object(j.jsx)("img",{className:"element__image",src:t.link,alt:"\u042d\u0442\u043e ".concat(t.name,"? \u041d\u0435 \u043f\u043e\u0445\u043e\u0436\u0435) \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443."),onClick:function(){n(t)}})}),Object(j.jsx)("button",{className:l,onClick:function(){c(t)},type:"button"}),Object(j.jsxs)("div",{className:"element__info",children:[Object(j.jsx)("h2",{className:"element__title",children:t.name}),Object(j.jsxs)("div",{className:"element__like_ui",children:[Object(j.jsx)("button",{className:u,onClick:function(){a(t)},type:"button"}),Object(j.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]})]})};var x=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Made by Alexey Rudoy. Designed by Yandex.Praktikum."]})})};var _=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,c=e.onCardClick,o=e.onCardLike,i=e.onCardDelete,r=e.cards,l=s.a.useContext(f);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__avatar-wrap",children:[Object(j.jsx)("div",{className:"profile__avatar-overlay",onClick:t}),Object(j.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:l.name})]}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("button",{className:"profile__edit-button",onClick:n,type:"button"}),Object(j.jsx)("h1",{className:"profile__name",children:l.name}),Object(j.jsx)("p",{className:"profile__about",children:l.about})]}),Object(j.jsx)("button",{className:"profile__add-button",onClick:a,type:"button"})]}),Object(j.jsx)("section",{className:"elements",children:r.map((function(e){return Object(j.jsx)(O,{card:e,onCardClick:c,onCardLike:o,onCardDelete:i},e._id)}))})]}),Object(j.jsx)(x,{})]})};var v=function(e){var t=e.isOpen,n=e.title,a=e.name,s=e.buttonText,c=e.onClose,o=e.onSubmit,i=e.children;return Object(j.jsx)("section",{className:"popup popup_type_".concat(a," ").concat(t?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("h2",{className:"popup__title",children:n}),Object(j.jsxs)("form",{className:"popup__form popup__form_type_".concat(a),onSubmit:o,name:"popup_form_".concat(a),children:[i,Object(j.jsx)("button",{className:"popup__save-button save-button",type:"submit",children:Object(j.jsx)("span",{className:"popup__button-span",children:s})})]}),Object(j.jsx)("button",{className:"popup__close-button",type:"button",onClick:c})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=s.a.useState(""),o=Object(l.a)(c,2),i=o[0],r=o[1],u=s.a.useState(""),p=Object(l.a)(u,2),d=p[0],h=p[1],b=s.a.useContext(f);return s.a.useEffect((function(){b.about&&b.name&&(r(b.name),h(b.about))}),[b,t]),Object(j.jsxs)(v,{isOpen:t,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:i,about:d})},onClose:n,children:[Object(j.jsxs)("div",{className:"popup__form-wrap",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_top",onChange:function(e){r(e.target.value)},value:i,id:"name-input",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",minLength:"2",maxLength:"40",required:!0}),Object(j.jsx)("span",{className:"popup__input-error name-input-error"})]}),Object(j.jsxs)("div",{className:"popup__form-wrap",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_bottom",onChange:function(e){h(e.target.value)},value:d,id:"about-input",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"about",minLength:"2",maxLength:"200",required:!0}),Object(j.jsx)("span",{className:"popup__input-error about-input-error"})]})]})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=s.a.useRef();return Object(j.jsx)(v,{isOpen:t,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value},(function(){c.current.value=""}))},onClose:n,children:Object(j.jsxs)("div",{className:"popup__form-wrap popup__form-wrap_type_avatar",children:[Object(j.jsx)("input",{className:"popup__input",ref:c,id:"input-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",name:"avatar",required:!0}),Object(j.jsx)("span",{className:"popup__input-error input-link-error"})]})})};var C=function(e){var t=e.card,n=e.onClose;return Object(j.jsx)("section",{className:"popup popup_style_opacity popup_type_mesto ".concat(t.link?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__wrap",children:[Object(j.jsxs)("figure",{className:"popup__figure",children:[Object(j.jsx)("img",{src:t.link,alt:t.name,className:"popup__image"}),Object(j.jsx)("figcaption",{className:"popup__caption",children:t.name})]}),Object(j.jsx)("button",{className:"popup__close-button",type:"button",onClick:n})]})})};var y=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=s.a.useState(""),o=Object(l.a)(c,2),i=o[0],r=o[1],u=s.a.useState(""),p=Object(l.a)(u,2),d=p[0],h=p[1];return Object(j.jsxs)(v,{isOpen:t,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"mesto",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:i,link:d},(function(){r(""),h("")}))},onClose:n,children:[Object(j.jsxs)("div",{className:"popup__form-wrap",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_top",onChange:function(e){r(e.target.value)},value:i,id:"title-input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0}),Object(j.jsx)("span",{className:"popup__input-error title-input-error"})]}),Object(j.jsxs)("div",{className:"popup__form-wrap",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_bottom",onChange:function(e){h(e.target.value)},value:d,id:"link-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0}),Object(j.jsx)("span",{className:"popup__input-error link-input-error"})]})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onDelPlace;return Object(j.jsx)(v,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",buttonText:"\u0414\u0430"})},A=n(11);var S=function(e){var t=e.handleLogin,n=Object(a.useState)({password:"",email:""}),s=Object(l.a)(n,2),c=s[0],o=s[1];function i(e){var t=e.target,n=t.name,a=t.value;o(Object(p.a)(Object(p.a)({},c),{},Object(A.a)({},n,a)))}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"auth",children:Object(j.jsxs)("div",{className:"auth__container",children:[Object(j.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c.password,a=c.email;t({password:n,email:a})},className:"auth__form",children:[Object(j.jsx)("input",{value:c.email,onChange:i,className:"auth__input",id:"email-input",type:"email",placeholder:"Email",name:"email",minLength:"2",maxLength:"200",required:!0}),Object(j.jsx)("input",{value:c.password,onChange:i,className:"auth__input",id:"password-input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"2",maxLength:"200",required:!0}),Object(j.jsx)("button",{className:"auth__save-button save-button",type:"submit",children:Object(j.jsx)("span",{className:"auth__button-span",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})})})};var w=function(e){var t=e.handleRegister,n=Object(a.useState)({password:"",email:""}),s=Object(l.a)(n,2),c=s[0],o=s[1];function r(e){var t=e.target,n=t.name,a=t.value;o(Object(p.a)(Object(p.a)({},c),{},Object(A.a)({},n,a)))}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"auth",children:Object(j.jsxs)("div",{className:"auth__container",children:[Object(j.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c.password,a=c.email;t({password:n,email:a})},className:"auth__form",children:[Object(j.jsx)("input",{value:c.email,onChange:r,className:"auth__input",id:"email-input",type:"email",placeholder:"Email",name:"email",minLength:"2",maxLength:"200",required:!0}),Object(j.jsx)("input",{value:c.password,onChange:r,className:"auth__input",id:"password-input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"2",maxLength:"200",required:!0}),Object(j.jsx)("button",{className:"auth__save-button save-button",type:"submit",children:Object(j.jsx)("span",{className:"auth__button-span",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(j.jsxs)("div",{className:"auth__signin",children:[Object(j.jsx)("p",{className:"auth__reg-question",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(j.jsx)(i.b,{to:"/signin",className:"auth__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})},E={success:"data:image/png;base64,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",error:"data:image/png;base64,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"};var L=function(e){var t=e.isOpen,n=e.onClose,a=e.status,s=(a=void 0===a?{}:a).iconType,c=a.text;return Object(j.jsx)("section",{className:"popup popup_style_opacity popup_type_tooltip ".concat(t?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container popup__container_type_tooltip",children:[Object(j.jsx)("img",{className:"popup__notify-success",alt:c,src:E[s]}),Object(j.jsx)("h2",{className:"popup__notify-title",children:c}),Object(j.jsx)("button",{className:"popup__close-button popup__close-button_type_tooltip",type:"button",onClick:n})]})})},R=n(22),P=n(23),q=new(function(){function e(t){var n=t.address,a=t.token;Object(R.a)(this,e),this._address=n,this._token=a}return Object(P.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserProfile",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setUserProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._handleResponse)}}]),e}())({address:"https://mesto.nomoreparties.co/v1/cohort-22",token:"68ca3bd5-b72c-4fc3-8560-fd3e63ce58a1"}),X="https://auth.nomoreparties.co",I=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var J=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),o=Object(l.a)(c,2),i=o[0],p=o[1],d=s.a.useState(!1),b=Object(l.a)(d,2),O=b[0],x=b[1],v=s.a.useState(),A=Object(l.a)(v,2),E=A[0],R=A[1],P=s.a.useState(!1),J=Object(l.a)(P,2),Z=J[0],K=J[1],Y=s.a.useState(null),U=Object(l.a)(Y,2),H=U[0],D=U[1],M=s.a.useState(!1),T=Object(l.a)(M,2),B=T[0],V=T[1],G=Object(u.g)(),z=s.a.useState({}),Q=Object(l.a)(z,2),F=Q[0],W=Q[1],$=s.a.useState({}),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=s.a.useState([]),se=Object(l.a)(ae,2),ce=se[0],oe=se[1],ie=s.a.useState(""),re=Object(l.a)(ie,2),le=re[0],ue=re[1];function pe(){a(!1),p(!1),x(!1),x(!1),R(),K(!1),W({})}return s.a.useEffect((function(){B&&Promise.all([q.getUserProfile(),q.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];ne(n),oe(a.reverse()),G.push("/main")})).catch((function(e){console.log(e)})),function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(X,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(I)).then((function(e){var t=e.email;ue(t),V(!0)})).catch((function(e){return console.log(e)}));var t}()}),[G,B]),s.a.useEffect((function(){function e(e){"Escape"===e.key&&pe()}function t(e){e.target.classList.contains("popup")&&pe()}return window.addEventListener("keydown",e),window.addEventListener("click",t),function(){window.removeEventListener("click",t),window.removeEventListener("keydown",e)}}),[]),Object(j.jsx)(f.Provider,{value:te,children:Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(m,{email:le,onSignOut:function(){V(!1),localStorage.removeItem("jwt")}}),Object(j.jsxs)(u.d,{children:[Object(j.jsx)(h,{path:"/main",component:_,loggedIn:B,onEditAvatar:function(){a(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){x(!0)},onCardClick:function(e){W(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===te._id}));q.changeLikeCardStatus(e._id,t).then((function(t){oe((function(n){return n.map((function(n){return n._id===e._id?t:n}))})),pe()})).catch((function(e){console.log(e)}))},onCardDelete:function(e){K(!0),D(e)},cards:ce}),Object(j.jsx)(u.b,{path:"/signup",children:Object(j.jsx)(w,{handleRegister:function(e){(function(e,t){return fetch("".concat(X,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(I)})(e.email,e.password).then((function(e){G.push("/signin"),R({text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c",iconType:"success"})})).catch((function(e){console.log(e),R({text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!  \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",iconType:"error"})}))}})}),Object(j.jsx)(u.b,{path:"/signin",children:Object(j.jsx)(S,{handleLogin:function(e){var t=e.email,n=e.password;(function(e,t){return fetch("".concat(X,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(I)})(t,n).then((function(e){localStorage.setItem("jwt",e.token),V(!0),ue(t)})).catch((function(e){return console.log(e)}))}})}),Object(j.jsx)(u.b,{exact:!0,path:"/",children:B?Object(j.jsx)(u.a,{to:"/main"}):Object(j.jsx)(u.a,{to:"/signin"})})]}),Object(j.jsx)(L,{isOpen:!!E,status:E,loggedIn:B,onClose:pe}),Object(j.jsx)(C,{card:F,onClose:pe}),Object(j.jsx)(g,{isOpen:n,onClose:pe,onUpdateAvatar:function(e,t){q.setUserAvatar(e).then((function(e){ne(e),pe(),t()})).catch((function(e){console.log(e)}))}}),Object(j.jsx)(N,{isOpen:i,onClose:pe,onUpdateUser:function(e){q.setUserProfile(e).then((function(e){ne(e),pe()})).catch((function(e){console.log(e)}))}}),Object(j.jsx)(y,{isOpen:O,onClose:pe,onAddPlace:function(e,t){q.addNewCard(e).then((function(e){oe([e].concat(Object(r.a)(ce))),pe(),t()})).catch((function(e){console.log(e)}))}}),Object(j.jsx)(k,{isOpen:Z,onClose:pe,onDelPlace:function(){q.removeCard(H._id).then((function(){oe((function(e){return e.filter((function(e){return e._id!==H._id}))})),pe()})).catch((function(e){console.log(e)}))}})]})})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(J,{})})}),document.getElementById("root")),Z()}},[[37,1,2]]]);
//# sourceMappingURL=main.a2b482b6.chunk.js.map