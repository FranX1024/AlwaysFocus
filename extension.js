// ==UserScript==
// @name          Always on focus
// @namespace     http://www.webmonkey.com
// @description   Trick sites into thinking they're focused when you open another tab or window.
// @match         *://*/*
// @author        anonimni hakerman
// @run-at        document-start
// ==/UserScript==

/*
TRICK:
 - document.hasFocus
 - document 'blur' event
 - window 'blur' event
*/

// document.hasFocus
document.hasFocus = function() {
    return true;
};

// document blur event
document.addEventListener('blur', function(e) {
    if(e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
    }
    e.stopPropagation();
});

// window blur event
window.addEventListener('blur', function(e) {
    if(e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
    }
    e.stopPropagation();
});
