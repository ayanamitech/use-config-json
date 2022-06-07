"use strict";/*!
 * MIT License
 * 
 * Copyright (c) 2022 AyanamiTech
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */var f=require("process"),u=require("fs"),v=require("path"),g=require("dotenv");function o(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}}),n.default=e,Object.freeze(n)}var c=o(f),a=o(u),s=o(v),d=o(g);d.config();function l(e,n){const r={};return Object.keys(n).filter(t=>t in e).forEach(t=>r[t]=n[t]),r}function b(e){const n=a.existsSync(e)?e:s.join(c.cwd(),e);if(!a.existsSync(n)){console.log(`${e} not available on path ${n}, will either use environment variables or fallback to default value`);return}try{const r=a.readFileSync(n,{encoding:"utf8"});return JSON.parse(r)}catch{console.log(`Invalid ${e} file detected, will fallback to environment variable or use default value'`);return}}function p(e,n){const r=l(e,n||{}),t=l(e,c.env);return Object.assign(Object.assign(e,t),r)}function i(e,n){return p(e,b(n||"./config.json"))}function j(e,n){const r=n||"./config.json",t=i(e,r);a.writeFileSync(s.join(c.cwd(),r),JSON.stringify(t,null,2)),console.log(`Exported config as ./${r}`)}exports.default=i,exports.loadConfig=i,exports.saveConfig=j;
