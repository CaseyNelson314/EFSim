var $l=Object.defineProperty;var Ql=(i,e,t)=>e in i?$l(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ri=(i,e,t)=>(Ql(i,typeof e!="symbol"?e+"":e,t),t),ds=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var fe=(i,e,t)=>(ds(i,e,"read from private field"),t?t.call(i):e.get(i)),At=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Mt=(i,e,t,n)=>(ds(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);var vr=(i,e,t)=>(ds(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="159",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jl=0,Aa=1,ec=2,fl=1,tc=2,gn=3,Nn=0,Bt=1,Vt=2,Dn=0,wi=1,wa=2,Ra=3,Ca=4,nc=5,Yn=100,ic=101,rc=102,Pa=103,La=104,sc=200,ac=201,oc=202,lc=203,Ys=204,js=205,cc=206,hc=207,uc=208,dc=209,fc=210,pc=211,mc=212,gc=213,_c=214,vc=0,xc=1,Mc=2,Zr=3,Sc=4,Ec=5,yc=6,Tc=7,pl=0,bc=1,Ac=2,Un=0,wc=1,Rc=2,Cc=3,Pc=4,Lc=5,ml=300,Ui=301,Ii=302,Zs=303,Ks=304,is=306,$s=1e3,sn=1001,Qs=1002,Ot=1003,Da=1004,fs=1005,qt=1006,Dc=1007,ir=1008,In=1009,Uc=1010,Ic=1011,ha=1012,gl=1013,Pn=1014,Ln=1015,rr=1016,_l=1017,vl=1018,$n=1020,Nc=1021,an=1023,Fc=1024,Oc=1025,Qn=1026,Ni=1027,Bc=1028,xl=1029,zc=1030,Ml=1031,Sl=1033,ps=33776,ms=33777,gs=33778,_s=33779,Ua=35840,Ia=35841,Na=35842,Fa=35843,El=36196,Oa=37492,Ba=37496,za=37808,Ha=37809,Ga=37810,Va=37811,ka=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,ja=37817,Za=37818,Ka=37819,$a=37820,Qa=37821,vs=36492,Ja=36494,eo=36495,Hc=36283,to=36284,no=36285,io=36286,yl=3e3,Jn=3001,Gc=3200,Vc=3201,kc=0,Wc=1,jt="",Et="srgb",Mn="srgb-linear",ua="display-p3",rs="display-p3-linear",Kr="linear",Je="srgb",$r="rec709",Qr="p3",oi=7680,ro=519,Xc=512,qc=513,Yc=514,Tl=515,jc=516,Zc=517,Kc=518,$c=519,so=35044,ao="300 es",Js=1035,vn=2e3,Jr=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oo=1234567;const Ji=Math.PI/180,sr=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function da(i,e){return(i%e+e)%e}function Qc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Jc(i,e,t){return i!==e?(t-i)/(e-i):0}function er(i,e,t){return(1-t)*i+t*e}function eh(i,e,t,n){return er(i,e,1-Math.exp(-t*n))}function th(i,e=1){return e-Math.abs(da(i,e*2)-e)}function nh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sh(i,e){return i+Math.random()*(e-i)}function ah(i){return i*(.5-Math.random())}function oh(i){i!==void 0&&(oo=i);let e=oo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(i){return i*Ji}function ch(i){return i*sr}function ea(i){return(i&i-1)===0&&i!==0}function hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function es(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wn={DEG2RAD:Ji,RAD2DEG:sr,generateUUID:Oi,clamp:Pt,euclideanModulo:da,mapLinear:Qc,inverseLerp:Jc,lerp:er,damp:eh,pingpong:th,smoothstep:nh,smootherstep:ih,randInt:rh,randFloat:sh,randFloatSpread:ah,seededRandom:oh,degToRad:lh,radToDeg:ch,isPowerOfTwo:ea,ceilPowerOfTwo:hh,floorPowerOfTwo:es,setQuaternionFromProperEuler:uh,normalize:It,denormalize:Ti};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],u=r[6],S=r[1],v=r[4],y=r[7],T=r[2],A=r[5],R=r[8];return s[0]=a*_+o*S+l*T,s[3]=a*p+o*v+l*A,s[6]=a*u+o*y+l*R,s[1]=c*_+h*S+d*T,s[4]=c*p+h*v+d*A,s[7]=c*u+h*y+d*R,s[2]=f*_+m*S+g*T,s[5]=f*p+m*v+g*A,s[8]=f*u+m*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,m=c*s-a*l,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new We;function bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dh(){const i=ts("canvas");return i.style.display="block",i}const lo={};function tr(i){i in lo||(lo[i]=!0,console.warn(i))}const co=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ho=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xr={[Mn]:{transfer:Kr,primaries:$r,toReference:i=>i,fromReference:i=>i},[Et]:{transfer:Je,primaries:$r,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[rs]:{transfer:Kr,primaries:Qr,toReference:i=>i.applyMatrix3(ho),fromReference:i=>i.applyMatrix3(co)},[ua]:{transfer:Je,primaries:Qr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ho),fromReference:i=>i.applyMatrix3(co).convertLinearToSRGB()}},fh=new Set([Mn,rs]),Ze={enabled:!0,_workingColorSpace:Mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xr[e].toReference,r=xr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xr[i].primaries},getTransfer:function(i){return i===jt?Kr:xr[i].transfer}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class Al{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=ts("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ph=0;class wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ss(r[a].image)):s.push(Ss(r[a]))}else s=Ss(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mh=0;class kt extends ni{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=sn,r=sn,s=qt,a=ir,o=an,l=In,c=kt.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Oi(),this.name="",this.source=new wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Jn?Et:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Jn:yl}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?Et:jt}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=ml;kt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,T=(u+1)/2,A=(h+f)/4,R=(d+_)/4,I=(g+p)/4;return v>y&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=R/n):y>T?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=I/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=I/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gh extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Et:jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rl extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _h extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-o;const u=l*f+c*m+h*g+d*_,S=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const T=Math.sqrt(v),A=Math.atan2(T,u*S);p=Math.sin(p*A)/T,o=Math.sin(o*A)/T}const y=o*S;if(l=l*p+f*y,c=c*p+m*y,h=h*p+g*y,d=d*p+_*y,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-o*m,e[t+2]=c*g+h*m+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new C,uo=new yt;class fr{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),Sr.subVectors(this.max,Wi),ci.subVectors(e.a,Wi),hi.subVectors(e.b,Wi),ui.subVectors(e.c,Wi),En.subVectors(hi,ci),yn.subVectors(ui,hi),zn.subVectors(ci,ui);let t=[0,-En.z,En.y,0,-yn.z,yn.y,0,-zn.z,zn.y,En.z,0,-En.x,yn.z,0,-yn.x,zn.z,0,-zn.x,-En.y,En.x,0,-yn.y,yn.x,0,-zn.y,zn.x,0];return!ys(t,ci,hi,ui,Sr)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,ci,hi,ui,Sr))?!1:(Er.crossVectors(En,yn),t=[Er.x,Er.y,Er.z],ys(t,ci,hi,ui,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new C,new C,new C,new C,new C,new C,new C,new C],Zt=new C,Mr=new fr,ci=new C,hi=new C,ui=new C,En=new C,yn=new C,zn=new C,Wi=new C,Sr=new C,Er=new C,Hn=new C;function ys(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Hn.fromArray(i,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vh=new fr,Xi=new C,Ts=new C;class ss{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Ts)),this.expandByPoint(Xi.copy(e.center).sub(Ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new C,bs=new C,yr=new C,Tn=new C,As=new C,Tr=new C,ws=new C;class as{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bs.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(bs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Tn.dot(this.direction),l=-Tn.dot(yr),c=Tn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bs).addScaledVector(yr,f),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){As.subVectors(t,e),Tr.subVectors(n,e),ws.crossVectors(As,Tr);let a=this.direction.dot(ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(Tr.crossVectors(Tn,Tr));if(l<0)return null;const c=o*this.direction.dot(As.cross(Tn));if(c<0||l+c>a)return null;const h=-o*Tn.dot(ws);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,s,a,o,l,c,h,d,f,m,g,_,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,f,m,g,_,p)}set(e,t,n,r,s,a,o,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,Mh)}lookAt(e,t,n){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),bn.crossVectors(n,Ht),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),bn.crossVectors(n,Ht)),bn.normalize(),br.crossVectors(Ht,bn),r[0]=bn.x,r[4]=br.x,r[8]=Ht.x,r[1]=bn.y,r[5]=br.y,r[9]=Ht.y,r[2]=bn.z,r[6]=br.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],S=n[3],v=n[7],y=n[11],T=n[15],A=r[0],R=r[4],I=r[8],x=r[12],b=r[1],k=r[5],B=r[9],K=r[13],L=r[2],N=r[6],q=r[10],V=r[14],ee=r[3],Y=r[7],j=r[11],re=r[15];return s[0]=a*A+o*b+l*L+c*ee,s[4]=a*R+o*k+l*N+c*Y,s[8]=a*I+o*B+l*q+c*j,s[12]=a*x+o*K+l*V+c*re,s[1]=h*A+d*b+f*L+m*ee,s[5]=h*R+d*k+f*N+m*Y,s[9]=h*I+d*B+f*q+m*j,s[13]=h*x+d*K+f*V+m*re,s[2]=g*A+_*b+p*L+u*ee,s[6]=g*R+_*k+p*N+u*Y,s[10]=g*I+_*B+p*q+u*j,s[14]=g*x+_*K+p*V+u*re,s[3]=S*A+v*b+y*L+T*ee,s[7]=S*R+v*k+y*N+T*Y,s[11]=S*I+v*B+y*q+T*j,s[15]=S*x+v*K+y*V+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*m-n*l*m)+_*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+p*(+t*c*d-t*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+u*(-r*o*h-t*l*d+t*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],S=d*p*c-_*f*c+_*l*m-o*p*m-d*l*u+o*f*u,v=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,y=h*_*c-g*d*c+g*o*m-a*_*m-h*o*u+a*d*u,T=g*d*l-h*_*l-g*o*f+a*_*f+h*o*p-a*d*p,A=t*S+n*v+r*y+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(_*f*s-d*p*s-_*r*m+n*p*m+d*r*u-n*f*u)*R,e[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*u+n*l*u)*R,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*m-n*l*m)*R,e[4]=v*R,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*R,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*u-t*l*u)*R,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*m+t*l*m)*R,e[8]=y*R,e[9]=(g*d*s-h*_*s-g*n*m+t*_*m+h*n*u-t*d*u)*R,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*u+t*o*u)*R,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*m-t*o*m)*R,e[12]=T*R,e[13]=(h*_*r-g*d*r+g*n*f-t*_*f-h*n*p+t*d*p)*R,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*p-t*o*p)*R,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,m=s*h,g=s*d,_=a*h,p=a*d,u=o*d,S=l*c,v=l*h,y=l*d,T=n.x,A=n.y,R=n.z;return r[0]=(1-(_+u))*T,r[1]=(m+y)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(f+u))*A,r[6]=(p+S)*A,r[7]=0,r[8]=(g+v)*R,r[9]=(p-S)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,h=1/a,d=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=vn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(o===vn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Jr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=vn){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),f=(t+e)*c,m=(n+r)*h;let g,_;if(o===vn)g=(a+s)*d,_=-2*d;else if(o===Jr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Kt=new ct,xh=new C(0,0,0),Mh=new C(1,1,1),bn=new C,br=new C,Ht=new C,fo=new ct,po=new yt;class xn{constructor(e=0,t=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sh=0;const mo=new C,fi=new yt,fn=new ct,Ar=new C,qi=new C,Eh=new C,yh=new yt,go=new C(1,0,0),_o=new C(0,1,0),vo=new C(0,0,1),Th={type:"added"},bh={type:"removed"};class dt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new C,t=new xn,n=new yt,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(qi,Ar,this.up):fn.lookAt(Ar,qi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(fn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new C(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new C,pn=new C,Rs=new C,mn=new C,pi=new C,mi=new C,xo=new C,Cs=new C,Ps=new C,Ls=new C;let wr=!1;class rn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),pn.subVectors(n,t),Rs.subVectors(e,t);const a=$t.dot($t),o=$t.dot(pn),l=$t.dot(Rs),c=pn.dot(pn),h=pn.dot(Rs),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,r,s,a,o,l){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,mn),l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),pn.subVectors(e,t),$t.cross(pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),$t.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;pi.subVectors(r,n),mi.subVectors(s,n),Cs.subVectors(e,n);const l=pi.dot(Cs),c=mi.dot(Cs);if(l<=0&&c<=0)return t.copy(n);Ps.subVectors(e,r);const h=pi.dot(Ps),d=mi.dot(Ps);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(pi,a);Ls.subVectors(e,s);const m=pi.dot(Ls),g=mi.dot(Ls);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return xo.subVectors(s,r),o=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(xo,o);const u=1/(p+_+f);return a=_*u,o=f*u,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Ds(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=da(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ds(a,s,e+1/3),this.g=Ds(a,s,e),this.b=Ds(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ze.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Pt(Rt.r*255,0,255))*65536+Math.round(Pt(Rt.g*255,0,255))*256+Math.round(Pt(Rt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Et){Ze.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,r=Rt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Rr);const n=er(An.h,Rr.h,t),r=er(An.s,Rr.s,t),s=er(An.l,Rr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new qe;qe.NAMES=Cl;let Ah=0;class pr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=wi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=js,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==js&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class it extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new C,Cr=new Re;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=so,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}}class Pl extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wh=0;const Xt=new ct,Us=new dt,gi=new C,Gt=new fr,Yi=new fr,vt=new C;class Lt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Ll:Pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Us.lookAt(e),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Gt.min,Yi.min),Gt.expandByPoint(vt),vt.addVectors(Gt.max,Yi.max),Gt.expandByPoint(vt)):(Gt.expandByPoint(Yi.min),Gt.expandByPoint(Yi.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),vt.add(gi)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new C,h[b]=new C;const d=new C,f=new C,m=new C,g=new Re,_=new Re,p=new Re,u=new C,S=new C;function v(b,k,B){d.fromArray(r,b*3),f.fromArray(r,k*3),m.fromArray(r,B*3),g.fromArray(a,b*2),_.fromArray(a,k*2),p.fromArray(a,B*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const K=1/(_.x*p.y-p.x*_.y);isFinite(K)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(K),S.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(K),c[b].add(u),c[k].add(u),c[B].add(u),h[b].add(S),h[k].add(S),h[B].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,k=y.length;b<k;++b){const B=y[b],K=B.start,L=B.count;for(let N=K,q=K+L;N<q;N+=3)v(n[N+0],n[N+1],n[N+2])}const T=new C,A=new C,R=new C,I=new C;function x(b){R.fromArray(s,b*3),I.copy(R);const k=c[b];T.copy(k),T.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(I,k);const K=A.dot(h[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=K}for(let b=0,k=y.length;b<k;++b){const B=y[b],K=B.start,L=B.count;for(let N=K,q=K+L;N<q;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new xt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new ct,Gn=new as,Pr=new ss,So=new C,_i=new C,vi=new C,xi=new C,Is=new C,Lr=new C,Dr=new Re,Ur=new Re,Ir=new Re,Eo=new C,yo=new C,To=new C,Nr=new C,Fr=new C;class ue extends dt{constructor(e=new Lt,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Lr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Is.fromBufferAttribute(d,e),a?Lr.addScaledVector(Is,h):Lr.addScaledVector(Is.sub(t),h))}t.add(Lr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(Pr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Pr,So)===null||Gn.origin.distanceToSquared(So)>(e.far-e.near)**2))&&(Mo.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,T=v;y<T;y+=3){const A=o.getX(y),R=o.getX(y+1),I=o.getX(y+2);r=Or(this,u,e,n,c,h,d,A,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const S=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);r=Or(this,a,e,n,c,h,d,S,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,T=v;y<T;y+=3){const A=y,R=y+1,I=y+2;r=Or(this,u,e,n,c,h,d,A,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const S=p,v=p+1,y=p+2;r=Or(this,a,e,n,c,h,d,S,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Rh(i,e,t,n,r,s,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Nn,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fr);return c<t.near||c>t.far?null:{distance:c,point:Fr.clone(),object:i}}function Or(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,_i),i.getVertexPosition(l,vi),i.getVertexPosition(c,xi);const h=Rh(i,e,t,n,_i,vi,xi,Nr);if(h){r&&(Dr.fromBufferAttribute(r,o),Ur.fromBufferAttribute(r,l),Ir.fromBufferAttribute(r,c),h.uv=rn.getInterpolation(Nr,_i,vi,xi,Dr,Ur,Ir,new Re)),s&&(Dr.fromBufferAttribute(s,o),Ur.fromBufferAttribute(s,l),Ir.fromBufferAttribute(s,c),h.uv1=rn.getInterpolation(Nr,_i,vi,xi,Dr,Ur,Ir,new Re),h.uv2=h.uv1),a&&(Eo.fromBufferAttribute(a,o),yo.fromBufferAttribute(a,l),To.fromBufferAttribute(a,c),h.normal=rn.getInterpolation(Nr,_i,vi,xi,Eo,yo,To,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};rn.getNormal(_i,vi,xi,d.normal),h.face=d}return h}class ot extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function g(_,p,u,S,v,y,T,A,R,I,x){const b=y/R,k=T/I,B=y/2,K=T/2,L=A/2,N=R+1,q=I+1;let V=0,ee=0;const Y=new C;for(let j=0;j<q;j++){const re=j*k-K;for(let ae=0;ae<N;ae++){const W=ae*b-B;Y[_]=W*S,Y[p]=re*v,Y[u]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[u]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ae/R),d.push(1-j/I),V+=1}}for(let j=0;j<I;j++)for(let re=0;re<R;re++){const ae=f+re+N*j,W=f+re+N*(j+1),$=f+(re+1)+N*(j+1),de=f+(re+1)+N*j;l.push(ae,W,de),l.push(W,$,de),ee+=6}o.addGroup(m,ee,x),m+=ee,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Fi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}const Ph={clone:Fi,merge:Nt};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends Ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,Si=1;class Uh extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(Mi,Si,e,t);r.layers=this.layers,this.add(r);const s=new Yt(Mi,Si,e,t);s.layers=this.layers,this.add(s);const a=new Yt(Mi,Si,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Mi,Si,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Mi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Mi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Il extends kt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ih extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?Et:jt),this.texture=new Il(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ot(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Dn});s.uniforms.tEquirect.value=t;const a=new ue(r,s),o=t.minFilter;return t.minFilter===ir&&(t.minFilter=qt),new Uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ns=new C,Nh=new C,Fh=new We;class Rn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ns.subVectors(n,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ns),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fh.getNormalMatrix(e),r=this.coplanarPoint(Ns).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ss,Br=new C;class Nl{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],S=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,p-m,y-u).normalize(),n[1].setComponents(l+s,f+c,p+m,y+u).normalize(),n[2].setComponents(l+a,f+h,p+g,y+S).normalize(),n[3].setComponents(l-a,f-h,p-g,y-S).normalize(),n[4].setComponents(l-o,f-d,p-_,y-v).normalize(),t===vn)n[5].setComponents(l+o,f+d,p+_,y+v).normalize();else if(t===Jr)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Br.x=r.normal.x>0?e.max.x:e.min.x,Br.y=r.normal.y>0?e.max.y:e.min.y,Br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Oh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class mr extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const S=u*f-a;for(let v=0;v<c;v++){const y=v*d-s;g.push(y,-S,0),_.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const v=S+c*u,y=S+c*(u+1),T=S+1+c*(u+1),A=S+1+c*u;m.push(v,y,A),m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$h=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Au=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:Hh,alphamap_pars_fragment:Gh,alphatest_fragment:Vh,alphatest_pars_fragment:kh,aomap_fragment:Wh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:jh,beginnormal_vertex:Zh,bsdfs:Kh,iridescence_fragment:$h,bumpmap_pars_fragment:Qh,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:tu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:ru,color_pars_vertex:su,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:_u,envmap_pars_fragment:vu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Lu,envmap_vertex:Mu,fog_vertex:Su,fog_pars_vertex:Eu,fog_fragment:yu,fog_pars_fragment:Tu,gradientmap_pars_fragment:bu,lightmap_fragment:Au,lightmap_pars_fragment:wu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Du,lights_toon_pars_fragment:Uu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Nu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:Hu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:ju,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ku,morphcolor_vertex:$u,morphnormal_vertex:Qu,morphtarget_pars_vertex:Ju,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:rd,normal_vertex:sd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Md,shadowmap_vertex:Sd,shadowmask_pars_fragment:Ed,skinbase_vertex:yd,skinning_pars_vertex:Td,skinning_vertex:bd,skinnormal_vertex:Ad,specularmap_fragment:wd,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Ld,transmission_pars_fragment:Dd,uv_pars_fragment:Ud,uv_pars_vertex:Id,uv_vertex:Nd,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:Hd,cube_vert:Gd,cube_frag:Vd,depth_vert:kd,depth_frag:Wd,distanceRGBA_vert:Xd,distanceRGBA_frag:qd,equirect_vert:Yd,equirect_frag:jd,linedashed_vert:Zd,linedashed_frag:Kd,meshbasic_vert:$d,meshbasic_frag:Qd,meshlambert_vert:Jd,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},cn={basic:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Nt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Nt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Nt([le.points,le.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Nt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Nt([le.common,le.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Nt([le.sprite,le.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Nt([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Nt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};cn.physical={uniforms:Nt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const zr={r:0,b:0,g:0};function vf(i,e,t,n,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let S=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),S=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===is)?(h===void 0&&(h=new ue(new ot(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Fi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(v.colorSpace)!==Je,(d!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ue(new mr(2,2),new Fn({name:"BackgroundMaterial",uniforms:Fi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(zr,Dl(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function xf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(L,N,q,V,ee){let Y=!1;if(a){const j=_(V,q,N);c!==j&&(c=j,m(c.object)),Y=u(L,V,q,ee),Y&&S(L,V,q,ee)}else{const j=N.wireframe===!0;(c.geometry!==V.id||c.program!==q.id||c.wireframe!==j)&&(c.geometry=V.id,c.program=q.id,c.wireframe=j,Y=!0)}ee!==null&&t.update(ee,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(L,N,q,V),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,N,q){const V=q.wireframe===!0;let ee=o[L.id];ee===void 0&&(ee={},o[L.id]=ee);let Y=ee[N.id];Y===void 0&&(Y={},ee[N.id]=Y);let j=Y[V];return j===void 0&&(j=p(f()),Y[V]=j),j}function p(L){const N=[],q=[],V=[];for(let ee=0;ee<r;ee++)N[ee]=0,q[ee]=0,V[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:V,object:L,attributes:{},index:null}}function u(L,N,q,V){const ee=c.attributes,Y=N.attributes;let j=0;const re=q.getAttributes();for(const ae in re)if(re[ae].location>=0){const $=ee[ae];let de=Y[ae];if(de===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),$===void 0||$.attribute!==de||de&&$.data!==de.data)return!0;j++}return c.attributesNum!==j||c.index!==V}function S(L,N,q,V){const ee={},Y=N.attributes;let j=0;const re=q.getAttributes();for(const ae in re)if(re[ae].location>=0){let $=Y[ae];$===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const de={};de.attribute=$,$&&$.data&&(de.data=$.data),ee[ae]=de,j++}c.attributes=ee,c.attributesNum=j,c.index=V}function v(){const L=c.newAttributes;for(let N=0,q=L.length;N<q;N++)L[N]=0}function y(L){T(L,0)}function T(L,N){const q=c.newAttributes,V=c.enabledAttributes,ee=c.attributeDivisors;q[L]=1,V[L]===0&&(i.enableVertexAttribArray(L),V[L]=1),ee[L]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),ee[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let q=0,V=N.length;q<V;q++)N[q]!==L[q]&&(i.disableVertexAttribArray(q),N[q]=0)}function R(L,N,q,V,ee,Y,j){j===!0?i.vertexAttribIPointer(L,N,q,ee,Y):i.vertexAttribPointer(L,N,q,V,ee,Y)}function I(L,N,q,V){if(n.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ee=V.attributes,Y=q.getAttributes(),j=N.defaultAttributeValues;for(const re in Y){const ae=Y[re];if(ae.location>=0){let W=ee[re];if(W===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const $=W.normalized,de=W.itemSize,xe=t.get(W);if(xe===void 0)continue;const Se=xe.buffer,Ie=xe.type,Le=xe.bytesPerElement,Ce=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||W.gpuType===gl);if(W.isInterleavedBufferAttribute){const Fe=W.data,F=Fe.stride,mt=W.offset;if(Fe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ae.locationSize;Ee++)T(ae.location+Ee,Fe.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)y(ae.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ee=0;Ee<ae.locationSize;Ee++)R(ae.location+Ee,de/ae.locationSize,Ie,$,F*Le,(mt+de/ae.locationSize*Ee)*Le,Ce)}else{if(W.isInstancedBufferAttribute){for(let Fe=0;Fe<ae.locationSize;Fe++)T(ae.location+Fe,W.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Fe=0;Fe<ae.locationSize;Fe++)y(ae.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Fe=0;Fe<ae.locationSize;Fe++)R(ae.location+Fe,de/ae.locationSize,Ie,$,de*Le,de/ae.locationSize*Fe*Le,Ce)}}else if(j!==void 0){const $=j[re];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(ae.location,$);break;case 3:i.vertexAttrib3fv(ae.location,$);break;case 4:i.vertexAttrib4fv(ae.location,$);break;default:i.vertexAttrib1fv(ae.location,$)}}}}A()}function x(){B();for(const L in o){const N=o[L];for(const q in N){const V=N[q];for(const ee in V)g(V[ee].object),delete V[ee];delete N[q]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const q in N){const V=N[q];for(const ee in V)g(V[ee].object),delete V[ee];delete N[q]}delete o[L.id]}function k(L){for(const N in o){const q=o[N];if(q[L.id]===void 0)continue;const V=q[L.id];for(const ee in V)g(V[ee].object),delete V[ee];delete q[L.id]}}function B(){K(),h=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:K,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Mf(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function o(h,d){i.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,f),t.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Sf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=a||e.has("OES_texture_float"),T=v&&y,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:A}}function Ef(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Rn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,v=S*4;let y=u.clippingState||null;l.value=y,y=h(g,f,v,m);for(let T=0;T!==v;++T)y[T]=t[T];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,y=m;v!==_;++v,y+=4)a.copy(d[v]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function yf(i){let e=new WeakMap;function t(a,o){return o===Zs?a.mapping=Ui:o===Ks&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zs||o===Ks)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ih(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Tf extends Ul{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bi=4,bo=[.125,.215,.35,.446,.526,.582],jn=20,Fs=new Tf,Ao=new qe;let Os=null,Bs=0,zs=0;const Xn=(1+Math.sqrt(5))/2,Ei=1/Xn,wo=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Xn,Ei),new C(0,Xn,-Ei),new C(Ei,0,Xn),new C(-Ei,0,Xn),new C(Xn,Ei,0),new C(-Xn,Ei,0)];class Ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Bs,zs),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:rr,format:an,colorSpace:Mn,depthBuffer:!1},r=Co(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(s)),this._blurMaterial=Af(s,e,t)}return r}_compileMaterial(e){const t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,r){const o=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ao),h.toneMapping=Un,h.autoClear=!1;const m=new it({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new ue(new ot,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ao),_=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Hr(r,S*v,u>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ui||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wo[(r-1)%wo.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ue(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):jn;p>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const u=[];let S=0;for(let R=0;R<jn;++R){const I=R/_,x=Math.exp(-I*I/2);u.push(x),R===0?S+=x:R<p&&(S+=2*x)}for(let R=0;R<u.length;R++)u[R]=u[R]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[r],T=3*y*(r>v-bi?r-v+bi:0),A=4*(this._cubeSize-y);Hr(t,T,A,3*y,2*y),l.setRenderTarget(t),l.render(d,Fs)}}function bf(i){const e=[],t=[],n=[];let r=i;const s=i-bi+1+bo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-bi?l=bo[a-i+bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,S=new Float32Array(_*g*m),v=new Float32Array(p*g*m),y=new Float32Array(u*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,I=A>2?0:-1,x=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(x,_*g*A),v.set(f,p*g*A);const b=[A,A,A,A,A,A];y.set(b,u*g*A)}const T=new Lt;T.setAttribute("position",new xt(S,_)),T.setAttribute("uv",new xt(v,p)),T.setAttribute("faceIndex",new xt(y,u)),e.push(T),r>bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Co(i,e,t){const n=new ei(i,e,t);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Af(i,e,t){const n=new Float32Array(jn),r=new C(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Po(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Lo(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zs||l===Ks,h=l===Ui||l===Ii;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ro(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ro(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Cf(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,y=S.length;v<y;v+=3){const T=S[v+0],A=S[v+1],R=S[v+2];f.push(T,A,A,R,R,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const T=v+0,A=v+1,R=v+2;f.push(T,A,A,R,R,T)}}else return;const p=new(bl(f)?Ll:Pl)(f,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Pf(i,e,t,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(s,g,o,m*l),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,u;if(r)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,o,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,o,m,0,_);let u=0;for(let S=0;S<_;S++)u+=g[S];t.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Lf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Df(i,e){return i[0]-e[0]}function Uf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function If(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let N=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),T===!0&&(x=3);let b=h.attributes.position.count*x,k=1;b>e.maxTextureSize&&(k=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*k*4*_),K=new Rl(B,b,k,_);K.type=Ln,K.needsUpdate=!0;const L=x*4;for(let q=0;q<_;q++){const V=A[q],ee=R[q],Y=I[q],j=b*k*4*q;for(let re=0;re<V.count;re++){const ae=re*L;v===!0&&(a.fromBufferAttribute(V,re),B[j+ae+0]=a.x,B[j+ae+1]=a.y,B[j+ae+2]=a.z,B[j+ae+3]=0),y===!0&&(a.fromBufferAttribute(ee,re),B[j+ae+4]=a.x,B[j+ae+5]=a.y,B[j+ae+6]=a.z,B[j+ae+7]=0),T===!0&&(a.fromBufferAttribute(Y,re),B[j+ae+8]=a.x,B[j+ae+9]=a.y,B[j+ae+10]=a.z,B[j+ae+11]=Y.itemSize===4?a.w:1)}}p={count:_,texture:K,size:new Re(b,k)},s.set(h,p),h.addEventListener("dispose",N)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const S=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=f[y]}_.sort(Uf);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Df);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const T=o[y],A=T[0],R=T[1];A!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+y)!==p[A]&&h.setAttribute("morphTarget"+y,p[A]),u&&h.getAttribute("morphNormal"+y)!==u[A]&&h.setAttribute("morphNormal"+y,u[A]),r[y]=R,S+=R):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),u&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const v=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Nf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ol extends kt{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Pn),n===void 0&&h===Ni&&(n=$n),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bl=new kt,zl=new Ol(1,1);zl.compareFunction=Tl;const Hl=new Rl,Gl=new _h,Vl=new Il,Do=[],Uo=[],Io=new Float32Array(16),No=new Float32Array(9),Fo=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Do[r];if(s===void 0&&(s=new Float32Array(r),Do[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function os(i,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Fo.set(n),i.uniformMatrix2fv(this.addr,!1,Fo),pt(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;No.set(n),i.uniformMatrix3fv(this.addr,!1,No),pt(t,n)}}function Vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Io.set(n),i.uniformMatrix4fv(this.addr,!1,Io),pt(t,n)}}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function $f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?zl:Bl;t.setTexture2D(e||s,r)}function Qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gl,r)}function Jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vl,r)}function ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hl,r)}function tp(i){switch(i){case 5126:return Ff;case 35664:return Of;case 35665:return Bf;case 35666:return zf;case 35674:return Hf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return kf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return jf;case 36295:return Zf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(i,e){i.uniform1fv(this.addr,e)}function ip(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function rp(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function sp(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function ap(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function op(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lp(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cp(i,e){i.uniform1iv(this.addr,e)}function hp(i,e){i.uniform2iv(this.addr,e)}function up(i,e){i.uniform3iv(this.addr,e)}function dp(i,e){i.uniform4iv(this.addr,e)}function fp(i,e){i.uniform1uiv(this.addr,e)}function pp(i,e){i.uniform2uiv(this.addr,e)}function mp(i,e){i.uniform3uiv(this.addr,e)}function gp(i,e){i.uniform4uiv(this.addr,e)}function _p(i,e,t){const n=this.cache,r=e.length,s=os(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Bl,s[a])}function vp(i,e,t){const n=this.cache,r=e.length,s=os(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gl,s[a])}function xp(i,e,t){const n=this.cache,r=e.length,s=os(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vl,s[a])}function Mp(i,e,t){const n=this.cache,r=e.length,s=os(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hl,s[a])}function Sp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Mp}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tp(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Hs=/(\w+)(\])?(\[|\.)?/g;function Oo(i,e){i.seq.push(e),i.map[e.id]=e}function bp(i,e,t){const n=i.name,r=n.length;for(Hs.lastIndex=0;;){const s=Hs.exec(n),a=Hs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Oo(t,c===void 0?new Ep(o,i,e):new yp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Tp(o),Oo(t,d)),t=d}}}class Yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);bp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Bo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ap=37297;let wp=0;function Rp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Cp(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Qr&&t===$r?n="LinearDisplayP3ToLinearSRGB":e===$r&&t===Qr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case rs:return[n,"LinearTransferOETF"];case Et:case ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rp(i.getShaderSource(e),a)}else return r}function Pp(i,e){const t=Cp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lp(i,e){let t;switch(e){case wc:t="Linear";break;case Rc:t="Reinhard";break;case Cc:t="OptimizedCineon";break;case Pc:t="ACESFilmic";break;case Lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function Up(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ki(i){return i!==""}function Ho(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Go(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(i){return i.replace(Np,Op)}const Fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Op(i,e){let t=Te[e];if(t===void 0){const n=Fp.get(e);if(n!==void 0)t=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ta(t)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(i){return i.replace(Bp,zp)}function zp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ko(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ii:e="ENVMAP_TYPE_CUBE";break;case is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case bc:e="ENVMAP_BLENDING_MIX";break;case Ac:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hp(t),c=Gp(t),h=Vp(t),d=kp(t),f=Wp(t),m=t.isWebGL2?"":Dp(t),g=Up(s),_=r.createProgram();let p,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),u.length>0&&(u+=`
`)):(p=[ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),u=[m,ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Te.tonemapping_pars_fragment:"",t.toneMapping!==Un?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=ta(a),a=Ho(a,t),a=Go(a,t),o=ta(o),o=Ho(o,t),o=Go(o,t),a=Vo(a),o=Vo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=S+p+a,y=S+u+o,T=Bo(r,r.VERTEX_SHADER,v),A=Bo(r,r.FRAGMENT_SHADER,y);r.attachShader(_,T),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(k){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),K=r.getShaderInfoLog(T).trim(),L=r.getShaderInfoLog(A).trim();let N=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,A);else{const V=zo(r,T,"vertex"),ee=zo(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+V+`
`+ee)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(K===""||L==="")&&(q=!1);q&&(k.diagnostics={runnable:N,programLog:B,vertexShader:{log:K,prefix:p},fragmentShader:{log:L,prefix:u}})}r.deleteShader(T),r.deleteShader(A),I=new Yr(r,_),x=Ip(r,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,Ap)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let qp=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=qp++,this.code=e,this.usedTimes=0}}function Zp(i,e,t,n,r,s,a){const o=new fa,l=new Yp,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,b,k,B,K){const L=B.fog,N=K.geometry,q=x.isMeshStandardMaterial?B.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),ee=V&&V.mapping===is?V.image.height:null,Y=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=j!==void 0?j.length:0;let ae=0;N.morphAttributes.position!==void 0&&(ae=1),N.morphAttributes.normal!==void 0&&(ae=2),N.morphAttributes.color!==void 0&&(ae=3);let W,$,de,xe;if(Y){const Dt=cn[Y];W=Dt.vertexShader,$=Dt.fragmentShader}else W=x.vertexShader,$=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),xe=l.getFragmentShaderID(x);const Se=i.getRenderTarget(),Ie=K.isInstancedMesh===!0,Le=K.isBatchedMesh===!0,Ce=!!x.map,Fe=!!x.matcap,F=!!V,mt=!!x.aoMap,Ee=!!x.lightMap,ze=!!x.bumpMap,Pe=!!x.normalMap,Qe=!!x.displacementMap,Oe=!!x.emissiveMap,De=!!x.metalnessMap,Xe=!!x.roughnessMap,ht=x.anisotropy>0,ut=x.clearcoat>0,w=x.iridescence>0,M=x.sheen>0,O=x.transmission>0,te=ht&&!!x.anisotropyMap,J=ut&&!!x.clearcoatMap,ne=ut&&!!x.clearcoatNormalMap,_e=ut&&!!x.clearcoatRoughnessMap,oe=w&&!!x.iridescenceMap,he=w&&!!x.iridescenceThicknessMap,P=M&&!!x.sheenColorMap,se=M&&!!x.sheenRoughnessMap,Z=!!x.specularMap,Ae=!!x.specularColorMap,ve=!!x.specularIntensityMap,be=O&&!!x.transmissionMap,ge=O&&!!x.thicknessMap,me=!!x.gradientMap,Ge=!!x.alphaMap,D=x.alphaTest>0,ce=!!x.alphaHash,Q=!!x.extensions,X=!!N.attributes.uv1,ie=!!N.attributes.uv2,ye=!!N.attributes.uv3;let Ve=Un;return x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ve=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:$,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Le,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Mn,map:Ce,matcap:Fe,envMap:F,envMapMode:F&&V.mapping,envMapCubeUVHeight:ee,aoMap:mt,lightMap:Ee,bumpMap:ze,normalMap:Pe,displacementMap:f&&Qe,emissiveMap:Oe,normalMapObjectSpace:Pe&&x.normalMapType===Wc,normalMapTangentSpace:Pe&&x.normalMapType===kc,metalnessMap:De,roughnessMap:Xe,anisotropy:ht,anisotropyMap:te,clearcoat:ut,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,iridescence:w,iridescenceMap:oe,iridescenceThicknessMap:he,sheen:M,sheenColorMap:P,sheenRoughnessMap:se,specularMap:Z,specularColorMap:Ae,specularIntensityMap:ve,transmission:O,transmissionMap:be,thicknessMap:ge,gradientMap:me,opaque:x.transparent===!1&&x.blending===wi,alphaMap:Ge,alphaTest:D,alphaHash:ce,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:mt&&_(x.aoMap.channel),lightMapUv:Ee&&_(x.lightMap.channel),bumpMapUv:ze&&_(x.bumpMap.channel),normalMapUv:Pe&&_(x.normalMap.channel),displacementMapUv:Qe&&_(x.displacementMap.channel),emissiveMapUv:Oe&&_(x.emissiveMap.channel),metalnessMapUv:De&&_(x.metalnessMap.channel),roughnessMapUv:Xe&&_(x.roughnessMap.channel),anisotropyMapUv:te&&_(x.anisotropyMap.channel),clearcoatMapUv:J&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&_(x.sheenRoughnessMap.channel),specularMapUv:Z&&_(x.specularMap.channel),specularColorMapUv:Ae&&_(x.specularColorMap.channel),specularIntensityMapUv:ve&&_(x.specularIntensityMap.channel),transmissionMapUv:be&&_(x.transmissionMap.channel),thicknessMapUv:ge&&_(x.thicknessMap.channel),alphaMapUv:Ge&&_(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Pe||ht),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:X,vertexUv2s:ie,vertexUv3s:ye,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(Ce||Ge),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vt,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Q&&x.extensions.derivatives===!0,extensionFragDepth:Q&&x.extensions.fragDepth===!0,extensionDrawBuffers:Q&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)b.push(k),b.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(S(b,x),v(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function S(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function y(x){const b=g[x.type];let k;if(b){const B=cn[b];k=Ph.clone(B.uniforms)}else k=x.uniforms;return k}function T(x,b){let k;for(let B=0,K=c.length;B<K;B++){const L=c[B];if(L.cacheKey===b){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Xp(i,b,x,s),c.push(k)),k}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:I}}function Kp(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function $p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,m,g,_,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function o(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||$p),n.length>1&&n.sort(f||Wo),r.length>1&&r.sort(f||Wo)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Qp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Xo,i.set(n,[a])):r>=s.length?(a=new Xo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new qe};break;case"SpotLight":t={position:new C,direction:new C,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tm=0;function nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function im(i,e){const t=new Jp,n=em(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);const s=new C,a=new ct,o=new ct;function l(h,d){let f=0,m=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let _=0,p=0,u=0,S=0,v=0,y=0,T=0,A=0,R=0,I=0,x=0;h.sort(nm);const b=d===!0?Math.PI:1;for(let B=0,K=h.length;B<K;B++){const L=h[B],N=L.color,q=L.intensity,V=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*q*b,m+=N.g*q*b,g+=N.b*q*b;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],q);x++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const j=L.shadow,re=n.get(L);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.directionalShadow[_]=re,r.directionalShadowMap[_]=ee,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(N).multiplyScalar(q*b),Y.distance=V,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[u]=Y;const j=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,j.updateMatrices(L),L.castShadow&&I++),r.spotLightMatrix[u]=j.matrix,L.castShadow){const re=n.get(L);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.spotShadow[u]=re,r.spotShadowMap[u]=ee,A++}u++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(N).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[S]=Y,S++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,re=n.get(L);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=L.shadow.matrix,T++}r.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(q*b),Y.groundColor.copy(L.groundColor).multiplyScalar(q*b),r.hemi[v]=Y,v++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const k=r.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==S||k.hemiLength!==v||k.numDirectionalShadows!==y||k.numPointShadows!==T||k.numSpotShadows!==A||k.numSpotMaps!==R||k.numLightProbes!==x)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=S,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+R-I,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=x,k.directionalLength=_,k.pointLength=p,k.spotLength=u,k.rectAreaLength=S,k.hemiLength=v,k.numDirectionalShadows=y,k.numPointShadows=T,k.numSpotShadows=A,k.numSpotMaps=R,k.numLightProbes=x,r.version=tm++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const y=h[S];if(y.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),f++}else if(y.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),g++}else if(y.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),o.identity(),a.copy(y.matrixWorld),a.premultiply(u),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function qo(i,e){const t=new im(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rm(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new qo(i,e),t.set(s,[l])):a>=o.length?(l=new qo(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class sm extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class am extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(i,e,t){let n=new Nl;const r=new Re,s=new Re,a=new Tt,o=new sm({depthPacking:Vc}),l=new am,c={},h=t.maxTextureSize,d={[Nn]:Bt,[Bt]:Nn,[Vt]:Vt},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:om,fragmentShader:lm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ue(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let u=this.type;this.render=function(T,A,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=u!==gn&&this.type===gn,K=u===gn&&this.type!==gn;for(let L=0,N=T.length;L<N;L++){const q=T[L],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ee=V.getFrameExtents();if(r.multiply(ee),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||B===!0||K===!0){const j=this.type!==gn?{minFilter:Ot,magFilter:Ot}:{};V.map!==null&&V.map.dispose(),V.map=new ei(r.x,r.y,j),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Y=V.getViewportCount();for(let j=0;j<Y;j++){const re=V.getViewport(j);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(a),V.updateMatrices(q,j),n=V.getFrustum(),y(A,R,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&S(V,R),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(I,x,b)};function S(T,A){const R=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,R,m,_,null)}function v(T,A,R,I){let x=null;const b=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)x=b;else if(x=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=x.uuid,B=A.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let L=K[B];L===void 0&&(L=x.clone(),K[B]=L),x=L}if(x.visible=A.visible,x.wireframe=A.wireframe,I===gn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=R}return x}function y(T,A,R,I,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const B=e.update(T),K=T.material;if(Array.isArray(K)){const L=B.groups;for(let N=0,q=L.length;N<q;N++){const V=L[N],ee=K[V.materialIndex];if(ee&&ee.visible){const Y=v(T,ee,I,x);T.onBeforeShadow(i,T,A,R,B,Y,V),i.renderBufferDirect(R,null,B,Y,T,V),T.onAfterShadow(i,T,A,R,B,Y,V)}}}else if(K.visible){const L=v(T,K,I,x);T.onBeforeShadow(i,T,A,R,B,L,null),i.renderBufferDirect(R,null,B,L,T,null),T.onAfterShadow(i,T,A,R,B,L,null)}}const k=T.children;for(let B=0,K=k.length;B<K;B++)y(k[B],A,R,I,x)}}function hm(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const ce=new Tt;let Q=null;const X=new Tt(0,0,0,0);return{setMask:function(ie){Q!==ie&&!D&&(i.colorMask(ie,ie,ie,ie),Q=ie)},setLocked:function(ie){D=ie},setClear:function(ie,ye,Ve,gt,Dt){Dt===!0&&(ie*=gt,ye*=gt,Ve*=gt),ce.set(ie,ye,Ve,gt),X.equals(ce)===!1&&(i.clearColor(ie,ye,Ve,gt),X.copy(ce))},reset:function(){D=!1,Q=null,X.set(-1,0,0,0)}}}function s(){let D=!1,ce=null,Q=null,X=null;return{setTest:function(ie){ie?Le(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ie){ce!==ie&&!D&&(i.depthMask(ie),ce=ie)},setFunc:function(ie){if(Q!==ie){switch(ie){case vc:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Sc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ie}},setLocked:function(ie){D=ie},setClear:function(ie){X!==ie&&(i.clearDepth(ie),X=ie)},reset:function(){D=!1,ce=null,Q=null,X=null}}}function a(){let D=!1,ce=null,Q=null,X=null,ie=null,ye=null,Ve=null,gt=null,Dt=null;return{setTest:function($e){D||($e?Le(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function($e){ce!==$e&&!D&&(i.stencilMask($e),ce=$e)},setFunc:function($e,Ut,on){(Q!==$e||X!==Ut||ie!==on)&&(i.stencilFunc($e,Ut,on),Q=$e,X=Ut,ie=on)},setOp:function($e,Ut,on){(ye!==$e||Ve!==Ut||gt!==on)&&(i.stencilOp($e,Ut,on),ye=$e,Ve=Ut,gt=on)},setLocked:function($e){D=$e},setClear:function($e){Dt!==$e&&(i.clearStencil($e),Dt=$e)},reset:function(){D=!1,ce=null,Q=null,X=null,ie=null,ye=null,Ve=null,gt=null,Dt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,S=null,v=null,y=null,T=null,A=null,R=null,I=null,x=new qe(0,0,0),b=0,k=!1,B=null,K=null,L=null,N=null,q=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),ee=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ee=Y>=2);let re=null,ae={};const W=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),de=new Tt().fromArray(W),xe=new Tt().fromArray($);function Se(D,ce,Q,X){const ie=new Uint8Array(4),ye=i.createTexture();i.bindTexture(D,ye),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Q;Ve++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(ce+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return ye}const Ie={};Ie[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(Zr),Oe(!1),De(Aa),Le(i.CULL_FACE),Pe(Dn);function Le(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Ce(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Fe(D,ce){return m[D]!==ce?(i.bindFramebuffer(D,ce),m[D]=ce,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function F(D,ce){let Q=_,X=!1;if(D)if(Q=g.get(ce),Q===void 0&&(Q=[],g.set(ce,Q)),D.isWebGLMultipleRenderTargets){const ie=D.texture;if(Q.length!==ie.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ve=ie.length;ye<Ve;ye++)Q[ye]=i.COLOR_ATTACHMENT0+ye;Q.length=ie.length,X=!0}}else Q[0]!==i.COLOR_ATTACHMENT0&&(Q[0]=i.COLOR_ATTACHMENT0,X=!0);else Q[0]!==i.BACK&&(Q[0]=i.BACK,X=!0);X&&(t.isWebGL2?i.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function mt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const Ee={[Yn]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[rc]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[Pa]=i.MIN,Ee[La]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Pa]=D.MIN_EXT,Ee[La]=D.MAX_EXT)}const ze={[sc]:i.ZERO,[ac]:i.ONE,[oc]:i.SRC_COLOR,[Ys]:i.SRC_ALPHA,[fc]:i.SRC_ALPHA_SATURATE,[uc]:i.DST_COLOR,[cc]:i.DST_ALPHA,[lc]:i.ONE_MINUS_SRC_COLOR,[js]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[pc]:i.CONSTANT_COLOR,[mc]:i.ONE_MINUS_CONSTANT_COLOR,[gc]:i.CONSTANT_ALPHA,[_c]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(D,ce,Q,X,ie,ye,Ve,gt,Dt,$e){if(D===Dn){u===!0&&(Ce(i.BLEND),u=!1);return}if(u===!1&&(Le(i.BLEND),u=!0),D!==nc){if(D!==S||$e!==k){if((v!==Yn||A!==Yn)&&(i.blendEquation(i.FUNC_ADD),v=Yn,A=Yn),$e)switch(D){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,R=null,I=null,x.set(0,0,0),b=0,S=D,k=$e}return}ie=ie||ce,ye=ye||Q,Ve=Ve||X,(ce!==v||ie!==A)&&(i.blendEquationSeparate(Ee[ce],Ee[ie]),v=ce,A=ie),(Q!==y||X!==T||ye!==R||Ve!==I)&&(i.blendFuncSeparate(ze[Q],ze[X],ze[ye],ze[Ve]),y=Q,T=X,R=ye,I=Ve),(gt.equals(x)===!1||Dt!==b)&&(i.blendColor(gt.r,gt.g,gt.b,Dt),x.copy(gt),b=Dt),S=D,k=!1}function Qe(D,ce){D.side===Vt?Ce(i.CULL_FACE):Le(i.CULL_FACE);let Q=D.side===Bt;ce&&(Q=!Q),Oe(Q),D.blending===wi&&D.transparent===!1?Pe(Dn):Pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const X=D.stencilWrite;c.setTest(X),X&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function De(D){D!==Jl?(Le(i.CULL_FACE),D!==K&&(D===Aa?i.cullFace(i.BACK):D===ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),K=D}function Xe(D){D!==L&&(ee&&i.lineWidth(D),L=D)}function ht(D,ce,Q){D?(Le(i.POLYGON_OFFSET_FILL),(N!==ce||q!==Q)&&(i.polygonOffset(ce,Q),N=ce,q=Q)):Ce(i.POLYGON_OFFSET_FILL)}function ut(D){D?Le(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+V-1),re!==D&&(i.activeTexture(D),re=D)}function M(D,ce,Q){Q===void 0&&(re===null?Q=i.TEXTURE0+V-1:Q=re);let X=ae[Q];X===void 0&&(X={type:void 0,texture:void 0},ae[Q]=X),(X.type!==D||X.texture!==ce)&&(re!==Q&&(i.activeTexture(Q),re=Q),i.bindTexture(D,ce||Ie[D]),X.type=D,X.texture=ce)}function O(){const D=ae[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function be(D){xe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function ge(D,ce){let Q=d.get(ce);Q===void 0&&(Q=new WeakMap,d.set(ce,Q));let X=Q.get(D);X===void 0&&(X=i.getUniformBlockIndex(ce,D.name),Q.set(D,X))}function me(D,ce){const X=d.get(ce).get(D);h.get(ce)!==X&&(i.uniformBlockBinding(ce,X,D.__bindingPointIndex),h.set(ce,X))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,ae={},m={},g=new WeakMap,_=[],p=null,u=!1,S=null,v=null,y=null,T=null,A=null,R=null,I=null,x=new qe(0,0,0),b=0,k=!1,B=null,K=null,L=null,N=null,q=null,de.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:Ce,bindFramebuffer:Fe,drawBuffers:F,useProgram:mt,setBlending:Pe,setMaterial:Qe,setFlipSided:Oe,setCullFace:De,setLineWidth:Xe,setPolygonOffset:ht,setScissorTest:ut,activeTexture:w,bindTexture:M,unbindTexture:O,compressedTexImage2D:te,compressedTexImage3D:J,texImage2D:Z,texImage3D:Ae,updateUBOMapping:ge,uniformBlockBinding:me,texStorage2D:P,texStorage3D:se,texSubImage2D:ne,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:ve,viewport:be,reset:Ge}}function um(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,M){return u?new OffscreenCanvas(w,M):ts("canvas")}function v(w,M,O,te){let J=1;if((w.width>te||w.height>te)&&(J=te/Math.max(w.width,w.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=M?es:Math.floor,_e=ne(J*w.width),oe=ne(J*w.height);_===void 0&&(_=S(_e,oe));const he=O?S(_e,oe):_;return he.width=_e,he.height=oe,he.getContext("2d").drawImage(w,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+oe+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return ea(w.width)&&ea(w.height)}function T(w){return o?!1:w.wrapS!==sn||w.wrapT!==sn||w.minFilter!==Ot&&w.minFilter!==qt}function A(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ot&&w.minFilter!==qt}function R(w){i.generateMipmap(w)}function I(w,M,O,te,J=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=M;if(M===i.RED&&(O===i.FLOAT&&(ne=i.R32F),O===i.HALF_FLOAT&&(ne=i.R16F),O===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ne=i.R8UI),O===i.UNSIGNED_SHORT&&(ne=i.R16UI),O===i.UNSIGNED_INT&&(ne=i.R32UI),O===i.BYTE&&(ne=i.R8I),O===i.SHORT&&(ne=i.R16I),O===i.INT&&(ne=i.R32I)),M===i.RG&&(O===i.FLOAT&&(ne=i.RG32F),O===i.HALF_FLOAT&&(ne=i.RG16F),O===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RGBA){const _e=J?Kr:Ze.getTransfer(te);O===i.FLOAT&&(ne=i.RGBA32F),O===i.HALF_FLOAT&&(ne=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ne=_e===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(w,M,O){return A(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function b(w){return w===Ot||w===Da||w===fs?i.NEAREST:i.LINEAR}function k(w){const M=w.target;M.removeEventListener("dispose",k),K(M),M.isVideoTexture&&g.delete(M)}function B(w){const M=w.target;M.removeEventListener("dispose",B),N(M)}function K(w){const M=n.get(w);if(M.__webglInit===void 0)return;const O=w.source,te=p.get(O);if(te){const J=te[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(w),Object.keys(te).length===0&&p.delete(O)}n.remove(w)}function L(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const O=w.source,te=p.get(O);delete te[M.__cacheKey],a.memory.textures--}function N(w){const M=w.texture,O=n.get(w),te=n.get(M);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let ne=0;ne<O.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(O.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)i.deleteFramebuffer(O.__webglFramebuffer[J]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,ne=M.length;J<ne;J++){const _e=n.get(M[J]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(w)}let q=0;function V(){q=0}function ee(){const w=q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),q+=1,w}function Y(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function j(w,M){const O=n.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(O,w,M);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function re(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Le(O,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function ae(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Le(O,w,M);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function W(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Ce(O,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const $={[$s]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},de={[Ot]:i.NEAREST,[Da]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Dc]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},xe={[Xc]:i.NEVER,[$c]:i.ALWAYS,[qc]:i.LESS,[Tl]:i.LEQUAL,[Yc]:i.EQUAL,[Kc]:i.GEQUAL,[jc]:i.GREATER,[Zc]:i.NOTEQUAL};function Se(w,M,O){if(O?(i.texParameteri(w,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,$[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,de[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,de[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==sn||M.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,b(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Ot&&M.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ot||M.minFilter!==fs&&M.minFilter!==ir||M.type===Ln&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===rr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ie(w,M){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",k));const te=M.source;let J=p.get(te);J===void 0&&(J={},p.set(te,J));const ne=Y(M);if(ne!==w.__cacheKey){J[ne]===void 0&&(J[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[ne].usedTimes++;const _e=J[w.__cacheKey];_e!==void 0&&(J[w.__cacheKey].usedTimes--,_e.usedTimes===0&&L(M)),w.__cacheKey=ne,w.__webglTexture=J[ne].texture}return O}function Le(w,M,O){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);const J=Ie(w,M),ne=M.source;t.bindTexture(te,w.__webglTexture,i.TEXTURE0+O);const _e=n.get(ne);if(ne.version!==_e.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const oe=Ze.getPrimaries(Ze.workingColorSpace),he=M.colorSpace===jt?null:Ze.getPrimaries(M.colorSpace),P=M.colorSpace===jt||oe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const se=T(M)&&y(M.image)===!1;let Z=v(M.image,se,!1,h);Z=ut(M,Z);const Ae=y(Z)||o,ve=s.convert(M.format,M.colorSpace);let be=s.convert(M.type),ge=I(M.internalFormat,ve,be,M.colorSpace,M.isVideoTexture);Se(te,M,Ae);let me;const Ge=M.mipmaps,D=o&&M.isVideoTexture!==!0&&ge!==El,ce=_e.__version===void 0||J===!0,Q=x(M,Z,Ae);if(M.isDepthTexture)ge=i.DEPTH_COMPONENT,o?M.type===Ln?ge=i.DEPTH_COMPONENT32F:M.type===Pn?ge=i.DEPTH_COMPONENT24:M.type===$n?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:M.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Qn&&ge===i.DEPTH_COMPONENT&&M.type!==ha&&M.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Pn,be=s.convert(M.type)),M.format===Ni&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,M.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$n,be=s.convert(M.type))),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,ge,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ge,Z.width,Z.height,0,ve,be,null));else if(M.isDataTexture)if(Ge.length>0&&Ae){D&&ce&&t.texStorage2D(i.TEXTURE_2D,Q,ge,Ge[0].width,Ge[0].height);for(let X=0,ie=Ge.length;X<ie;X++)me=Ge[X],D?t.texSubImage2D(i.TEXTURE_2D,X,0,0,me.width,me.height,ve,be,me.data):t.texImage2D(i.TEXTURE_2D,X,ge,me.width,me.height,0,ve,be,me.data);M.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,Q,ge,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ve,be,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ge,Z.width,Z.height,0,ve,be,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,ge,Ge[0].width,Ge[0].height,Z.depth);for(let X=0,ie=Ge.length;X<ie;X++)me=Ge[X],M.format!==an?ve!==null?D?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,Z.depth,ve,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ge,me.width,me.height,Z.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,Z.depth,ve,be,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ge,me.width,me.height,Z.depth,0,ve,be,me.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,Q,ge,Ge[0].width,Ge[0].height);for(let X=0,ie=Ge.length;X<ie;X++)me=Ge[X],M.format!==an?ve!==null?D?t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(i.TEXTURE_2D,X,0,0,me.width,me.height,ve,be,me.data):t.texImage2D(i.TEXTURE_2D,X,ge,me.width,me.height,0,ve,be,me.data)}else if(M.isDataArrayTexture)D?(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ve,be,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,ve,be,Z.data);else if(M.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,Q,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ve,be,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,ve,be,Z.data);else if(M.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,Q,ge,Z.width,Z.height);else{let X=Z.width,ie=Z.height;for(let ye=0;ye<Q;ye++)t.texImage2D(i.TEXTURE_2D,ye,ge,X,ie,0,ve,be,null),X>>=1,ie>>=1}}else if(Ge.length>0&&Ae){D&&ce&&t.texStorage2D(i.TEXTURE_2D,Q,ge,Ge[0].width,Ge[0].height);for(let X=0,ie=Ge.length;X<ie;X++)me=Ge[X],D?t.texSubImage2D(i.TEXTURE_2D,X,0,0,ve,be,me):t.texImage2D(i.TEXTURE_2D,X,ge,ve,be,me);M.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,Q,ge,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,be,Z)):t.texImage2D(i.TEXTURE_2D,0,ge,ve,be,Z);A(M,Ae)&&R(te),_e.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ce(w,M,O){if(M.image.length!==6)return;const te=Ie(w,M),J=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const ne=n.get(J);if(J.version!==ne.__version||te===!0){t.activeTexture(i.TEXTURE0+O);const _e=Ze.getPrimaries(Ze.workingColorSpace),oe=M.colorSpace===jt?null:Ze.getPrimaries(M.colorSpace),he=M.colorSpace===jt||_e===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const P=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let X=0;X<6;X++)!P&&!se?Z[X]=v(M.image[X],!1,!0,c):Z[X]=se?M.image[X].image:M.image[X],Z[X]=ut(M,Z[X]);const Ae=Z[0],ve=y(Ae)||o,be=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),me=I(M.internalFormat,be,ge,M.colorSpace),Ge=o&&M.isVideoTexture!==!0,D=ne.__version===void 0||te===!0;let ce=x(M,Ae,ve);Se(i.TEXTURE_CUBE_MAP,M,ve);let Q;if(P){Ge&&D&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,me,Ae.width,Ae.height);for(let X=0;X<6;X++){Q=Z[X].mipmaps;for(let ie=0;ie<Q.length;ie++){const ye=Q[ie];M.format!==an?be!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,ye.width,ye.height,be,ge,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,me,ye.width,ye.height,0,be,ge,ye.data)}}}else{Q=M.mipmaps,Ge&&D&&(Q.length>0&&ce++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,me,Z[0].width,Z[0].height));for(let X=0;X<6;X++)if(se){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Z[X].width,Z[X].height,be,ge,Z[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,me,Z[X].width,Z[X].height,0,be,ge,Z[X].data);for(let ie=0;ie<Q.length;ie++){const Ve=Q[ie].image[X].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ve.width,Ve.height,be,ge,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,me,Ve.width,Ve.height,0,be,ge,Ve.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,be,ge,Z[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,me,be,ge,Z[X]);for(let ie=0;ie<Q.length;ie++){const ye=Q[ie];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,be,ge,ye.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,me,be,ge,ye.image[X])}}}A(M,ve)&&R(i.TEXTURE_CUBE_MAP),ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Fe(w,M,O,te,J,ne){const _e=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),he=I(O.internalFormat,_e,oe,O.colorSpace);if(!n.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>ne),Z=Math.max(1,M.height>>ne);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,he,se,Z,M.depth,0,_e,oe,null):t.texImage2D(J,ne,he,se,Z,0,_e,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Xe(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,n.get(O).__webglTexture,0,De(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,n.get(O).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(w,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||Xe(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===Ln?te=i.DEPTH_COMPONENT32F:J.type===Pn&&(te=i.DEPTH_COMPONENT24));const ne=De(M);Xe(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,te,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,te,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const te=De(M);O&&Xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):Xe(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<te.length;J++){const ne=te[J],_e=s.convert(ne.format,ne.colorSpace),oe=s.convert(ne.type),he=I(ne.internalFormat,_e,oe,ne.colorSpace),P=De(M);O&&Xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,he,M.width,M.height):Xe(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,he,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,he,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,J=De(M);if(M.depthTexture.format===Qn)Xe(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===Ni)Xe(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const M=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");mt(M.__webglFramebuffer,w)}else if(O){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),F(M.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),F(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(w,M,O){const te=n.get(w);M!==void 0&&Fe(te.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ee(w)}function Pe(w){const M=w.texture,O=n.get(w),te=n.get(M);w.addEventListener("dispose",B),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,a.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,_e=y(w)||o;if(J){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let he=0;he<M.mipmaps.length;he++)O.__webglFramebuffer[oe][he]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ne)if(r.drawBuffers){const oe=w.texture;for(let he=0,P=oe.length;he<P;he++){const se=n.get(oe[he]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Xe(w)===!1){const oe=ne?M:[M];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const P=oe[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const se=s.convert(P.format,P.colorSpace),Z=s.convert(P.type),Ae=I(P.internalFormat,se,Z,P.colorSpace,w.isXRRenderTarget===!0),ve=De(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),F(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Se(i.TEXTURE_CUBE_MAP,M,_e);for(let oe=0;oe<6;oe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Fe(O.__webglFramebuffer[oe][he],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Fe(O.__webglFramebuffer[oe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(M,_e)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const oe=w.texture;for(let he=0,P=oe.length;he<P;he++){const se=oe[he],Z=n.get(se);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Se(i.TEXTURE_2D,se,_e),Fe(O.__webglFramebuffer,w,se,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),A(se,_e)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?oe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,te.__webglTexture),Se(oe,M,_e),o&&M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Fe(O.__webglFramebuffer[he],w,M,i.COLOR_ATTACHMENT0,oe,he);else Fe(O.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,oe,0);A(M,_e)&&R(oe),t.unbindTexture()}w.depthBuffer&&Ee(w)}function Qe(w){const M=y(w)||o,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,J=O.length;te<J;te++){const ne=O[te];if(A(ne,M)){const _e=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(ne).__webglTexture;t.bindTexture(_e,oe),R(_e),t.unbindTexture()}}}function Oe(w){if(o&&w.samples>0&&Xe(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,te=w.height;let J=i.COLOR_BUFFER_BIT;const ne=[],_e=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(w),he=w.isWebGLMultipleRenderTargets===!0;if(he)for(let P=0;P<M.length;P++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let P=0;P<M.length;P++){ne.push(i.COLOR_ATTACHMENT0+P),w.depthBuffer&&ne.push(_e);const se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(se===!1&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[P]),se===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),he){const Z=n.get(M[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,te,0,0,O,te,J,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let P=0;P<M.length;P++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,oe.__webglColorRenderbuffer[P]);const se=n.get(M[P]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function De(w){return Math.min(d,w.samples)}function Xe(w){const M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(w){const M=a.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function ut(w,M){const O=w.colorSpace,te=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Js||O!==Mn&&O!==jt&&(Ze.getTransfer(O)===Je?o===!1?e.has("EXT_sRGB")===!0&&te===an?(w.format=Js,w.minFilter=qt,w.generateMipmaps=!1):M=Al.sRGBToLinear(M):(te!==an||J!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=ee,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=W,this.rebindTextures=ze,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Xe}function dm(i,e,t){const n=t.isWebGL2;function r(s,a=jt){let o;const l=Ze.getTransfer(a);if(s===In)return i.UNSIGNED_BYTE;if(s===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(s===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Uc)return i.BYTE;if(s===Ic)return i.SHORT;if(s===ha)return i.UNSIGNED_SHORT;if(s===gl)return i.INT;if(s===Pn)return i.UNSIGNED_INT;if(s===Ln)return i.FLOAT;if(s===rr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Nc)return i.ALPHA;if(s===an)return i.RGBA;if(s===Fc)return i.LUMINANCE;if(s===Oc)return i.LUMINANCE_ALPHA;if(s===Qn)return i.DEPTH_COMPONENT;if(s===Ni)return i.DEPTH_STENCIL;if(s===Js)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Bc)return i.RED;if(s===xl)return i.RED_INTEGER;if(s===zc)return i.RG;if(s===Ml)return i.RG_INTEGER;if(s===Sl)return i.RGBA_INTEGER;if(s===ps||s===ms||s===gs||s===_s)if(l===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_s)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ua||s===Ia||s===Na||s===Fa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ua)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Na)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===El)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oa||s===Ba)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Oa)return l===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ba)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===za||s===Ha||s===Ga||s===Va||s===ka||s===Wa||s===Xa||s===qa||s===Ya||s===ja||s===Za||s===Ka||s===$a||s===Qa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===za)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ha)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ga)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Va)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ka)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ya)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ja)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Za)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ka)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$a)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qa)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vs||s===Ja||s===eo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===vs)return l===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ja)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===eo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hc||s===to||s===no||s===io)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===vs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===to)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===no)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===io)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$n?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class fm extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gr extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mm extends ni{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const S=[],v=[],y=new Re;let T=null;const A=new Yt;A.layers.enable(1),A.viewport=new Tt;const R=new Yt;R.layers.enable(2),R.viewport=new Tt;const I=[A,R],x=new fm;x.layers.enable(1),x.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=S[W];return $===void 0&&($=new Gs,S[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=S[W];return $===void 0&&($=new Gs,S[W]=$),$.getGripSpace()},this.getHand=function(W){let $=S[W];return $===void 0&&($=new Gs,S[W]=$),$.getHandSpace()};function B(W){const $=v.indexOf(W.inputSource);if($===-1)return;const de=S[$];de!==void 0&&(de.update(W.inputSource,W.frame,c||a),de.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let W=0;W<S.length;W++){const $=v[W];$!==null&&(v[W]=null,S[W].disconnect($))}b=null,k=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new ei(m.framebufferWidth,m.framebufferHeight,{format:an,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,de=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Ni:Qn,de=_.stencil?$n:Pn);const Se={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new ei(f.textureWidth,f.textureHeight,{format:an,type:In,depthTexture:new Ol(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(u);Ie.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(W){for(let $=0;$<W.removed.length;$++){const de=W.removed[$],xe=v.indexOf(de);xe>=0&&(v[xe]=null,S[xe].disconnect(de))}for(let $=0;$<W.added.length;$++){const de=W.added[$];let xe=v.indexOf(de);if(xe===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=v.length){v.push(de),xe=Ie;break}else if(v[Ie]===null){v[Ie]=de,xe=Ie;break}if(xe===-1)break}const Se=S[xe];Se&&Se.connect(de)}}const N=new C,q=new C;function V(W,$,de){N.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const xe=N.distanceTo(q),Se=$.projectionMatrix.elements,Ie=de.projectionMatrix.elements,Le=Se[14]/(Se[10]-1),Ce=Se[14]/(Se[10]+1),Fe=(Se[9]+1)/Se[5],F=(Se[9]-1)/Se[5],mt=(Se[8]-1)/Se[0],Ee=(Ie[8]+1)/Ie[0],ze=Le*mt,Pe=Le*Ee,Qe=xe/(-mt+Ee),Oe=Qe*-mt;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Oe),W.translateZ(Qe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const De=Le+Qe,Xe=Ce+Qe,ht=ze-Oe,ut=Pe+(xe-Oe),w=Fe*Ce/Xe*De,M=F*Ce/Xe*De;W.projectionMatrix.makePerspective(ht,ut,w,M,De,Xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ee(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.near=R.near=A.near=W.near,x.far=R.far=A.far=W.far,(b!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,k=x.far);const $=W.parent,de=x.cameras;ee(x,$);for(let xe=0;xe<de.length;xe++)ee(de[xe],$);de.length===2?V(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),Y(W,x,$)};function Y(W,$,de){de===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=sr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let j=null;function re(W,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let xe=!1;de.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let Se=0;Se<de.length;Se++){const Ie=de[Se];let Le=null;if(m!==null)Le=m.getViewport(Ie);else{const Fe=d.getViewSubImage(f,Ie);Le=Fe.viewport,Se===0&&(e.setRenderTargetTextures(u,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(u))}let Ce=I[Se];Ce===void 0&&(Ce=new Yt,Ce.layers.enable(Se),Ce.viewport=new Tt,I[Se]=Ce),Ce.matrix.fromArray(Ie.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ie.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Le.x,Le.y,Le.width,Le.height),Se===0&&(x.matrix.copy(Ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(Ce)}}for(let de=0;de<S.length;de++){const xe=v[de],Se=S[de];xe!==null&&Se!==void 0&&Se.update(xe,$,c||a)}j&&j(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ae=new Fl;ae.setAnimationLoop(re),this.setAnimationLoop=function(W){j=W},this.dispose=function(){}}}function gm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Dl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,S,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,S,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Bt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Bt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const S=e.get(u).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,S,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const S=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _m(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=r[S.id];y===void 0&&(g(S),y=h(S),r[S.id]=y,S.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(S,T);const A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const v=d();S.__bindingPointIndex=v;const y=i.createBuffer(),T=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=r[S.id],y=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,R=y.length;A<R;A++){const I=y[A];if(m(I,A,T)===!0){const x=I.__offset,b=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let B=0;B<b.length;B++){const K=b[B],L=_(K);typeof K=="number"?(I.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,x+k,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=K.elements[0],I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=K.elements[0],I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=K.elements[0]):(K.toArray(I.__data,k),k+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,I.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,y){const T=S.value;if(y[v]===void 0){if(typeof T=="number")y[v]=T;else{const A=Array.isArray(T)?T:[T],R=[];for(let I=0;I<A.length;I++)R.push(A[I].clone());y[v]=R}return!0}else if(typeof T=="number"){if(y[v]!==T)return y[v]=T,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],R=Array.isArray(T)?T:[T];for(let I=0;I<A.length;I++){const x=A[I];if(x.equals(R[I])===!1)return x.copy(R[I]),!0}}return!1}function g(S){const v=S.uniforms;let y=0;const T=16;let A=0;for(let R=0,I=v.length;R<I;R++){const x=v[R],b={boundary:0,storage:0},k=Array.isArray(x.value)?x.value:[x.value];for(let B=0,K=k.length;B<K;B++){const L=k[B],N=_(L);b.boundary+=N.boundary,b.storage+=N.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=y,R>0){A=y%T;const B=T-A;A!==0&&B-b.boundary<0&&(y+=T-A,x.__offset=y)}y+=b.storage}return A=y%T,A>0&&(y+=T-A),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class kl{constructor(e={}){const{canvas:t=dh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let y=!1,T=0,A=0,R=null,I=-1,x=null;const b=new Tt,k=new Tt;let B=null;const K=new qe(0);let L=0,N=t.width,q=t.height,V=1,ee=null,Y=null;const j=new Tt(0,0,N,q),re=new Tt(0,0,N,q);let ae=!1;const W=new Nl;let $=!1,de=!1,xe=null;const Se=new ct,Ie=new Re,Le=new C,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return R===null?V:1}let F=n;function mt(E,U){for(let H=0;H<E.length;H++){const G=E[H],z=t.getContext(G,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ca}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),F=mt(U,E),F===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,ze,Pe,Qe,Oe,De,Xe,ht,ut,w,M,O,te,J,ne,_e,oe,he,P,se,Z,Ae,ve,be;function ge(){Ee=new Rf(F),ze=new Sf(F,Ee,e),Ee.init(ze),Ae=new dm(F,Ee,ze),Pe=new hm(F,Ee,ze),Qe=new Lf(F),Oe=new Kp,De=new um(F,Ee,Pe,Oe,ze,Ae,Qe),Xe=new yf(v),ht=new wf(v),ut=new Oh(F,ze),ve=new xf(F,Ee,ut,ze),w=new Cf(F,ut,Qe,ve),M=new Nf(F,w,ut,Qe),P=new If(F,ze,De),_e=new Ef(Oe),O=new Zp(v,Xe,ht,Ee,ze,ve,_e),te=new gm(v,Oe),J=new Qp,ne=new rm(Ee,ze),he=new vf(v,Xe,ht,Pe,M,f,l),oe=new cm(v,M,ze),be=new _m(F,Qe,ze,Pe),se=new Mf(F,Ee,Qe,ze),Z=new Pf(F,Ee,Qe,ze),Qe.programs=O.programs,v.capabilities=ze,v.extensions=Ee,v.properties=Oe,v.renderLists=J,v.shadowMap=oe,v.state=Pe,v.info=Qe}ge();const me=new mm(v,F);this.xr=me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,q,!1))},this.getSize=function(E){return E.set(N,q)},this.setSize=function(E,U,H=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,q=U,t.width=Math.floor(E*V),t.height=Math.floor(U*V),H===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(N*V,q*V).floor()},this.setDrawingBufferSize=function(E,U,H){N=E,q=U,V=H,t.width=Math.floor(E*H),t.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,U,H,G){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,H,G),Pe.viewport(b.copy(j).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,U,H,G){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,U,H,G),Pe.scissor(k.copy(re).multiplyScalar(V).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){Pe.setScissorTest(ae=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(E=!0,U=!0,H=!0){let G=0;if(E){let z=!1;if(R!==null){const pe=R.texture.format;z=pe===Sl||pe===Ml||pe===xl}if(z){const pe=R.texture.type,Me=pe===In||pe===Pn||pe===ha||pe===$n||pe===_l||pe===vl,we=he.getClearColor(),Ue=he.getClearAlpha(),He=we.r,Ne=we.g,Be=we.b;Me?(m[0]=He,m[1]=Ne,m[2]=Be,m[3]=Ue,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=He,g[1]=Ne,g[2]=Be,g[3]=Ue,F.clearBufferiv(F.COLOR,0,g))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ne.dispose(),Oe.dispose(),Xe.dispose(),ht.dispose(),M.dispose(),ve.dispose(),be.dispose(),O.dispose(),me.dispose(),me.removeEventListener("sessionstart",Dt),me.removeEventListener("sessionend",$e),xe&&(xe.dispose(),xe=null),Ut.stop()};function Ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Qe.autoReset,U=oe.enabled,H=oe.autoUpdate,G=oe.needsUpdate,z=oe.type;ge(),Qe.autoReset=E,oe.enabled=U,oe.autoUpdate=H,oe.needsUpdate=G,oe.type=z}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const U=E.target;U.removeEventListener("dispose",Q),X(U)}function X(E){ie(E),Oe.remove(E)}function ie(E){const U=Oe.get(E).programs;U!==void 0&&(U.forEach(function(H){O.releaseProgram(H)}),E.isShaderMaterial&&O.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,G,z,pe){U===null&&(U=Ce);const Me=z.isMesh&&z.matrixWorld.determinant()<0,we=Yl(E,U,H,G,z);Pe.setMaterial(G,Me);let Ue=H.index,He=1;if(G.wireframe===!0){if(Ue=w.getWireframeAttribute(H),Ue===void 0)return;He=2}const Ne=H.drawRange,Be=H.attributes.position;let st=Ne.start*He,zt=(Ne.start+Ne.count)*He;pe!==null&&(st=Math.max(st,pe.start*He),zt=Math.min(zt,(pe.start+pe.count)*He)),Ue!==null?(st=Math.max(st,0),zt=Math.min(zt,Ue.count)):Be!=null&&(st=Math.max(st,0),zt=Math.min(zt,Be.count));const _t=zt-st;if(_t<0||_t===1/0)return;ve.setup(z,G,we,H,Ue);let hn,nt=se;if(Ue!==null&&(hn=ut.get(Ue),nt=Z,nt.setIndex(hn)),z.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*Fe()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(z.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),Pe.setLineWidth(ke*Fe()),z.isLineSegments?nt.setMode(F.LINES):z.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else z.isPoints?nt.setMode(F.POINTS):z.isSprite&&nt.setMode(F.TRIANGLES);if(z.isBatchedMesh)nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)nt.renderInstances(st,_t,z.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ls=Math.min(H.instanceCount,ke);nt.renderInstances(st,_t,ls)}else nt.render(st,_t)};function ye(E,U,H){E.transparent===!0&&E.side===Vt&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,_r(E,U,H),E.side=Nn,E.needsUpdate=!0,_r(E,U,H),E.side=Vt):_r(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),p=ne.get(H),p.init(),S.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights);const G=new Set;return E.traverse(function(z){const pe=z.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const we=pe[Me];ye(we,H,z),G.add(we)}else ye(pe,H,z),G.add(pe)}),S.pop(),p=null,G},this.compileAsync=function(E,U,H=null){const G=this.compile(E,U,H);return new Promise(z=>{function pe(){if(G.forEach(function(Me){Oe.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){z(E);return}setTimeout(pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ve=null;function gt(E){Ve&&Ve(E)}function Dt(){Ut.stop()}function $e(){Ut.start()}const Ut=new Fl;Ut.setAnimationLoop(gt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(E){Ve=E,me.setAnimationLoop(E),E===null?Ut.stop():Ut.start()},me.addEventListener("sessionstart",Dt),me.addEventListener("sessionend",$e),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),p=ne.get(E,S.length),p.init(),S.push(p),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(Se),de=this.localClippingEnabled,$=_e.init(this.clippingPlanes,de),_=J.get(E,u.length),_.init(),u.push(_),on(E,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ee,Y),this.info.render.frame++,$===!0&&_e.beginShadows();const H=p.state.shadowsArray;if(oe.render(H,E,U),$===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,E),p.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let z=0,pe=G.length;z<pe;z++){const Me=G[z];Ma(_,E,Me,Me.viewport)}}else Ma(_,E,U);R!==null&&(De.updateMultisampleRenderTarget(R),De.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),ve.resetDefaultState(),I=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function on(E,U,H,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){G&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const Me=M.update(E),we=E.material;we.visible&&_.push(E,Me,we,H,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const Me=M.update(E),we=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Le.copy(Me.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){const Ue=Me.groups;for(let He=0,Ne=Ue.length;He<Ne;He++){const Be=Ue[He],st=we[Be.materialIndex];st&&st.visible&&_.push(E,Me,st,H,Le.z,Be)}}else we.visible&&_.push(E,Me,we,H,Le.z,null)}}const pe=E.children;for(let Me=0,we=pe.length;Me<we;Me++)on(pe[Me],U,H,G)}function Ma(E,U,H,G){const z=E.opaque,pe=E.transmissive,Me=E.transparent;p.setupLightsView(H),$===!0&&_e.setGlobalState(v.clippingPlanes,H),pe.length>0&&ql(z,pe,U,H),G&&Pe.viewport(b.copy(G)),z.length>0&&gr(z,U,H),pe.length>0&&gr(pe,U,H),Me.length>0&&gr(Me,U,H),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ql(E,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const pe=ze.isWebGL2;xe===null&&(xe=new ei(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?rr:In,minFilter:ir,samples:pe?4:0})),v.getDrawingBufferSize(Ie),pe?xe.setSize(Ie.x,Ie.y):xe.setSize(es(Ie.x),es(Ie.y));const Me=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=Un,gr(E,H,G),De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe);let Ue=!1;for(let He=0,Ne=U.length;He<Ne;He++){const Be=U[He],st=Be.object,zt=Be.geometry,_t=Be.material,hn=Be.group;if(_t.side===Vt&&st.layers.test(G.layers)){const nt=_t.side;_t.side=Bt,_t.needsUpdate=!0,Sa(st,H,G,zt,_t,hn),_t.side=nt,_t.needsUpdate=!0,Ue=!0}}Ue===!0&&(De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe)),v.setRenderTarget(Me),v.setClearColor(K,L),v.toneMapping=we}function gr(E,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,pe=E.length;z<pe;z++){const Me=E[z],we=Me.object,Ue=Me.geometry,He=G===null?Me.material:G,Ne=Me.group;we.layers.test(H.layers)&&Sa(we,U,H,Ue,He,Ne)}}function Sa(E,U,H,G,z,pe){E.onBeforeRender(v,U,H,G,z,pe),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,U,H,G,E,pe),z.transparent===!0&&z.side===Vt&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,v.renderBufferDirect(H,U,G,z,E,pe),z.side=Nn,z.needsUpdate=!0,v.renderBufferDirect(H,U,G,z,E,pe),z.side=Vt):v.renderBufferDirect(H,U,G,z,E,pe),E.onAfterRender(v,U,H,G,z,pe)}function _r(E,U,H){U.isScene!==!0&&(U=Ce);const G=Oe.get(E),z=p.state.lights,pe=p.state.shadowsArray,Me=z.state.version,we=O.getParameters(E,z.state,pe,U,H),Ue=O.getProgramCacheKey(we);let He=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?ht:Xe).get(E.envMap||G.environment),He===void 0&&(E.addEventListener("dispose",Q),He=new Map,G.programs=He);let Ne=He.get(Ue);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===Me)return ya(E,we),Ne}else we.uniforms=O.getUniforms(E),E.onBuild(H,we,v),E.onBeforeCompile(we,v),Ne=O.acquireProgram(we,Ue),He.set(Ue,Ne),G.uniforms=we.uniforms;const Be=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=_e.uniform),ya(E,we),G.needsLights=Zl(E),G.lightsStateVersion=Me,G.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function Ea(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Yr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ya(E,U){const H=Oe.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Yl(E,U,H,G,z){U.isScene!==!0&&(U=Ce),De.resetTextureUnits();const pe=U.fog,Me=G.isMeshStandardMaterial?U.environment:null,we=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mn,Ue=(G.isMeshStandardMaterial?ht:Xe).get(G.envMap||Me),He=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,zt=!!H.morphAttributes.color;let _t=Un;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=v.toneMapping);const hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=hn!==void 0?hn.length:0,ke=Oe.get(G),ls=p.state.lights;if($===!0&&(de===!0||E!==x)){const Wt=E===x&&G.id===I;_e.setState(G,E,Wt)}let rt=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ls.state.version||ke.outputColorSpace!==we||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||ke.envMap!==Ue||G.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==_e.numPlanes||ke.numIntersection!==_e.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ne||ke.morphTargets!==Be||ke.morphNormals!==st||ke.morphColors!==zt||ke.toneMapping!==_t||ze.isWebGL2===!0&&ke.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,ke.__version=G.version);let On=ke.currentProgram;rt===!0&&(On=_r(G,U,z));let Ta=!1,ki=!1,cs=!1;const bt=On.getUniforms(),Bn=ke.uniforms;if(Pe.useProgram(On.program)&&(Ta=!0,ki=!0,cs=!0),G.id!==I&&(I=G.id,ki=!0),Ta||x!==E){bt.setValue(F,"projectionMatrix",E.projectionMatrix),bt.setValue(F,"viewMatrix",E.matrixWorldInverse);const Wt=bt.map.cameraPosition;Wt!==void 0&&Wt.setValue(F,Le.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&bt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,ki=!0,cs=!0)}if(z.isSkinnedMesh){bt.setOptional(F,z,"bindMatrix"),bt.setOptional(F,z,"bindMatrixInverse");const Wt=z.skeleton;Wt&&(ze.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),bt.setValue(F,"boneTexture",Wt.boneTexture,De)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(bt.setOptional(F,z,"batchingTexture"),bt.setValue(F,"batchingTexture",z._matricesTexture,De));const hs=H.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0&&ze.isWebGL2===!0)&&P.update(z,H,On),(ki||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,bt.setValue(F,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Bn.envMap.value=Ue,Bn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ki&&(bt.setValue(F,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&jl(Bn,cs),pe&&G.fog===!0&&te.refreshFogUniforms(Bn,pe),te.refreshMaterialUniforms(Bn,G,V,q,xe),Yr.upload(F,Ea(ke),Bn,De)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Yr.upload(F,Ea(ke),Bn,De),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(F,"center",z.center),bt.setValue(F,"modelViewMatrix",z.modelViewMatrix),bt.setValue(F,"normalMatrix",z.normalMatrix),bt.setValue(F,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let us=0,Kl=Wt.length;us<Kl;us++)if(ze.isWebGL2){const ba=Wt[us];be.update(ba,On),be.bind(ba,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function jl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Zl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,H){Oe.get(E.texture).__webglTexture=U,Oe.get(E.depthTexture).__webglTexture=H;const G=Oe.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const H=Oe.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){R=E,T=U,A=H;let G=!0,z=null,pe=!1,Me=!1;if(E){const Ue=Oe.get(E);Ue.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Ue.__webglFramebuffer===void 0?De.setupRenderTarget(E):Ue.__hasExternalTextures&&De.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ne=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?z=Ne[U][H]:z=Ne[U],pe=!0):ze.isWebGL2&&E.samples>0&&De.useMultisampledRTT(E)===!1?z=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[H]:z=Ne,b.copy(E.viewport),k.copy(E.scissor),B=E.scissorTest}else b.copy(j).multiplyScalar(V).floor(),k.copy(re).multiplyScalar(V).floor(),B=ae;if(Pe.bindFramebuffer(F.FRAMEBUFFER,z)&&ze.drawBuffers&&G&&Pe.drawBuffers(E,z),Pe.viewport(b),Pe.scissor(k),Pe.setScissorTest(B),pe){const Ue=Oe.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ue.__webglTexture,H)}else if(Me){const Ue=Oe.get(E.texture),He=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,H||0,He)}I=-1},this.readRenderTargetPixels=function(E,U,H,G,z,pe,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){Pe.bindFramebuffer(F.FRAMEBUFFER,we);try{const Ue=E.texture,He=Ue.format,Ne=Ue.type;if(He!==an&&Ae.convert(He)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===rr&&(Ee.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==In&&Ae.convert(Ne)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Ln&&(ze.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&H>=0&&H<=E.height-z&&F.readPixels(U,H,G,z,Ae.convert(He),Ae.convert(Ne),pe)}finally{const Ue=R!==null?Oe.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(E,U,H=0){const G=Math.pow(2,-H),z=Math.floor(U.image.width*G),pe=Math.floor(U.image.height*G);De.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,E.x,E.y,z,pe),Pe.unbindTexture()},this.copyTextureToTexture=function(E,U,H,G=0){const z=U.image.width,pe=U.image.height,Me=Ae.convert(H.format),we=Ae.convert(H.type);De.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,z,pe,Me,we,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,Me,we,U.image),G===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H,G,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,we=E.max.z-E.min.z+1,Ue=Ae.convert(G.format),He=Ae.convert(G.type);let Ne;if(G.isData3DTexture)De.setTexture3D(G,0),Ne=F.TEXTURE_3D;else if(G.isDataArrayTexture)De.setTexture2DArray(G,0),Ne=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Be=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zt=F.getParameter(F.UNPACK_SKIP_PIXELS),_t=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES),nt=H.isCompressedTexture?H.mipmaps[0]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(Ne,z,U.x,U.y,U.z,pe,Me,we,Ue,He,nt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ne,z,U.x,U.y,U.z,pe,Me,we,Ue,nt.data)):F.texSubImage3D(Ne,z,U.x,U.y,U.z,pe,Me,we,Ue,He,nt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,_t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),z===0&&G.generateMipmaps&&F.generateMipmap(Ne),Pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Pe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ua?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===rs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Jn:yl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?Et:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vm extends kl{}vm.prototype.isWebGL1Renderer=!0;class xm extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ma extends pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yo=new C,jo=new C,Zo=new ct,Vs=new as,Vr=new ss;class _n extends dt{constructor(e=new Lt,t=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Yo.fromBufferAttribute(t,r-1),jo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Yo.distanceTo(jo);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Vr.radius+=s,e.ray.intersectsSphere(Vr)===!1)return;Zo.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(Zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,d=new C,f=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const u=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=u,y=S-1;v<y;v+=m){const T=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,A),Vs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let v=u,y=S-1;v<y;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Vs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ko=new C,$o=new C;class Mm extends _n{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ko.fromBufferAttribute(t,r),$o.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ko.distanceTo($o);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lt extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(m,2));function S(){const y=new C,T=new C;let A=0;const R=(t-e)/n;for(let I=0;I<=s;I++){const x=[],b=I/s,k=b*(t-e)+e;for(let B=0;B<=r;B++){const K=B/r,L=K*l+o,N=Math.sin(L),q=Math.cos(L);T.x=k*N,T.y=-b*n+p,T.z=k*q,d.push(T.x,T.y,T.z),y.set(N,R,q).normalize(),f.push(y.x,y.y,y.z),m.push(K,1-b),x.push(g++)}_.push(x)}for(let I=0;I<r;I++)for(let x=0;x<s;x++){const b=_[x][I],k=_[x+1][I],B=_[x+1][I+1],K=_[x][I+1];h.push(b,k,K),h.push(k,B,K),A+=6}c.addGroup(u,A,0),u+=A}function v(y){const T=g,A=new Re,R=new C;let I=0;const x=y===!0?e:t,b=y===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;const k=g;for(let B=0;B<=r;B++){const L=B/r*l+o,N=Math.cos(L),q=Math.sin(L);R.x=x*q,R.y=p*b,R.z=x*N,d.push(R.x,R.y,R.z),f.push(0,b,0),A.x=N*.5+.5,A.y=q*.5*b+.5,m.push(A.x,A.y),g++}for(let B=0;B<r;B++){const K=T+B,L=k+B;y===!0?h.push(L,L+1,K):h.push(L+1,L,K),I+=3}c.addGroup(u,I,y===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends lt{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ga(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends Lt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const v=new C,y=new C,T=new C;for(let A=0;A<t.length;A+=3)m(t[A+0],v),m(t[A+1],y),m(t[A+2],T),l(v,y,T,S)}function l(S,v,y,T){const A=T+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const x=S.clone().lerp(y,I/A),b=v.clone().lerp(y,I/A),k=A-I;for(let B=0;B<=k;B++)B===0&&I===A?R[I][B]=x:R[I][B]=x.clone().lerp(b,B/k)}for(let I=0;I<A;I++)for(let x=0;x<2*(A-I)-1;x++){const b=Math.floor(x/2);x%2===0?(f(R[I][b+1]),f(R[I+1][b]),f(R[I][b])):(f(R[I][b+1]),f(R[I+1][b+1]),f(R[I+1][b]))}}function c(S){const v=new C;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(S),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const S=new C;for(let v=0;v<s.length;v+=3){S.x=s[v+0],S.y=s[v+1],S.z=s[v+2];const y=p(S)/2/Math.PI+.5,T=u(S)/Math.PI+.5;a.push(y,1-T)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const v=a[S+0],y=a[S+2],T=a[S+4],A=Math.max(v,y,T),R=Math.min(v,y,T);A>.9&&R<.1&&(v<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function m(S,v){const y=S*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){const S=new C,v=new C,y=new C,T=new C,A=new Re,R=new Re,I=new Re;for(let x=0,b=0;x<s.length;x+=9,b+=6){S.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),y.set(s[x+6],s[x+7],s[x+8]),A.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),T.copy(S).add(v).add(y).divideScalar(3);const k=p(T);_(A,b+0,S,k),_(R,b+2,v,k),_(I,b+4,y,k)}}function _(S,v,y,T){T<0&&S.x===1&&(a[v]=S.x-1),y.x===0&&y.z===0&&(a[v]=T/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.vertices,e.indices,e.radius,e.details)}}class Ai extends _a{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ai(e.radius,e.detail)}}class zi extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,f=new C,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const S=[],v=u/n;let y=0;u===0&&a===0?y=.5/t:u===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const A=T/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+y,1-v),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const v=h[u][S+1],y=h[u][S],T=h[u+1][S],A=h[u+1][S+1];(u!==0||a>0)&&m.push(v,y,A),(u!==n-1||l<Math.PI)&&m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zn extends Lt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new C,d=new C,f=new C;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,S=(r+1)*m+g;a.push(_,p,S),a.push(p,u,S)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wl{constructor(e,t,n=0,r=1/0){this.ray=new as(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return na(e,this,n,t),n.sort(Qo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)na(e[r],this,n,t);return n.sort(Qo),n}}function Qo(i,e){return i.distance-e.distance}function na(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)na(r[s],e,t,!0)}}class Jo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sm extends Mm{constructor(e=10,t=10,n=4473924,r=8947848){n=new qe(n),r=new qe(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=f===s?n:r;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new Lt;h.setAttribute("position",new et(l,3)),h.setAttribute("color",new et(c,3));const d=new ma({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const el={type:"change"},ks={type:"start"},tl={type:"end"},kr=new as,nl=new Rn,Em=Math.cos(70*Wn.DEG2RAD);class ym extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",M),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(el),n.update(),s=r.NONE},this.update=function(){const P=new C,se=new yt().setFromUnitVectors(e.up,new C(0,1,0)),Z=se.clone().invert(),Ae=new C,ve=new yt,be=new C,ge=2*Math.PI;return function(Ge=null){const D=n.object.position;P.copy(D).sub(n.target),P.applyQuaternion(se),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&k(x(Ge)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ce=n.minAzimuthAngle,Q=n.maxAzimuthAngle;isFinite(ce)&&isFinite(Q)&&(ce<-Math.PI?ce+=ge:ce>Math.PI&&(ce-=ge),Q<-Math.PI?Q+=ge:Q>Math.PI&&(Q-=ge),ce<=Q?o.theta=Math.max(ce,Math.min(Q,o.theta)):o.theta=o.theta>(ce+Q)/2?Math.max(ce,o.theta):Math.min(Q,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(Z),D.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let X=!1;if(n.zoomToCursor&&A){let ie=null;if(n.object.isPerspectiveCamera){const ye=P.length();ie=Y(ye*c);const Ve=ye-ie;n.object.position.addScaledVector(y,Ve),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ye=new C(T.x,T.y,0);ye.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),X=!0;const Ve=new C(T.x,T.y,0);Ve.unproject(n.object),n.object.position.sub(Ve).add(ye),n.object.updateMatrixWorld(),ie=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position):(kr.origin.copy(n.object.position),kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kr.direction))<Em?e.lookAt(n.target):(nl.setFromNormalAndCoplanarPoint(n.object.up,n.target),kr.intersectPlane(nl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),X=!0);return c=1,A=!1,X||Ae.distanceToSquared(n.object.position)>a||8*(1-ve.dot(n.object.quaternion))>a||be.distanceToSquared(n.target)>0?(n.dispatchEvent(el),Ae.copy(n.object.position),ve.copy(n.object.quaternion),be.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",Xe),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Jo,l=new Jo;let c=1;const h=new C,d=new Re,f=new Re,m=new Re,g=new Re,_=new Re,p=new Re,u=new Re,S=new Re,v=new Re,y=new C,T=new Re;let A=!1;const R=[],I={};function x(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function k(P){l.theta-=P}function B(P){l.phi-=P}const K=function(){const P=new C;return function(Z,Ae){P.setFromMatrixColumn(Ae,0),P.multiplyScalar(-Z),h.add(P)}}(),L=function(){const P=new C;return function(Z,Ae){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ae,1):(P.setFromMatrixColumn(Ae,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Z),h.add(P)}}(),N=function(){const P=new C;return function(Z,Ae){const ve=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;P.copy(be).sub(n.target);let ge=P.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),K(2*Z*ge/ve.clientHeight,n.object.matrix),L(2*Ae*ge/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(Z*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),L(Ae*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(P){if(!n.zoomToCursor)return;A=!0;const se=n.domElement.getBoundingClientRect(),Z=P.clientX-se.left,Ae=P.clientY-se.top,ve=se.width,be=se.height;T.x=Z/ve*2-1,T.y=-(Ae/be)*2+1,y.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function j(P){d.set(P.clientX,P.clientY)}function re(P){ee(P),u.set(P.clientX,P.clientY)}function ae(P){g.set(P.clientX,P.clientY)}function W(P){f.set(P.clientX,P.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const se=n.domElement;k(2*Math.PI*m.x/se.clientHeight),B(2*Math.PI*m.y/se.clientHeight),d.copy(f),n.update()}function $(P){S.set(P.clientX,P.clientY),v.subVectors(S,u),v.y>0?q(b()):v.y<0&&V(b()),u.copy(S),n.update()}function de(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),N(p.x,p.y),g.copy(_),n.update()}function xe(P){ee(P),P.deltaY<0?V(b()):P.deltaY>0&&q(b()),n.update()}function Se(P){let se=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),n.update())}function Ie(){if(R.length===1)d.set(R[0].pageX,R[0].pageY);else{const P=.5*(R[0].pageX+R[1].pageX),se=.5*(R[0].pageY+R[1].pageY);d.set(P,se)}}function Le(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const P=.5*(R[0].pageX+R[1].pageX),se=.5*(R[0].pageY+R[1].pageY);g.set(P,se)}}function Ce(){const P=R[0].pageX-R[1].pageX,se=R[0].pageY-R[1].pageY,Z=Math.sqrt(P*P+se*se);u.set(0,Z)}function Fe(){n.enableZoom&&Ce(),n.enablePan&&Le()}function F(){n.enableZoom&&Ce(),n.enableRotate&&Ie()}function mt(P){if(R.length==1)f.set(P.pageX,P.pageY);else{const Z=he(P),Ae=.5*(P.pageX+Z.x),ve=.5*(P.pageY+Z.y);f.set(Ae,ve)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const se=n.domElement;k(2*Math.PI*m.x/se.clientHeight),B(2*Math.PI*m.y/se.clientHeight),d.copy(f)}function Ee(P){if(R.length===1)_.set(P.pageX,P.pageY);else{const se=he(P),Z=.5*(P.pageX+se.x),Ae=.5*(P.pageY+se.y);_.set(Z,Ae)}p.subVectors(_,g).multiplyScalar(n.panSpeed),N(p.x,p.y),g.copy(_)}function ze(P){const se=he(P),Z=P.pageX-se.x,Ae=P.pageY-se.y,ve=Math.sqrt(Z*Z+Ae*Ae);S.set(0,ve),v.set(0,Math.pow(S.y/u.y,n.zoomSpeed)),q(v.y),u.copy(S)}function Pe(P){n.enableZoom&&ze(P),n.enablePan&&Ee(P)}function Qe(P){n.enableZoom&&ze(P),n.enableRotate&&mt(P)}function Oe(P){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",De),n.domElement.addEventListener("pointerup",Xe)),ne(P),P.pointerType==="touch"?O(P):ht(P))}function De(P){n.enabled!==!1&&(P.pointerType==="touch"?te(P):ut(P))}function Xe(P){_e(P),R.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(tl),s=r.NONE}function ht(P){let se;switch(P.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case si.DOLLY:if(n.enableZoom===!1)return;re(P),s=r.DOLLY;break;case si.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ae(P),s=r.PAN}else{if(n.enableRotate===!1)return;j(P),s=r.ROTATE}break;case si.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;j(P),s=r.ROTATE}else{if(n.enablePan===!1)return;ae(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ks)}function ut(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;W(P);break;case r.DOLLY:if(n.enableZoom===!1)return;$(P);break;case r.PAN:if(n.enablePan===!1)return;de(P);break}}function w(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(ks),xe(P),n.dispatchEvent(tl))}function M(P){n.enabled===!1||n.enablePan===!1||Se(P)}function O(P){switch(oe(P),R.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;Ie(),s=r.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Le(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),s=r.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ks)}function te(P){switch(oe(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;mt(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ee(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qe(P),n.update();break;default:s=r.NONE}}function J(P){n.enabled!==!1&&P.preventDefault()}function ne(P){R.push(P)}function _e(P){delete I[P.pointerId];for(let se=0;se<R.length;se++)if(R[se].pointerId==P.pointerId){R.splice(se,1);return}}function oe(P){let se=I[P.pointerId];se===void 0&&(se=new Re,I[P.pointerId]=se),se.set(P.pageX,P.pageY)}function he(P){const se=P.pointerId===R[0].pointerId?R[1]:R[0];return I[se.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",Xe),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}const kn=new Wl,Ct=new C,wn=new C,tt=new yt,il={X:new C(1,0,0),Y:new C(0,1,0),Z:new C(0,0,1)},Ws={type:"change"},rl={type:"mouseDown"},sl={type:"mouseUp",mode:null},al={type:"objectChange"};class Tm extends dt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Pm;this._gizmo=n,this.add(n);const r=new Lm;this._plane=r,this.add(r);const s=this;function a(S,v){let y=v;Object.defineProperty(s,S,{get:function(){return y!==void 0?y:v},set:function(T){y!==T&&(y=T,r[S]=T,n[S]=T,s.dispatchEvent({type:S+"-changed",value:T}),s.dispatchEvent(Ws))}}),s[S]=v,r[S]=v,n[S]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new C,l=new C,c=new yt,h=new yt,d=new C,f=new yt,m=new C,g=new C,_=new C,p=0,u=new C;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",g),a("rotationAxis",_),a("rotationAngle",p),a("eye",u),this._offset=new C,this._startNorm=new C,this._endNorm=new C,this._cameraScale=new C,this._parentPosition=new C,this._parentQuaternion=new yt,this._parentQuaternionInv=new yt,this._parentScale=new C,this._worldScaleStart=new C,this._worldQuaternionInv=new yt,this._worldScale=new C,this._positionStart=new C,this._quaternionStart=new yt,this._scaleStart=new C,this._getPointer=bm.bind(this),this._onPointerDown=wm.bind(this),this._onPointerHover=Am.bind(this),this._onPointerMove=Rm.bind(this),this._onPointerUp=Cm.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;kn.setFromCamera(e,this.camera);const t=Xs(this._gizmo.picker[this.mode],kn);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){kn.setFromCamera(e,this.camera);const t=Xs(this._plane,kn,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,rl.mode=this.mode,this.dispatchEvent(rl)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;kn.setFromCamera(e,this.camera);const a=Xs(this._plane,kn,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(tt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Ct.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Ct.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),wn.set(o,o,o)}else Ct.copy(this.pointStart),wn.copy(this.pointEnd),Ct.applyQuaternion(this._worldQuaternionInv),wn.applyQuaternion(this._worldQuaternionInv),wn.divide(Ct),t.search("X")===-1&&(wn.x=1),t.search("Y")===-1&&(wn.y=1),t.search("Z")===-1&&(wn.z=1);r.scale.copy(this._scaleStart).multiply(wn),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Ct.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ct.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(il[t]),Ct.copy(il[t]),s==="local"&&Ct.applyQuaternion(this.worldQuaternion),Ct.cross(this.eye),Ct.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ct.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(tt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(tt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ws),this.dispatchEvent(al)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(sl.mode=this.mode,this.dispatchEvent(sl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ws),this.dispatchEvent(al),this.pointStart.copy(this.pointEnd))}getRaycaster(){return kn}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function bm(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Am(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function wm(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Rm(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Cm(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Xs(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const Wr=new xn,Ke=new C(0,1,0),ol=new C(0,0,0),ll=new ct,Xr=new yt,jr=new yt,ln=new C,cl=new ct,$i=new C(1,0,0),qn=new C(0,1,0),Qi=new C(0,0,1),qr=new C,ji=new C,Zi=new C;class Pm extends dt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new it({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ma({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const _=new lt(0,.04,.1,12);_.translate(0,.05,0);const p=new ot(.08,.08,.08);p.translate(0,.04,0);const u=new Lt;u.setAttribute("position",new et([0,0,0,1,0,0],3));const S=new lt(.0075,.0075,.5,3);S.translate(0,.25,0);function v(N,q){const V=new Zn(N,.0075,3,64,q*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function y(){const N=new Lt;return N.setAttribute("position",new et([0,0,0,1,1,1],3)),N}const T={X:[[new ue(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new ue(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new ue(S,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ue(_,a),[0,.5,0]],[new ue(_,a),[0,-.5,0],[Math.PI,0,0]],[new ue(S,a)]],Z:[[new ue(_,o),[0,0,.5],[Math.PI/2,0,0]],[new ue(_,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ue(S,o),null,[Math.PI/2,0,0]]],XYZ:[[new ue(new Ai(.1,0),d.clone()),[0,0,0]]],XY:[[new ue(new ot(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new ue(new ot(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new ot(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ue(new lt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ue(new lt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ue(new lt(.2,0,.6,4),n),[0,.3,0]],[new ue(new lt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ue(new lt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ue(new lt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ue(new Ai(.2,0),n)]],XY:[[new ue(new ot(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ue(new ot(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new ot(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new ue(new Ai(.01,2),r),null,null,null,"helper"]],END:[[new ue(new Ai(.01,2),r),null,null,null,"helper"]],DELTA:[[new _n(y(),r),null,null,null,"helper"]],X:[[new _n(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new _n(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new _n(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new ue(v(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ue(v(.5,.5),s)]],Y:[[new ue(v(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ue(v(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ue(v(.75,1),f),null,[0,Math.PI/2,0]]]},x={AXIS:[[new _n(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new ue(new zi(.25,10,8),n)]],X:[[new ue(new Zn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ue(new Zn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ue(new Zn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ue(new Zn(.75,.1,2,24),n)]]},k={X:[[new ue(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new ue(S,s),[0,0,0],[0,0,-Math.PI/2]],[new ue(p,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ue(p,a),[0,.5,0]],[new ue(S,a)],[new ue(p,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ue(p,o),[0,0,.5],[Math.PI/2,0,0]],[new ue(S,o),[0,0,0],[Math.PI/2,0,0]],[new ue(p,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ue(new ot(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ue(new ot(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new ot(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ue(new ot(.1,.1,.1),d.clone())]]},B={X:[[new ue(new lt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ue(new lt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ue(new lt(.2,0,.6,4),n),[0,.3,0]],[new ue(new lt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ue(new lt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ue(new lt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ue(new ot(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ue(new ot(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new ot(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ue(new ot(.2,.2,.2),n),[0,0,0]]]},K={X:[[new _n(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new _n(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new _n(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function L(N){const q=new dt;for(const V in N)for(let ee=N[V].length;ee--;){const Y=N[V][ee][0].clone(),j=N[V][ee][1],re=N[V][ee][2],ae=N[V][ee][3],W=N[V][ee][4];Y.name=V,Y.tag=W,j&&Y.position.set(j[0],j[1],j[2]),re&&Y.rotation.set(re[0],re[1],re[2]),ae&&Y.scale.set(ae[0],ae[1],ae[2]),Y.updateMatrix();const $=Y.geometry.clone();$.applyMatrix4(Y.matrix),Y.geometry=$,Y.renderOrder=1/0,Y.position.set(0,0,0),Y.rotation.set(0,0,0),Y.scale.set(1,1,1),q.add(Y)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=L(T)),this.add(this.gizmo.rotate=L(I)),this.add(this.gizmo.scale=L(k)),this.add(this.picker.translate=L(A)),this.add(this.picker.rotate=L(b)),this.add(this.picker.scale=L(B)),this.add(this.helper.translate=L(R)),this.add(this.helper.rotate=L(x)),this.add(this.helper.scale=L(K)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:jr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const a=r[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(tt.setFromEuler(Wr.set(0,0,0)),a.quaternion.copy(n).multiply(tt),Math.abs(Ke.copy($i).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(tt.setFromEuler(Wr.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(tt),Math.abs(Ke.copy(qn).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(tt.setFromEuler(Wr.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(tt),Math.abs(Ke.copy(Qi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(tt.setFromEuler(Wr.set(0,Math.PI/2,0)),Ke.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(ll.lookAt(ol,Ke,qn)),a.quaternion.multiply(tt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Ct.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ct.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Ct),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(Ke.copy($i).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(Ke.copy(qn).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(Ke.copy(Qi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(Ke.copy(Qi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(Ke.copy($i).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(Ke.copy(qn).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Xr.copy(n),Ke.copy(this.eye).applyQuaternion(tt.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(ll.lookAt(this.eye,ol,qn)),a.name==="X"&&(tt.setFromAxisAngle($i,Math.atan2(-Ke.y,Ke.z)),tt.multiplyQuaternions(Xr,tt),a.quaternion.copy(tt)),a.name==="Y"&&(tt.setFromAxisAngle(qn,Math.atan2(Ke.x,Ke.z)),tt.multiplyQuaternions(Xr,tt),a.quaternion.copy(tt)),a.name==="Z"&&(tt.setFromAxisAngle(Qi,Math.atan2(Ke.y,Ke.x)),tt.multiplyQuaternions(Xr,tt),a.quaternion.copy(tt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class Lm extends ue{constructor(){super(new mr(1e5,1e5,2,2),new it({visible:!1,wireframe:!0,side:Vt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),qr.copy($i).applyQuaternion(t==="local"?this.worldQuaternion:jr),ji.copy(qn).applyQuaternion(t==="local"?this.worldQuaternion:jr),Zi.copy(Qi).applyQuaternion(t==="local"?this.worldQuaternion:jr),Ke.copy(ji),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ke.copy(this.eye).cross(qr),ln.copy(qr).cross(Ke);break;case"Y":Ke.copy(this.eye).cross(ji),ln.copy(ji).cross(Ke);break;case"Z":Ke.copy(this.eye).cross(Zi),ln.copy(Zi).cross(Ke);break;case"XY":ln.copy(Zi);break;case"YZ":ln.copy(qr);break;case"XZ":Ke.copy(Zi),ln.copy(ji);break;case"XYZ":case"E":ln.set(0,0,0);break}break;case"rotate":default:ln.set(0,0,0)}ln.length()===0?this.quaternion.copy(this.cameraQuaternion):(cl.lookAt(Ct.set(0,0,0),ln,Ke),this.quaternion.setFromRotationMatrix(cl)),super.updateMatrixWorld(e)}}const Dm=()=>new xm,Um=i=>{const e=new kl({antialias:!0,alpha:!0});return e.setSize(i.offsetWidth,i.offsetHeight),e.setPixelRatio(window.devicePixelRatio),i.appendChild(e.domElement),e},Im=i=>{const e=i.offsetWidth/i.offsetHeight,t=new Yt(50,e);return t.position.set(150,150,150),t},Nm=(i,e)=>{const t=new ym(i,e);return t.autoRotate=!0,t.autoRotateSpeed=1,t.enableDamping=!0,t.dampingFactor=.2,t},Fm=(i,e,t,n)=>{const r=new Tm(i,e);return r.addEventListener("dragging-changed",s=>{t.enablePan=!s.value,t.enableRotate=!s.value}),n.add(r),r},Om=(i,e,t)=>{new ResizeObserver(r=>{if(r.length===0)return;const{width:s,height:a}=r[0].contentRect;e.setSize(s,a),t.aspect=s/a,t.updateProjectionMatrix()}).observe(i)};class Hi{constructor(e){this.enable=()=>{this.editorArea.style.display="flex",this.editorArea.addEventListener("input",this.onChangePosition),this.update()},this.disable=()=>{this.editorArea.removeEventListener("input",this.onChangePosition),this.editorArea.style.display="none"},this.update=()=>{this.xInput.value=this.position.x.toFixed(3),this.yInput.value=this.position.y.toFixed(3),this.zInput.value=this.position.z.toFixed(3)},this.addEventListener=(t,n)=>{t==="input"&&this.onChange.push(n),t==="position-editor"&&this.editorArea.addEventListener("click",()=>{n()})},this.onChangePosition=()=>{const t=Number(this.xInput.value),n=Number(this.yInput.value),r=Number(this.zInput.value),s=new C(t,n,r);for(const a of this.onChange)a(s)},this.editorArea=document.getElementById("position_editor_area"),this.xInput=document.getElementById("charge_position_x"),this.yInput=document.getElementById("charge_position_y"),this.zInput=document.getElementById("charge_position_z"),this.position=e.position,this.onChange=[e.onChange]}}class va{constructor(e){this.enable=()=>{this.editorArea.style.display="flex",this.editorArea.addEventListener("input",this.onChangeRotation),this.update()},this.disable=()=>{this.editorArea.removeEventListener("input",this.onChangeRotation),this.editorArea.style.display="none"},this.update=()=>{this.xInput.value=Wn.radToDeg(this.rotation.x).toFixed(3),this.yInput.value=Wn.radToDeg(this.rotation.y).toFixed(3),this.zInput.value=Wn.radToDeg(this.rotation.z).toFixed(3)},this.addEventListener=(t,n)=>{t==="input"&&this.onChange.push(n),t==="rotation-editor"&&this.editorArea.addEventListener("click",()=>{n()})},this.onChangeRotation=()=>{const t=Wn.degToRad(Number(this.xInput.value)),n=Wn.degToRad(Number(this.yInput.value)),r=Wn.degToRad(Number(this.zInput.value)),s=new xn(t,n,r);for(const a of this.onChange)a(s)},this.editorArea=document.getElementById("rotation_editor_area"),this.xInput=document.getElementById("charge_rotate_x"),this.yInput=document.getElementById("charge_rotate_y"),this.zInput=document.getElementById("charge_rotate_z"),this.rotation=e.rotation,this.onChange=[e.onChange]}}class Sn{constructor(e){this.enable=()=>{this.parent.style.display="flex",this.editorArea.appendChild(this.inputLabel),this.input.addEventListener("input",this.onChangeNumber),this.update()},this.disable=()=>{this.input.removeEventListener("input",this.onChangeNumber),this.editorArea.contains(this.inputLabel)&&this.editorArea.removeChild(this.inputLabel),this.parent.style.display="none"},this.update=()=>{this.input.value=this.value.toFixed(this.options.digits)},this.addEventListener=(n,r)=>{n==="input"&&this.onChange.push(r)},this.onChangeNumber=()=>{let n=Number(this.input.value);this.options.min!==void 0&&(n=Math.max(this.options.min,n)),this.options.max!==void 0&&(n=Math.min(this.options.max,n));for(const r of this.onChange)r(n)},this.parent=document.getElementById("parameter_editor_area"),this.editorArea=document.getElementById("detail_editor"),this.options=e,this.value=e.value,this.onChange=[e.onChange];const t=document.getElementById(e.name);if(t!==null){const n=t.parentElement;n.removeChild(t),this.editorArea.removeChild(n)}this.inputLabel=document.createElement("label"),this.inputLabel.innerHTML=`
            ${e.name}
            <input type="number" id="${e.name}" value="${e.value}" inputmode="decimal">
        `,this.input=this.inputLabel.querySelector("input"),e.step!==void 0&&(this.input.step=e.step.toString()),e.min!==void 0&&(this.input.min=e.min.toString()),e.max!==void 0&&(this.input.max=e.max.toString()),e.digits===void 0&&(e.digits=3)}}class ii{constructor(){this.parameters=[],this.add=e=>(this.parameters.push(e),this),this.enable=()=>{for(const e of this.parameters)e.enable()},this.disable=()=>{for(const e of this.parameters)e.disable()},this.update=()=>{for(const e of this.parameters)e.update()},this.addEventListener=(e,t)=>{for(const n of this.parameters)n.addEventListener(e,t)}}}class Bm{constructor(e,t,n,r,s){this.setEvent=()=>{const a=o=>{this.pointer.x=o.offsetX/this.dom.offsetWidth*2-1,this.pointer.y=-(o.offsetY/this.dom.offsetHeight)*2+1,this.ray.setFromCamera(this.pointer,this.camera);const l=this.pointCharges,c=this.ray.intersectObjects(l,!1);if(c.length>0&&(this.selected=c[0].object,this.selected!==this.transControls.object)){this.transControls.attach(this.selected);for(let h of this.listeners)h.type==="object-selected"&&h.listener(this.selected)}};this.dom.addEventListener("click",a),this.dom.addEventListener("pointerdown",o=>{this.onDownPosition.x=o.offsetX,this.onDownPosition.y=o.offsetY}),this.dom.addEventListener("pointerup",o=>{if(this.onUpPosition.x=o.offsetX,this.onUpPosition.y=o.offsetY,this.onDownPosition.distanceTo(this.onUpPosition)<Number.EPSILON&&this.selected!==null){this.transControls.detach(),this.selected=null;for(let l of this.listeners)l.type==="object-unselected"&&l.listener()}})},this.getSelected=()=>this.selected,this.attach=a=>{this.transControls.attach(a),this.selected=a},this.removeSelected=()=>{if(this.selected!==null){this.transControls.detach(),this.scene.remove(this.selected),this.selected.dispose(),this.pointCharges.splice(this.pointCharges.indexOf(this.selected),1),this.selected=null;for(let a of this.listeners)a.type==="object-unselected"&&a.listener()}},this.setMode=a=>{this.transControls.setMode(a)},this.addEventListener=(a,o)=>{this.listeners.push({type:a,listener:o}),a==="object-change"&&this.transControls.addEventListener("objectChange",()=>{o(this.selected)})},this.transControls=Fm(t,n,r,s),this.pointCharges=e,this.camera=t,this.dom=n,this.controls=r,this.scene=s,this.ray=new Wl,this.pointer=new Re,this.listeners=[],this.selected=null,this.onDownPosition=new Re,this.onUpPosition=new Re,this.setEvent()}}var ar=(i=>(i[i.Plus=0]="Plus",i[i.Minus=1]="Minus",i[i.Neutral=2]="Neutral",i))(ar||{});const Gi=i=>i>0?0:i<0?1:2;class Vi extends ue{}const St=6;var Ye,Ci,Pi,or,lr,cr,Li,Cn,je,hr,ur,Di,Kn,ns,Xl,dr,ia;class zm extends Lt{constructor(){super(...arguments);At(this,ns);At(this,dr);ri(this,"isMeshLineGeometry",!0);ri(this,"type","MeshLineGeometry");At(this,Ye,new Float32Array);At(this,Ci,new Float32Array);At(this,Pi,new Float32Array);At(this,or,new Float32Array);At(this,lr,new Float32Array);At(this,cr,new Float32Array);At(this,Li,new Uint16Array);At(this,Cn,new Float32Array);ri(this,"widthCallback",null);At(this,je,null);At(this,hr,[]);At(this,ur,null);At(this,Di,0);At(this,Kn,0)}get points(){return fe(this,hr)}set points(t){this.setPoints(t,this.widthCallback)}setPoints(t,n=null,r=!0){if(Mt(this,hr,t),Mt(this,ur,this.widthCallback),this.widthCallback=n,!("length"in t))throw new Error("not a Vector3 Array, or not a number Array or Float32Array with 3 numbers per point");if(!t.length){this.dispose(),Mt(this,Kn,0),Mt(this,Di,0);return}const s=Hm(t);if(s)Mt(this,Kn,t.length);else{if(t.length%3!==0)throw new Error("The array should consist of number triplets, 3 number per point.");Mt(this,Kn,t.length/3)}const a=fe(this,Kn),o=fe(this,Di)!==a,l=fe(this,ur)!==this.widthCallback;(!fe(this,je)||o)&&vr(this,ns,Xl).call(this,a),Mt(this,Di,a);let c,h=0,d=0,f=0,m=0,g=0,_=0,p=0,u=0,S=0,v=0,y=0;if(s)for(let A=0;A<t.length;A++){const R=t[A];if(!R)throw new Error("point missing");({x:h,y:d,z:f}=R),yi(fe(this,Ye),m,h,d,f),m+=St;const I=A/t.length;fe(this,Cn)[g+0]=I,fe(this,Cn)[g+1]=I,g+=2}else for(let A=0;A<t.length;A+=3){const R=t[A+0],I=t[A+1],x=t[A+2];if(R==null||I==null||x==null)throw new Error("point missing");yi(fe(this,Ye),m,R,I,x),m+=St;const b=A/t.length;fe(this,Cn)[g+0]=b,fe(this,Cn)[g+1]=b,g+=2}let T=0;if(vr(this,dr,ia).call(this,0,a-1)?(T=(a-2)*St,h=fe(this,Ye)[T+0],d=fe(this,Ye)[T+1],f=fe(this,Ye)[T+2]):(T=0,h=fe(this,Ye)[T+0],d=fe(this,Ye)[T+1],f=fe(this,Ye)[T+2]),h==null||d==null||f==null)throw new Error("point missing");yi(fe(this,Ci),_,h,d,f),_+=6;for(let A=0;A<a;A++){if(o&&(hl(fe(this,or),u,1,-1),u+=2),(l||o)&&(this.widthCallback?c=this.widthCallback(A/(a-1)):c=1,hl(fe(this,lr),S,c,c),S+=2),o&&(Gm(fe(this,cr),y,A/(a-1),0,A/(a-1),1),y+=4),A<a-1){if(T=A*St,h=fe(this,Ye)[T+0],d=fe(this,Ye)[T+1],f=fe(this,Ye)[T+2],h==null||d==null||f==null)throw new Error("point missing");if(yi(fe(this,Ci),_,h,d,f),_+=6,o){const R=A*2;ul(fe(this,Li),v,R+0,R+1,R+2),ul(fe(this,Li),v+3,R+2,R+1,R+3),v+=6}}if(A>0){if(T=A*St,h=fe(this,Ye)[T+0],d=fe(this,Ye)[T+1],f=fe(this,Ye)[T+2],h==null||d==null||f==null)throw new Error("point missing");yi(fe(this,Pi),p,h,d,f),p+=6}}if(vr(this,dr,ia).call(this,a-1,0)?(T=1*St,h=fe(this,Ye)[T+0],d=fe(this,Ye)[T+1],f=fe(this,Ye)[T+2]):(T=(a-1)*St,h=fe(this,Ye)[T+0],d=fe(this,Ye)[T+1],f=fe(this,Ye)[T+2]),h==null||d==null||f==null)throw new Error("point missing");if(yi(fe(this,Pi),p,h,d,f),!fe(this,je))throw new Error("missing attributes");fe(this,je).position.needsUpdate=!0,fe(this,je).previous.needsUpdate=!0,fe(this,je).next.needsUpdate=!0,fe(this,je).side.needsUpdate=o,fe(this,je).width.needsUpdate=o,fe(this,je).uv.needsUpdate=o,fe(this,je).index.needsUpdate=o,r&&(this.computeBoundingSphere(),this.computeBoundingBox())}advance(t){if(!fe(this,je))throw new Error("Call setPoints first.");const n=fe(this,je).position.array,r=fe(this,je).previous.array,s=fe(this,je).next.array,a=n.length;qs(n,0,r,0,a),qs(n,St,n,0,a-St),n[a-6]=t.x,n[a-5]=t.y,n[a-4]=t.z,n[a-3]=t.x,n[a-2]=t.y,n[a-1]=t.z,qs(n,St,s,0,a-St),s[a-6]=t.x,s[a-5]=t.y,s[a-4]=t.z,s[a-3]=t.x,s[a-2]=t.y,s[a-1]=t.z,fe(this,je).position.needsUpdate=!0,fe(this,je).previous.needsUpdate=!0,fe(this,je).next.needsUpdate=!0}}Ye=new WeakMap,Ci=new WeakMap,Pi=new WeakMap,or=new WeakMap,lr=new WeakMap,cr=new WeakMap,Li=new WeakMap,Cn=new WeakMap,je=new WeakMap,hr=new WeakMap,ur=new WeakMap,Di=new WeakMap,Kn=new WeakMap,ns=new WeakSet,Xl=function(t){this.dispose(),Mt(this,je,{position:new xt(Mt(this,Ye,new Float32Array(t*St)),3),previous:new xt(Mt(this,Ci,new Float32Array(t*St)),3),next:new xt(Mt(this,Pi,new Float32Array(t*St)),3),side:new xt(Mt(this,or,new Float32Array(t*2)),1),width:new xt(Mt(this,lr,new Float32Array(t*2)),1),uv:new xt(Mt(this,cr,new Float32Array(t*4)),2),counters:new xt(Mt(this,Cn,new Float32Array(t*2)),1),index:new xt(Mt(this,Li,new Uint16Array((t-1)*St)),1)}),this.setAttribute("position",fe(this,je).position),this.setAttribute("previous",fe(this,je).previous),this.setAttribute("next",fe(this,je).next),this.setAttribute("side",fe(this,je).side),this.setAttribute("width",fe(this,je).width),this.setAttribute("uv",fe(this,je).uv),this.setAttribute("counters",fe(this,je).counters),this.setIndex(fe(this,je).index)},dr=new WeakSet,ia=function(t,n){const r=t*St,s=n*St;return fe(this,Ye)[r+0]===fe(this,Ye)[s+0]&&fe(this,Ye)[r+1]===fe(this,Ye)[s+1]&&fe(this,Ye)[r+2]===fe(this,Ye)[s+2]};function Hm(i){return!!(i.length&&i[0]instanceof C)}function qs(i,e,t,n,r){if(n+r>t.length)throw new Error("Not enough space to copy from src to dst.");for(let s=0,a=e+r;s+e<a;s++){const o=i[s+e];if(o==null)throw new Error("missing src value");t[s+n]=o}}function hl(i,e,t,n){i[e+0]=t,i[e+1]=n}function ul(i,e,t,n,r){i[e+0]=t,i[e+1]=n,i[e+2]=r}function yi(i,e,t,n,r){i[e+0]=t,i[e+1]=n,i[e+2]=r,i[e+3]=t,i[e+4]=n,i[e+5]=r}function Gm(i,e,t,n,r,s){i[e+0]=t,i[e+1]=n,i[e+2]=r,i[e+3]=s}Te.meshline_vert=`
	${Te.logdepthbuf_pars_vertex}
	${Te.fog_pars_vertex}
	
	attribute vec3 previous;
	attribute vec3 next;
	attribute float side;
	attribute float width;
	attribute float counters;
	
	uniform vec2 resolution;
	uniform float lineWidth;
	uniform vec3 color;
	uniform float opacity;
	uniform float sizeAttenuation;
	
	varying vec2 vUV;
	varying vec4 vColor;
	varying float vCounters;
	
	vec2 fix( vec4 i, float aspect ) {
	
	    vec2 res = i.xy / i.w;
	    res.x *= aspect;
		 vCounters = counters;
	    return res;
        
	}
	
	void main() {
	
	    float aspect = resolution.x / resolution.y;
	
	    vColor = vec4( color, opacity );
	    vUV = uv;
	
	    mat4 m = projectionMatrix * modelViewMatrix;
	    vec4 finalPosition = m * vec4( position, 1.0 );
	    vec4 prevPos = m * vec4( previous, 1.0 );
	    vec4 nextPos = m * vec4( next, 1.0 );
	
	    vec2 currentP = fix( finalPosition, aspect );
	    vec2 prevP = fix( prevPos, aspect );
	    vec2 nextP = fix( nextPos, aspect );
	
	    float w = lineWidth * width;
	
	    vec2 dir;
	    if( nextP == currentP ) dir = normalize( currentP - prevP );
	    else if( prevP == currentP ) dir = normalize( nextP - currentP );
	    else {
	        vec2 dir1 = normalize( currentP - prevP );
	        vec2 dir2 = normalize( nextP - currentP );
	        dir = normalize( dir1 + dir2 );
	
	        vec2 perp = vec2( -dir1.y, dir1.x );
	        vec2 miter = vec2( -dir.y, dir.x );
	        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );
	
	    }
	
	    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;
	    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
	    normal.xy *= .5 * w;
	    normal *= projectionMatrix;
	    if( sizeAttenuation == 0. ) {
	        normal.xy *= finalPosition.w;
	        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
	    }
	
	    finalPosition.xy += normal.xy * side;
	
	    gl_Position = finalPosition;
	
        ${Te.logdepthbuf_vertex}
        ${Te.fog_vertex&&"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );"}
        ${Te.fog_vertex}
	}
`;Te.meshline_frag=`
	${Te.fog_pars_fragment}
	${Te.logdepthbuf_pars_fragment}
	
	uniform sampler2D map;
	uniform sampler2D alphaMap;
	uniform float useMap;
	uniform float useAlphaMap;
	uniform float useDash;
	uniform float dashArray;
	uniform float dashOffset;
	uniform float dashRatio;
	uniform float visibility;
	uniform float alphaTest;
	uniform vec2 repeat;

	varying vec2 vUV;
	varying vec4 vColor;
	varying float vCounters;
	
	void main() {
        ${Te.logdepthbuf_fragment}

	    vec4 c = vColor;
	    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );
	    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;
	    if( c.a < alphaTest ) discard;
	    if( useDash == 1. ){
	        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
	    }
	    gl_FragColor = c;
	    gl_FragColor.a *= step(vCounters, visibility);
	
        ${Te.fog_fragment}
	}
`;class Vm extends Fn{constructor(t){super({uniforms:Object.assign({},le.fog,{lineWidth:{value:1},map:{value:null},useMap:{value:!1},alphaMap:{value:null},useAlphaMap:{value:!1},color:{value:new qe(16777215)},opacity:{value:1},resolution:{value:new Re(1,1)},sizeAttenuation:{value:!0},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:!1},visibility:{value:1},alphaTest:{value:0},repeat:{value:new Re(1,1)}}),vertexShader:Te.meshline_vert,fragmentShader:Te.meshline_frag});ri(this,"isMeshLineMaterial",!0);ri(this,"type","MeshLineMaterial");Object.defineProperties(this,{fogColor:{enumerable:!0,get:()=>this.uniforms.fogColor.value,set:n=>{this.uniforms.fogColor.value=n}},fogDensity:{enumerable:!0,get:()=>this.uniforms.fogDensity.value,set:n=>{this.uniforms.fogDensity.value=n}},fogNear:{enumerable:!0,get:()=>this.uniforms.fogNear.value,set:n=>{this.uniforms.fogNear.value=n}},fogFar:{enumerable:!0,get:()=>this.uniforms.fogFar.value,set:n=>{this.uniforms.fogFar.value=n}},lineWidth:{enumerable:!0,get:()=>this.uniforms.lineWidth.value,set:n=>{this.uniforms.lineWidth.value=n}},map:{enumerable:!0,get:()=>this.uniforms.map.value,set:n=>{this.uniforms.map.value=n}},useMap:{enumerable:!0,get:()=>this.uniforms.useMap.value,set:n=>{this.uniforms.useMap.value=n}},alphaMap:{enumerable:!0,get:()=>this.uniforms.alphaMap.value,set:n=>{this.uniforms.alphaMap.value=n}},useAlphaMap:{enumerable:!0,get:()=>this.uniforms.useAlphaMap.value,set:n=>{this.uniforms.useAlphaMap.value=n}},color:{enumerable:!0,get:()=>this.uniforms.color.value,set:n=>{this.uniforms.color.value=n}},opacity:{enumerable:!0,get:()=>this.uniforms.opacity.value,set:n=>{this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:()=>this.uniforms.resolution.value,set:n=>{this.uniforms.resolution.value.copy(n)}},sizeAttenuation:{enumerable:!0,get:()=>this.uniforms.sizeAttenuation.value,set:n=>{this.uniforms.sizeAttenuation.value=n}},dashArray:{enumerable:!0,get:()=>this.uniforms.dashArray.value,set:n=>{this.uniforms.dashArray.value=n,this.useDash=n!==0}},dashOffset:{enumerable:!0,get:()=>this.uniforms.dashOffset.value,set:n=>{this.uniforms.dashOffset.value=n}},dashRatio:{enumerable:!0,get:()=>this.uniforms.dashRatio.value,set:n=>{this.uniforms.dashRatio.value=n}},useDash:{enumerable:!0,get:()=>this.uniforms.useDash.value,set:n=>{this.uniforms.useDash.value=n}},visibility:{enumerable:!0,get:()=>this.uniforms.visibility.value,set:n=>{this.uniforms.visibility.value=n}},alphaTest:{enumerable:!0,get:()=>this.uniforms.alphaTest.value,set:n=>{this.uniforms.alphaTest.value=n}},repeat:{enumerable:!0,get:()=>this.uniforms.repeat.value,set:n=>{this.uniforms.repeat.value.copy(n)}}}),this.setValues(t)}copy(t){return super.copy(this),this.fogColor=t.fogColor,this.fogDensity=t.fogDensity,this.fogNear=t.fogNear,this.fogFar=t.fogFar,this.lineWidth=t.lineWidth,this.map=t.map,this.useMap=t.useMap,this.alphaMap=t.alphaMap,this.useAlphaMap=t.useAlphaMap,this.color.copy(t.color),this.opacity=t.opacity,this.resolution.copy(t.resolution),this.sizeAttenuation=t.sizeAttenuation,this.dashArray=t.dashArray,this.dashOffset=t.dashOffset,this.dashRatio=t.dashRatio,this.useDash=t.useDash,this.visibility=t.visibility,this.alphaTest=t.alphaTest,this.repeat.copy(t.repeat),this}}const km=(i,e)=>{let t=new C;for(const n of i)t.add(n.electricFieldVector(e));return t},Wm=(i,e,t,n,r)=>{const s=[t.clone()],a=s[0].clone().add(n);for(let o=0;o<2e3;++o){const l=km(e,a);i.getChargeType()===ar.Minus&&l.multiplyScalar(-1),a.add(l.normalize()),s.push(a.clone());for(const c of e)if(c!==i&&c.getChargeType()!==i.getChargeType()&&c.getChargeType()!==ar.Neutral&&c.isContact(c.distanceFrom(a)))return s;if(a.lengthSq()>r**2)break}return s};class Xm extends dt{constructor(e){super(),this.charges=e,this.lineMaterial=new Vm({color:16777215,lineWidth:1}),this.coneGeometry=new ga(1.5,4,10),this.coneMaterial=new it({color:12303291}),this.createELines()}createELines(){for(const e of this.charges){if(e.getChargeType()===ar.Neutral)continue;const t=e.electricForceLinesDirection();for(const n of t){const r=Wm(e,this.charges,n.begin,n.direction,500);if(r.length<2)continue;const s=new zm;s.setPoints(r);const a=new ue(s,this.lineMaterial);if(this.add(a),r.length<20)continue;const o=r.length/3;for(let l=o;l+1<r.length;l+=o){const c=r[Math.floor(l)],h=new C;h.subVectors(r[Math.floor(l+1)],c);const d=new ue(this.coneGeometry,this.coneMaterial);d.position.copy(c),e.getChargeType()===ar.Minus&&h.multiplyScalar(-1),d.quaternion.setFromUnitVectors(new C(0,1,0),h.normalize()),this.add(d)}}}}update(){for(const e of this.children)e instanceof ue&&e.geometry.dispose();this.children=[],this.createELines()}}class qm extends dt{constructor(e){super(),this.update=()=>{var t;this.children.find(n=>n===this.electric_lines_3d)!=null&&((t=this.electric_lines_3d)==null||t.update())},this.enableElectricLines=t=>{t?(this.electric_lines_3d==null?this.electric_lines_3d=new Xm(this.charges):this.electric_lines_3d.update(),this.add(this.electric_lines_3d)):this.remove(this.electric_lines_3d)},this.charges=e,this.electric_lines_3d=null}}function dl(i,e,t){var n=t||{},r=n.noTrailing,s=r===void 0?!1:r,a=n.noLeading,o=a===void 0?!1:a,l=n.debounceMode,c=l===void 0?void 0:l,h,d=!1,f=0;function m(){h&&clearTimeout(h)}function g(p){var u=p||{},S=u.upcomingOnly,v=S===void 0?!1:S;m(),d=!v}function _(){for(var p=arguments.length,u=new Array(p),S=0;S<p;S++)u[S]=arguments[S];var v=this,y=Date.now()-f;if(d)return;function T(){f=Date.now(),e.apply(v,u)}function A(){h=void 0}!o&&c&&!h&&T(),m(),c===void 0&&y>i?o?(f=Date.now(),s||(h=setTimeout(c?A:T,i))):T():s!==!0&&(h=setTimeout(c?A:T,c===void 0?i-y:i))}return _.cancel=g,_}const Ym=89875517923e-1,ti=88541878128e-22,xa=i=>{if(i<1)return[];if(i===1)return[new C(0,1,0)];let e=0;const t=[];for(let n=1;n<=i;n++){const r=-1+2*(n-1)/(i-1),s=Math.acos(r);r*r===1?e=0:e=e+3.6/Math.sqrt(i)/Math.sqrt(1-r*r);const a=Math.sin(s),o=a*Math.cos(e),l=a*Math.sin(e),c=-Math.cos(s);t.push(new C(o,c,l))}return i>20&&(t[0]=new C().add(t[1]).add(t[2]).add(t[4]).add(t[5]).add(t[6]).normalize(),t[i-1]=new C().add(t[i-2]).add(t[i-3]).add(t[i-4]).add(t[i-5]).add(t[i-6]).normalize()),t},Ft=class Ft extends Vi{constructor(e,t){const n=Ft.pointChargeGeometry,r=Ft.getMaterial(t);super(n,r),this.getChargeType=()=>Gi(this.charge),this.distanceFrom=s=>s.clone().sub(this.position),this.isContact=s=>s.lengthSq()<1,this.electricFieldVector=s=>{const a=this.distanceFrom(s);return a.lengthSq()<Number.EPSILON?new C:a.multiplyScalar(Ym*this.charge/a.length()**3)},this.electricForceLinesDirection=()=>xa(25).map(s=>({begin:this.position,direction:s})),this.dispose=()=>{},this.toJSON=()=>({position:this.position.toArray(),charge:this.charge}),this.createEditor=()=>{const s=new Hi({position:this.position,onChange:o=>{this.position.copy(o)}}),a=new Sn({name:"電荷量[C]",value:this.charge,onChange:o=>{this.charge=o,this.material=Ft.getMaterial(this.charge)}});return new ii().add(s).add(a)},this.position.copy(e),this.charge=t}};Ft.fromJSON=e=>new Ft(new C(e.position[0],e.position[1],e.position[2]),e.charge),Ft.plusMaterial=new it({color:16711680}),Ft.minusMaterial=new it({color:255}),Ft.neutralMaterial=new it({color:16776960}),Ft.pointChargeGeometry=new zi(4,32,32),Ft.getMaterial=e=>e>0?Ft.plusMaterial:e<0?Ft.minusMaterial:Ft.neutralMaterial;let nr=Ft;const Qt=class Qt extends Vi{constructor(e,t,n){const r=new lt(1,1,400,10),s=Qt.getMaterial(n);super(r,s),this.getChargeType=()=>Gi(this.lineDensity),this.distanceFrom=a=>{const o=a.clone().sub(this.position);return o.applyQuaternion(this.quaternion.clone().invert()),o.y=0,o.applyQuaternion(this.quaternion)},this.isContact=a=>a.lengthSq()<1,this.electricFieldVector=a=>{const o=this.distanceFrom(a);return o.lengthSq()<Number.EPSILON?new C:o.multiplyScalar(this.lineDensity/(2*Math.PI*ti*o.lengthSq()))},this.electricForceLinesDirection=()=>{const l=this.geometry.parameters.height/2,c=this.geometry.parameters.height/6,h=[];for(let d=1;d<6;++d){const f=new C(0,l-c*d,0).applyQuaternion(this.quaternion).add(this.position);for(let m=.5;m<10;++m){const g=2*Math.PI/10*m,_=new C(Math.cos(g),0,Math.sin(g)).applyQuaternion(this.quaternion);h.push({begin:f,direction:_})}}return h},this.dispose=()=>{this.geometry.dispose()},this.createEditor=()=>{const a=new Hi({position:this.position,onChange:c=>{this.position.copy(c)}}),o=new va({rotation:this.rotation,onChange:c=>{this.rotation.copy(c)}}),l=new Sn({name:"線密度[C/m]",value:this.lineDensity,onChange:c=>{this.lineDensity=c,this.material=Qt.getMaterial(this.lineDensity)}});return new ii().add(a).add(o).add(l)},this.position.copy(e),this.rotation.copy(t),this.lineDensity=n}};Qt.plusMaterial=new it({color:16711680}),Qt.minusMaterial=new it({color:255}),Qt.neutralMaterial=new it({color:16776960}),Qt.getMaterial=e=>e>0?Qt.plusMaterial:e<0?Qt.minusMaterial:Qt.neutralMaterial;let ra=Qt;const Jt=class Jt extends Vi{constructor(e,t,n){const r=new mr(200,200),s=Jt.getMaterial(n);super(r,s),this.getChargeType=()=>Gi(this.surfaceDensity),this.distanceFrom=a=>{const o=a.clone().sub(this.position);return o.applyQuaternion(this.quaternion.clone().invert()),o.x=0,o.y=0,o.applyQuaternion(this.quaternion)},this.isContact=a=>a.lengthSq()<1,this.electricFieldVector=a=>{const o=this.distanceFrom(a);return o.lengthSq()<Number.EPSILON?new C:o.multiplyScalar(this.surfaceDensity/(2*ti*o.length()))},this.electricForceLinesDirection=()=>{const l=-this.geometry.parameters.width/2,c=-this.geometry.parameters.height/2,h=this.geometry.parameters.width/6,d=this.geometry.parameters.height/6,f=[];for(let m=1;m<6;m++)for(let g=1;g<6;g++){const _=l+m*h,p=c+g*d,u=new C(_,p,0).applyQuaternion(this.quaternion).add(this.position),S=new C(0,0,1).applyQuaternion(this.quaternion),v=new C(0,0,-1).applyQuaternion(this.quaternion);f.push({begin:u,direction:S}),f.push({begin:u,direction:v})}return f},this.dispose=()=>{this.geometry.dispose()},this.createEditor=()=>{const a=new Hi({position:this.position,onChange:c=>{this.position.copy(c)}}),o=new va({rotation:this.rotation,onChange:c=>{this.rotation.copy(c)}}),l=new Sn({name:"面密度[C/m²]",value:this.surfaceDensity,onChange:c=>{this.surfaceDensity=c,this.material=Jt.getMaterial(this.surfaceDensity)}});return new ii().add(a).add(o).add(l)},this.position.copy(e),this.rotation.copy(t),this.surfaceDensity=n}};Jt.plusMaterial=new it({color:16711680,side:Vt,transparent:!0,opacity:.5}),Jt.minusMaterial=new it({color:255,side:Vt,transparent:!0,opacity:.5}),Jt.neutralMaterial=new it({color:16776960,side:Vt,transparent:!0,opacity:.5}),Jt.getMaterial=e=>e>0?Jt.plusMaterial:e<0?Jt.minusMaterial:Jt.neutralMaterial;let sa=Jt;const en=class en extends Vi{constructor(e,t,n){const r=new zi(t,32,32),s=en.getMaterial(n);super(r,s),this.getChargeType=()=>Gi(this.arealDensity),this.distanceFrom=a=>a.clone().sub(this.position),this.isContact=a=>a.lengthSq()<this.radius**2,this.electricFieldVector=a=>{const o=this.distanceFrom(a),l=o.lengthSq();return l<Number.EPSILON?new C:l<this.radius**2?new C:o.multiplyScalar(this.arealDensity*this.radius**2/(ti*l))},this.electricForceLinesDirection=()=>xa(25).map(a=>({begin:this.position.clone().add(a.clone().multiplyScalar(this.radius)),direction:a})),this.dispose=()=>{this.geometry.dispose()},this.createEditor=()=>{const a=new Hi({position:this.position,onChange:c=>{this.position.copy(c)}}),o=new Sn({name:"面密度[C/m²]",value:this.arealDensity,onChange:c=>{this.arealDensity=c,this.material=en.getMaterial(this.arealDensity)}}),l=new Sn({name:"半径[m]",value:this.radius,onChange:c=>{this.updateRadius(c)},min:.1,step:.1,digits:2});return new ii().add(a).add(o).add(l)},this.position.copy(e),this.radius=t,this.arealDensity=n}};en.plusMaterial=new it({color:16711680,transparent:!0,opacity:.5}),en.minusMaterial=new it({color:255,transparent:!0,opacity:.5}),en.neutralMaterial=new it({color:16776960,transparent:!0,opacity:.5}),en.getMaterial=e=>e>0?en.plusMaterial:e<0?en.minusMaterial:en.neutralMaterial;let aa=en;const tn=class tn extends Vi{constructor(e,t,n){const r=new zi(t,32,32),s=tn.getMaterial(n);super(r,s),this.getChargeType=()=>Gi(this.volumeDensity),this.distanceFrom=a=>a.clone().sub(this.position),this.isContact=a=>a.lengthSq()<this.radius**2,this.electricFieldVector=a=>{const o=this.distanceFrom(a),l=o.lengthSq();return l<Number.EPSILON?new C:l<this.radius**2?o.multiplyScalar(this.volumeDensity*Math.sqrt(l)/(3*ti)):o.multiplyScalar(this.volumeDensity*this.radius**3/(3*ti*l))},this.electricForceLinesDirection=()=>xa(25).map(a=>({begin:this.position.clone().add(a.clone().multiplyScalar(this.radius)),direction:a})),this.dispose=()=>{this.geometry.dispose()},this.createEditor=()=>{const a=new Hi({position:this.position,onChange:c=>{this.position.copy(c)}}),o=new Sn({name:"体積密度[C/m³]",value:this.volumeDensity,onChange:c=>{this.volumeDensity=c,this.material=tn.getMaterial(this.volumeDensity)}}),l=new Sn({name:"半径[m]",value:this.radius,onChange:c=>{this.updateRadius(c)},min:.1,step:.1,digits:2});return new ii().add(a).add(o).add(l)},this.position.copy(e),this.radius=t,this.volumeDensity=n}};tn.plusMaterial=new it({color:16711680,transparent:!0,opacity:.5}),tn.minusMaterial=new it({color:255,transparent:!0,opacity:.5}),tn.neutralMaterial=new it({color:16776960,transparent:!0,opacity:.5}),tn.getMaterial=e=>e>0?tn.plusMaterial:e<0?tn.minusMaterial:tn.neutralMaterial;let oa=tn;const nn=class nn extends Vi{constructor(e,t,n,r){const s=new lt(n,n,400,20),a=nn.getMaterial(r);super(s,a),this.getChargeType=()=>Gi(this.volumeDensity),this.distanceFrom=o=>{const l=o.clone().sub(this.position);return l.applyQuaternion(this.quaternion.clone().invert()),l.y=0,l.applyQuaternion(this.quaternion)},this.isContact=o=>o.lengthSq()<this.radius**2,this.electricFieldVector=o=>{const l=this.distanceFrom(o),c=l.lengthSq();return c<Number.EPSILON?new C:c<this.radius**2?l.multiplyScalar(this.volumeDensity*this.radius/(2*ti*l.length())):l.multiplyScalar(this.volumeDensity*this.radius**2/(2*ti*c))},this.electricForceLinesDirection=()=>{const c=this.geometry.parameters.height/2,h=this.geometry.parameters.height/6,d=[];for(let f=1;f<6;++f){const m=new C(0,c-h*f,0).applyQuaternion(this.quaternion).add(this.position);for(let g=.5;g<10;++g){const _=2*Math.PI/10*g,p=new C(Math.cos(_),0,Math.sin(_)).applyQuaternion(this.quaternion);d.push({begin:m.clone().add(p.clone().multiplyScalar(this.radius)),direction:p})}}return d},this.dispose=()=>{this.geometry.dispose()},this.createEditor=()=>{const o=new Hi({position:this.position,onChange:d=>{this.position.copy(d)}}),l=new va({rotation:this.rotation,onChange:d=>{this.rotation.copy(d)}}),c=new Sn({name:"体積密度[C/m³]",value:this.volumeDensity,onChange:d=>{this.volumeDensity=d,this.material=nn.getMaterial(this.volumeDensity)}}),h=new Sn({name:"半径[m]",value:this.radius,onChange:d=>{this.radius=d,this.geometry.dispose(),this.geometry=new lt(this.radius,this.radius,400,20)},min:.1,step:.1,digits:2});return new ii().add(o).add(l).add(c).add(h)},this.position.copy(e),this.rotation.copy(t),this.radius=n,this.volumeDensity=r}};nn.plusMaterial=new it({color:16711680,transparent:!0,opacity:.5}),nn.minusMaterial=new it({color:255,transparent:!0,opacity:.5}),nn.neutralMaterial=new it({color:16776960,transparent:!0,opacity:.5}),nn.getMaterial=e=>e>0?nn.plusMaterial:e<0?nn.minusMaterial:nn.neutralMaterial;let la=nn;const jm=()=>{const i=document.getElementById("canvas"),e=Dm(),t=Um(i),n=Im(i),r=Nm(n,i);Om(i,t,n);const s=[];s.push(new nr(new C(-50,0,-50),1)),s.push(new nr(new C(50,0,50),-1));for(const m of s)e.add(m);const a=new qm(s);e.add(a);const o=new Bm(s,n,i,r,e);let l=new ii;const c=m=>{l=m.createEditor(),l.addEventListener("input",dl(100,()=>{a.update()})),o.setMode("translate"),l.addEventListener("position-editor",()=>{o.setMode("translate")}),l.addEventListener("rotation-editor",()=>{o.setMode("rotate")}),l.enable(),a.update()};o.addEventListener("object-change",dl(100,()=>{a.update()})),o.addEventListener("object-change",()=>{l.update()}),o.addEventListener("object-selected",m=>{c(m)}),o.addEventListener("object-unselected",()=>{l.disable()});const h=m=>{e.add(m),s.push(m),o.attach(m),l.disable(),c(m),a.update()},d=()=>{o.getSelected()&&(o.removeSelected(),a.update(),s.length>0?(o.attach(s[0]),c(s[0])):l.disable())};document.getElementById("add_point_charge_button").addEventListener("click",()=>{h(new nr(new C,1))}),document.getElementById("add_infinity_line_charge_button").addEventListener("click",()=>{h(new ra(new C,new xn(0,0,0),1))}),document.getElementById("add_infinity_surface_charge_button").addEventListener("click",()=>{h(new sa(new C,new xn(Math.PI/2,0,0),1))}),document.getElementById("add_infinity_cylinder_volume_charge_button").addEventListener("click",()=>{h(new la(new C,new xn(0,0,0),2,1))}),document.getElementById("add_sphere_surface_charge_button").addEventListener("click",()=>{h(new aa(new C,5,.001))}),document.getElementById("add_sphere_volume_charge_button").addEventListener("click",()=>{h(new oa(new C,5,.001))}),document.getElementById("delete_charge_button").addEventListener("click",d);{const m=new Sm(600,100,8947848,8947848);m.material.opacity=0,e.add(m);const g=p=>{m.visible=p},_=document.getElementById("checkbox_show_grid");g(_.checked),_.addEventListener("change",p=>{g(p.target.checked)})}{const m=document.getElementById("checkbox_auto_rotate");r.autoRotate=m.checked,m.addEventListener("change",g=>{r.autoRotate=g.target.checked})}{const m=document.getElementById("checkbox_electric_lines");a.enableElectricLines(m.checked),m.addEventListener("change",g=>{a.enableElectricLines(g.target.checked)})}const f=()=>{requestAnimationFrame(f),t.render(e,n),r.update()};f()};window.addEventListener("DOMContentLoaded",jm);
