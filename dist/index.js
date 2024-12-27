"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=s(function(z,q){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-positive-zerof/dist');function R(r,e,n,f){var u,t,a,i;if(r<=0)return NaN;if(r===1||n===0)return e[f];for(t=f,i=0;i<r&&(a=e[t],a!==a);i++)t+=n;if(i===r)return NaN;for(u=a,i+=1,i;i<r;i++)t+=n,a=e[t],!j(a)&&(a>u||a===u&&l(a))&&(u=a);return u}q.exports=R
});var x=s(function(A,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=v();function k(r,e,n){return b(r,e,n,_(r,n))}m.exports=k
});var y=s(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=x(),O=v();E(c,"ndarray",O);p.exports=c
});var P=require("path").join,Z=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),o,d=Z(P(__dirname,"./native.js"));g(d)?o=h:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
