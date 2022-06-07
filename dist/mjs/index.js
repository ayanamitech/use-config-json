/*!
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
 */import*as r from"process";import*as i from"fs";import*as a from"path";import*as s from"dotenv";s.config();function l(o,n){const e={};return Object.keys(n).filter(t=>t in o).forEach(t=>e[t]=n[t]),e}function f(o){const n=i.existsSync(o)?o:a.join(r.cwd(),o);if(!i.existsSync(n)){console.log(`${o} not available on path ${n}, will either use environment variables or fallback to default value`);return}try{const e=i.readFileSync(n,{encoding:"utf8"});return JSON.parse(e)}catch{console.log(`Invalid ${o} file detected, will fallback to environment variable or use default value'`);return}}function u(o,n){const e=l(o,n||{}),t=l(o,r.env);return Object.assign(Object.assign(o,t),e)}function c(o,n){return u(o,f(n||"./config.json"))}function g(o,n){const e=n||"./config.json",t=c(o,e);i.writeFileSync(a.join(r.cwd(),e),JSON.stringify(t,null,2)),console.log(`Exported config as ./${e}`)}export{c as default,c as loadConfig,g as saveConfig};
