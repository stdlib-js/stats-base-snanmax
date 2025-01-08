// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@v0.1.3-esm/index.mjs";function n(e,s,n,i){var d,a,m,o;if(e<=0)return NaN;if(1===e||0===n)return s[i];for(a=i,o=0;o<e&&(m=s[a])!=m;o++)a+=n;if(o===e)return NaN;for(d=m,o+=1;o<e;o++)m=s[a+=n],r(m)||(m>d||m===d&&t(m))&&(d=m);return d}function i(e,r,t){return n(e,r,t,s(e,t))}e(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map