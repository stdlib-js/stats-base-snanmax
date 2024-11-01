"use strict";var f=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var q=f(function(A,o){
var l=require('@stdlib/math-base-assert-is-nanf/dist'),b=require('@stdlib/math-base-assert-is-positive-zerof/dist');function k(a,i,u){var v,n,e,r;if(a<=0)return NaN;if(a===1||u===0)return i[0];for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(e=i[n],e!==e);r++)n+=u;if(r===a)return NaN;for(v=e,r+=1,r;r<a;r++)n+=u,e=i[n],!l(e)&&(e>v||e===v&&b(e))&&(v=e);return v}o.exports=k
});var c=f(function(B,m){
var P=require('@stdlib/math-base-assert-is-nanf/dist'),R=require('@stdlib/math-base-assert-is-positive-zerof/dist');function Z(a,i,u,v){var n,e,r,t;if(a<=0)return NaN;if(a===1||u===0)return i[v];for(e=v,t=0;t<a&&(r=i[e],r!==r);t++)e+=u;if(t===a)return NaN;for(n=r,t+=1,t;t<a;t++)e+=u,r=i[e],!P(r)&&(r>n||r===n&&R(r))&&(n=r);return n}m.exports=Z
});var y=f(function(C,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),E=c();_(x,"ndarray",E);p.exports=x
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),s,j=g(O(__dirname,"./native.js"));h(j)?s=w:s=j;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
