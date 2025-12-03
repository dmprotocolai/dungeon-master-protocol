// ==UserScript==
// @name         Google Docs - Banish Gemini (v6.0 - The Sniper Rifle)
// @namespace    http://tampermonkey.net/
// @version      6.0
// @description  One shot, one kill. Targets the Gemini button using its exact and stable aria-label.
// @author       The Resistance
// @match        https://docs.google.com/document/*
// @grant        GM_addStyle
// @noframes
// @run-at       document-start
// ==/UserScript==

/*
    The target is a <button> with the aria-label="Try Gemini".
    This script injects a single, high-priority CSS rule before the page loads
    to neutralize the target before it can even render.
*/

GM_addStyle(`
    button[aria-label="Try Gemini"] {
        display: none !important;
    }
`);

console.log("Sniper Rifle deployed. Target: 'Try Gemini' button. Firing on page load.");
