var na="-ms-",ea="-moz-",ca="-webkit-",lr="comm",gr="rule",mr="decl",Rr="@import",Sr="@keyframes",xr=Math.abs,ur=String.fromCharCode,zr=Object.assign;function sa(r,a){return R(r,0)^45?(((a<<2^R(r,0))<<2^R(r,1))<<2^R(r,2))<<2^R(r,3):0}function Er(r){return r.trim()}function ta(r,a){return(r=a.exec(r))?r[0]:r}function nr(r,a,n){return r.replace(a,n)}function Ir(r,a){return r.indexOf(a)}function R(r,a){return r.charCodeAt(a)|0}function P(r,a,n){return r.slice(a,n)}function I(r){return r.length}function fr(r){return r.length}function W(r,a){return a.push(r),r}function ia(r,a){return r.map(a).join("")}var J=1,N=1,Mr=0,O=0,$=0,D="";function Q(r,a,n,c,s,h,k){return{value:r,root:a,parent:n,type:c,props:s,children:h,line:J,column:N,length:k,return:""}}function ua(r,a){return zr(Q("",null,null,"",null,null,0),r,{length:-r.length},a)}function jr(){return $}function Kr(){return $=O>0?R(D,--O):0,N--,$===10&&(N=1,J--),$}function T(){return $=O<Mr?R(D,O++):0,N++,$===10&&(N=1,J++),$}function K(){return R(D,O)}function Z(){return O}function V(r,a){return P(D,r,a)}function er(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lr(r){return J=N=1,Mr=I(D=r),O=0,[]}function Nr(r){return D="",r}function rr(r){return Er(V(O-1,cr(r===91?r+2:r===40?r+1:r)))}function Br(r){for(;($=K())&&$<33;)T();return er(r)>2||er($)>3?"":" "}function Dr(r,a){for(;--a&&T()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return V(r,Z()+(a<6&&K()==32&&T()==32))}function cr(r){for(;T();)switch($){case r:return O;case 34:case 39:r!==34&&r!==39&&cr($);break;case 40:r===41&&cr(r);break;case 92:T();break}return O}function Fr(r,a){for(;T()&&r+$!==47+10;)if(r+$===42+42&&K()===47)break;return"/*"+V(a,O-1)+"*"+ur(r===47?r:T())}function Pr(r){for(;!er(K());)T();return V(r,O)}function fa(r){return Nr(q("",null,null,null,[""],r=Lr(r),0,[0],r))}function q(r,a,n,c,s,h,k,u,C){for(var E=0,w=0,t=k,g=0,M=0,d=0,f=1,x=1,o=1,i=0,l="",z=s,m=h,v=c,e=l;x;)switch(d=i,i=T()){case 40:if(d!=108&&R(e,t-1)==58){Ir(e+=nr(rr(i),"&","&\f"),"&\f")!=-1&&(o=-1);break}case 34:case 39:case 91:e+=rr(i);break;case 9:case 10:case 13:case 32:e+=Br(d);break;case 92:e+=Dr(Z()-1,7);continue;case 47:switch(K()){case 42:case 47:W(Ur(Fr(T(),Z()),a,n),C);break;default:e+="/"}break;case 123*f:u[E++]=I(e)*o;case 125*f:case 59:case 0:switch(i){case 0:case 125:x=0;case 59+w:M>0&&I(e)-t&&W(M>32?$r(e+";",c,n,t-1):$r(nr(e," ","")+";",c,n,t-2),C);break;case 59:e+=";";default:if(W(v=vr(e,a,n,E,w,s,u,l,z=[],m=[],t),h),i===123)if(w===0)q(e,a,v,v,z,h,t,u,m);else switch(g===99&&R(e,3)===110?100:g){case 100:case 109:case 115:q(r,v,v,c&&W(vr(r,v,v,0,0,s,u,l,s,z=[],t),m),s,m,t,u,c?z:m);break;default:q(e,v,v,v,[""],m,0,u,m)}}E=w=M=0,f=o=1,l=e="",t=k;break;case 58:t=1+I(e),M=d;default:if(f<1){if(i==123)--f;else if(i==125&&f++==0&&Kr()==125)continue}switch(e+=ur(i),i*f){case 38:o=w>0?1:(e+="\f",-1);break;case 44:u[E++]=(I(e)-1)*o,o=1;break;case 64:K()===45&&(e+=rr(T())),g=K(),w=t=I(l=e+=Pr(Z())),i++;break;case 45:d===45&&I(e)==2&&(f=0)}}return h}function vr(r,a,n,c,s,h,k,u,C,E,w){for(var t=s-1,g=s===0?h:[""],M=fr(g),d=0,f=0,x=0;d<c;++d)for(var o=0,i=P(r,t+1,t=xr(f=k[d])),l=r;o<M;++o)(l=Er(f>0?g[o]+" "+i:nr(i,/&\f/g,g[o])))&&(C[x++]=l);return Q(r,a,n,s===0?gr:u,C,E,w)}function Ur(r,a,n){return Q(r,a,n,lr,ur(jr()),P(r,2,-2),0)}function $r(r,a,n,c){return Q(r,a,n,mr,P(r,0,c),P(r,c+1,-1),c)}function br(r,a){for(var n="",c=fr(r),s=0;s<c;s++)n+=a(r[s],s,r,a)||"";return n}function oa(r,a,n,c){switch(r.type){case Rr:case mr:return r.return=r.return||r.value;case lr:return"";case Sr:return r.return=r.value+"{"+br(r.children,c)+"}";case gr:r.value=r.props.join(",")}return I(n=br(r.children,c))?r.return=r.value+"{"+n+"}":""}function ha(r){var a=fr(r);return function(n,c,s,h){for(var k="",u=0;u<a;u++)k+=r[u](n,c,s,h)||"";return k}}function va(r){return function(a){a.root||(a=a.return)&&r(a)}}var $a="-ms-",ba="-moz-",ka="-webkit-",Or="comm",pr="rule",Cr="decl",Wr="@import",Yr="@keyframes",Zr=Math.abs,or=String.fromCharCode,qr=Object.assign;function da(r,a){return S(r,0)^45?(((a<<2^S(r,0))<<2^S(r,1))<<2^S(r,2))<<2^S(r,3):0}function Tr(r){return r.trim()}function wa(r,a){return(r=a.exec(r))?r[0]:r}function sr(r,a,n){return r.replace(a,n)}function Gr(r,a){return r.indexOf(a)}function S(r,a){return r.charCodeAt(a)|0}function U(r,a,n){return r.slice(a,n)}function j(r){return r.length}function hr(r){return r.length}function Y(r,a){return a.push(r),r}function la(r,a){return r.map(a).join("")}var X=1,B=1,Ar=0,p=0,b=0,F="";function _(r,a,n,c,s,h,k){return{value:r,root:a,parent:n,type:c,props:s,children:h,line:X,column:B,length:k,return:""}}function ga(r,a){return qr(_("",null,null,"",null,null,0),r,{length:-r.length},a)}function Hr(){return b}function Jr(){return b=p>0?S(F,--p):0,B--,b===10&&(B=1,X--),b}function A(){return b=p<Ar?S(F,p++):0,B++,b===10&&(B=1,X++),b}function L(){return S(F,p)}function G(){return p}function y(r,a){return U(F,r,a)}function tr(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qr(r){return X=B=1,Ar=j(F=r),p=0,[]}function Vr(r){return F="",r}function ar(r){return Tr(y(p-1,ir(r===91?r+2:r===40?r+1:r)))}function Xr(r){for(;(b=L())&&b<33;)A();return tr(r)>2||tr(b)>3?"":" "}function _r(r,a){for(;--a&&A()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return y(r,G()+(a<6&&L()==32&&A()==32))}function ir(r){for(;A();)switch(b){case r:return p;case 34:case 39:r!==34&&r!==39&&ir(b);break;case 40:r===41&&ir(r);break;case 92:A();break}return p}function yr(r,a){for(;A()&&r+b!==47+10;)if(r+b===42+42&&L()===47)break;return"/*"+y(a,p-1)+"*"+or(r===47?r:A())}function ra(r){for(;!tr(L());)A();return y(r,p)}function ma(r){return Vr(H("",null,null,null,[""],r=Qr(r),0,[0],r))}function H(r,a,n,c,s,h,k,u,C){for(var E=0,w=0,t=k,g=0,M=0,d=0,f=1,x=1,o=1,i=0,l="",z=s,m=h,v=c,e=l;x;)switch(d=i,i=A()){case 40:if(d!=108&&S(e,t-1)==58){Gr(e+=sr(ar(i),"&","&\f"),"&\f")!=-1&&(o=-1);break}case 34:case 39:case 91:e+=ar(i);break;case 9:case 10:case 13:case 32:e+=Xr(d);break;case 92:e+=_r(G()-1,7);continue;case 47:switch(L()){case 42:case 47:Y(aa(yr(A(),G()),a,n),C);break;default:e+="/"}break;case 123*f:u[E++]=j(e)*o;case 125*f:case 59:case 0:switch(i){case 0:case 125:x=0;case 59+w:M>0&&j(e)-t&&Y(M>32?dr(e+";",c,n,t-1):dr(sr(e," ","")+";",c,n,t-2),C);break;case 59:e+=";";default:if(Y(v=kr(e,a,n,E,w,s,u,l,z=[],m=[],t),h),i===123)if(w===0)H(e,a,v,v,z,h,t,u,m);else switch(g===99&&S(e,3)===110?100:g){case 100:case 109:case 115:H(r,v,v,c&&Y(kr(r,v,v,0,0,s,u,l,s,z=[],t),m),s,m,t,u,c?z:m);break;default:H(e,v,v,v,[""],m,0,u,m)}}E=w=M=0,f=o=1,l=e="",t=k;break;case 58:t=1+j(e),M=d;default:if(f<1){if(i==123)--f;else if(i==125&&f++==0&&Jr()==125)continue}switch(e+=or(i),i*f){case 38:o=w>0?1:(e+="\f",-1);break;case 44:u[E++]=(j(e)-1)*o,o=1;break;case 64:L()===45&&(e+=ar(A())),g=L(),w=t=j(l=e+=ra(G())),i++;break;case 45:d===45&&j(e)==2&&(f=0)}}return h}function kr(r,a,n,c,s,h,k,u,C,E,w){for(var t=s-1,g=s===0?h:[""],M=hr(g),d=0,f=0,x=0;d<c;++d)for(var o=0,i=U(r,t+1,t=Zr(f=k[d])),l=r;o<M;++o)(l=Tr(f>0?g[o]+" "+i:sr(i,/&\f/g,g[o])))&&(C[x++]=l);return _(r,a,n,s===0?pr:u,C,E,w)}function aa(r,a,n){return _(r,a,n,Or,or(Hr()),U(r,2,-2),0)}function dr(r,a,n,c){return _(r,a,n,Cr,U(r,0,c),U(r,c+1,-1),c)}function wr(r,a){for(var n="",c=hr(r),s=0;s<c;s++)n+=a(r[s],s,r,a)||"";return n}function Ea(r,a,n,c){switch(r.type){case Wr:case Cr:return r.return=r.return||r.value;case Or:return"";case Yr:return r.return=r.value+"{"+wr(r.children,c)+"}";case pr:r.value=r.props.join(",")}return j(n=wr(r.children,c))?r.return=r.value+"{"+n+"}":""}function Ma(r){var a=hr(r);return function(n,c,s,h){for(var k="",u=0;u<a;u++)k+=r[u](n,c,s,h)||"";return k}}function Oa(r){return function(a){a.root||(a=a.return)&&r(a)}}export{ar as $,Yr as A,wr as B,ga as C,mr as D,sr as E,Cr as F,Ea as G,Oa as H,ma as I,da as J,Sr as K,S as L,na as M,ka as N,$a as O,j as P,Gr as Q,gr as R,ba as S,wa as T,Vr as U,Qr as V,ca as W,A as X,tr as Y,or as Z,L as _,ua as a,y as a0,p as a1,oa as b,ia as c,va as d,fa as e,R as f,I as g,sa as h,Ir as i,ea as j,ta as k,Nr as l,ha as m,Lr as n,T as o,ur as p,K as q,nr as r,br as s,er as t,rr as u,V as v,O as w,Ma as x,pr as y,la as z};
//# sourceMappingURL=stylis-2d96297d.js.map
