import{a as s}from"./react-213325bd.js";import{p as u}from"./prop-types-4d501b15.js";function H(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function J(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?H(Object(t),!0).forEach(function(n){ne(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function U(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?U=function(e){return typeof e}:U=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(r)}function ne(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function W(r,e){return ye(r)||he(r,e)||Ce(r,e)||Se()}function ye(r){if(Array.isArray(r))return r}function he(r,e){var t=r&&(typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"]);if(t!=null){var n=[],o=!0,a=!1,p,y;try{for(t=t.call(r);!(o=(p=t.next()).done)&&(n.push(p.value),!(e&&n.length===e));o=!0);}catch(i){a=!0,y=i}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw y}}return n}}function Ce(r,e){if(r){if(typeof r=="string")return Q(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(r,e)}}function Q(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D=function(e){var t=s.useRef(e);return s.useEffect(function(){t.current=e},[e]),t.current},O=function(e){return e!==null&&U(e)==="object"},ge=function(e){return O(e)&&typeof e.then=="function"},Ee=function(e){return O(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},Z="[object Object]",be=function r(e,t){if(!O(e)||!O(t))return e===t;var n=Array.isArray(e),o=Array.isArray(t);if(n!==o)return!1;var a=Object.prototype.toString.call(e)===Z,p=Object.prototype.toString.call(t)===Z;if(a!==p)return!1;if(!a&&!n)return e===t;var y=Object.keys(e),i=Object.keys(t);if(y.length!==i.length)return!1;for(var g={},E=0;E<y.length;E+=1)g[y[E]]=!0;for(var b=0;b<i.length;b+=1)g[i[b]]=!0;var C=Object.keys(g);if(C.length!==y.length)return!1;var A=e,P=t,S=function(j){return r(A[j],P[j])};return C.every(S)},ae=function(e,t,n){return O(e)?Object.keys(e).reduce(function(o,a){var p=!O(t)||!be(e[a],t[a]);return n.includes(a)?(p&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),o):p?J(J({},o||{}),{},ne({},a,e[a])):o},null):null},we="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ee=function(e){if(e===null||Ee(e))return e;throw new Error(we)},xe=function(e){if(ge(e))return{tag:"async",stripePromise:Promise.resolve(e).then(ee)};var t=ee(e);return t===null?{tag:"empty"}:{tag:"sync",stripe:t}},K=s.createContext(null);K.displayName="ElementsContext";var je=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},G=s.createContext(null);G.displayName="CartElementContext";var Oe=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},Ae=function(e){var t=e.stripe,n=e.options,o=e.children,a=s.useMemo(function(){return xe(t)},[t]),p=s.useState(null),y=W(p,2),i=y[0],g=y[1],E=s.useState(null),b=W(E,2),C=b[0],A=b[1],P=s.useState(function(){return{stripe:a.tag==="sync"?a.stripe:null,elements:a.tag==="sync"?a.stripe.elements(n):null}}),S=W(P,2),v=S[0],j=S[1];s.useEffect(function(){var h=!0,L=function(N){j(function(I){return I.stripe?I:{stripe:N,elements:N.elements(n)}})};return a.tag==="async"&&!v.stripe?a.stripePromise.then(function(w){w&&h&&L(w)}):a.tag==="sync"&&!v.stripe&&L(a.stripe),function(){h=!1}},[a,v,n]);var R=D(t);s.useEffect(function(){R!==null&&R!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[R,t]);var k=D(n);return s.useEffect(function(){if(v.elements){var h=ae(n,k,["clientSecret","fonts"]);h&&v.elements.update(h)}},[n,k,v.elements]),s.useEffect(function(){var h=v.stripe;!h||!h._registerWrapper||!h.registerAppInfo||(h._registerWrapper({name:"react-stripe-js",version:"2.1.0"}),h.registerAppInfo({name:"react-stripe-js",version:"2.1.0",url:"https://stripe.com/docs/stripe-js/react"}))},[v.stripe]),s.createElement(K.Provider,{value:v},s.createElement(G.Provider,{value:{cart:i,setCart:g,cartState:C,setCartState:A}},o))};Ae.propTypes={stripe:u.any,options:u.object};var F=function(e){var t=s.useContext(K);return je(t,e)},te=function(e){var t=s.useContext(G);return Oe(t,e)},Pe=function(e){var t=e.children,n=F("mounts <ElementsConsumer>");return t(n)};Pe.propTypes={children:u.func.isRequired};var m=function(e,t,n){var o=!!n,a=s.useRef(n);s.useEffect(function(){a.current=n},[n]),s.useEffect(function(){if(!o||!e)return function(){};var p=function(){a.current&&a.current.apply(a,arguments)};return e.on(t,p),function(){e.off(t,p)}},[o,t,e,a])},Re=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},c=function(e,t){var n="".concat(Re(e),"Element"),o=function(i){var g=i.id,E=i.className,b=i.options,C=b===void 0?{}:b,A=i.onBlur,P=i.onFocus,S=i.onReady,v=i.onChange,j=i.onEscape,R=i.onClick,k=i.onLoadError,h=i.onLoaderStart,L=i.onNetworksChange,w=i.onCheckout,N=i.onLineItemClick,I=i.onConfirm,ue=i.onCancel,ce=i.onShippingAddressChange,le=i.onShippingRateChange,pe=F("mounts <".concat(n,">")),$=pe.elements,fe=s.useState(null),V=W(fe,2),f=V[0],de=V[1],x=s.useRef(null),B=s.useRef(null),Y=te("mounts <".concat(n,">")),M=Y.setCart,q=Y.setCartState;m(f,"blur",A),m(f,"focus",P),m(f,"escape",j),m(f,"click",R),m(f,"loaderror",k),m(f,"loaderstart",h),m(f,"networkschange",L),m(f,"lineitemclick",N),m(f,"confirm",I),m(f,"cancel",ue),m(f,"shippingaddresschange",ce),m(f,"shippingratechange",le);var T;e==="cart"?T=function(X){q(X),S&&S(X)}:S&&(e==="expressCheckout"?T=S:T=function(){S(f)}),m(f,"ready",T);var me=e==="cart"?function(d){q(d),v&&v(d)}:v;m(f,"change",me);var ve=e==="cart"?function(d){q(d),w&&w(d)}:w;m(f,"checkout",ve),s.useLayoutEffect(function(){if(x.current===null&&$&&B.current!==null){var d=$.create(e,C);e==="cart"&&M&&M(d),x.current=d,de(d),d.mount(B.current)}},[$,C,M]);var z=D(C);return s.useEffect(function(){if(x.current){var d=ae(C,z,["paymentRequest"]);d&&x.current.update(d)}},[C,z]),s.useLayoutEffect(function(){return function(){x.current&&(x.current.destroy(),x.current=null)}},[]),s.createElement("div",{id:g,className:E,ref:B})},a=function(i){F("mounts <".concat(n,">")),te("mounts <".concat(n,">"));var g=i.id,E=i.className;return s.createElement("div",{id:g,className:E})},p=t?a:o;return p.propTypes={id:u.string,className:u.string,onChange:u.func,onBlur:u.func,onFocus:u.func,onReady:u.func,onEscape:u.func,onClick:u.func,onLoadError:u.func,onLoaderStart:u.func,onNetworksChange:u.func,onCheckout:u.func,onLineItemClick:u.func,onConfirm:u.func,onCancel:u.func,onShippingAddressChange:u.func,onShippingRateChange:u.func,options:u.object},p.displayName=n,p.__elementType=e,p},l=typeof window>"u";c("auBankAccount",l);var $e=c("card",l);c("cardNumber",l);c("cardExpiry",l);c("cardCvc",l);c("fpxBank",l);c("iban",l);c("idealBank",l);c("p24Bank",l);c("epsBank",l);c("payment",l);c("expressCheckout",l);c("paymentRequestButton",l);c("linkAuthentication",l);c("address",l);c("shippingAddress",l);c("cart",l);c("paymentMethodMessaging",l);c("affirmMessage",l);c("afterpayClearpayMessage",l);var oe="https://js.stripe.com/v3",ke=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,re="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Le=function(){for(var e=document.querySelectorAll('script[src^="'.concat(oe,'"]')),t=0;t<e.length;t++){var n=e[t];if(ke.test(n.src))return n}return null},Ne=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(oe).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},Ie=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.0",startTime:t})},_=null,Te=function(e){return _!==null||(_=new Promise(function(t,n){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe&&e&&console.warn(re),window.Stripe){t(window.Stripe);return}try{var o=Le();o&&e?console.warn(re):o||(o=Ne(e)),o.addEventListener("load",function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(a){n(a);return}})),_},_e=function(e,t,n){if(e===null)return null;var o=e.apply(void 0,t);return Ie(o,n),o},ie=Promise.resolve().then(function(){return Te(null)}),se=!1;ie.catch(function(r){se||console.warn(r)});var Be=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];se=!0;var o=Date.now();return ie.then(function(a){return _e(a,t,o)})};export{$e as C,Ae as E,Pe as a,Be as l};
//# sourceMappingURL=@stripe-60fc8d5a.js.map
