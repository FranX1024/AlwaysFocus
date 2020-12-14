// ==UserScript==
// @name          AlwaysFocus
// @namespace     http://www.webmonkey.com
// @description   Makes sites unable to figure out whether you've left focus on them
// @match         *://*/*
// @author        anonimni hakerman
// ==/UserScript==

console.log('Always on focus extension is working.');
Object.defineProperty(document, "hidden", { value : false});
