// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@v0.1.2-esm/index.mjs";function n(r,n,s){var i,a,f,o;if(r<=0)return NaN;if(1===r||0===s)return n[0];for(a=s<0?(1-r)*s:0,o=0;o<r&&(f=n[a])!=f;o++)a+=s;if(o===r)return NaN;for(i=f,o+=1;o<r;o++)f=n[a+=s],e(f)||(f>i||f===i&&t(f))&&(i=f);return i}function s(r,n,s,i){var a,f,o,d;if(r<=0)return NaN;if(1===r||0===s)return n[i];for(f=i,d=0;d<r&&(o=n[f])!=o;d++)f+=s;if(d===r)return NaN;for(a=o,d+=1;d<r;d++)o=n[f+=s],e(o)||(o>a||o===a&&t(o))&&(a=o);return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
