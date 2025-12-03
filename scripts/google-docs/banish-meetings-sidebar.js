// ==UserScript==
// @name         Google Docs Sidebar/Companion Killer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the meeting/keep/tasks sidebar and the toggle button blocking the scrollbar
// @author       The Resistance
// @match        https://docs.google.com/*
// @grant        GM_addStyle
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        /* 1. The specific icon element you provided */
        .app-switcher-button-icon-container {
            display: none !important;
        }

        /* 2. The clickable button container (The part actually blocking the scrollbar) */
        .app-switcher-button-container,
        .companion-collapser-button-container {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        /* 3. The entire sidebar strip (Keep, Tasks, Maps, etc) */
        #companion-parent,
        .docs-companion-app-switcher-container {
            display: none !important;
            width: 0 !important;
        }
    `;

    GM_addStyle(css);

})();
