// ==UserScript==
// @name         Google Docs Sanity Fix (Scorched Earth Edition)
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Nukes the sidebar and forces the editor to the correct position from orbit. It's the only way to be sure.
// @author       The Resistance 
// @match        https://docs.google.com/document/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function scorchedEarth() {
        const sidebar = document.querySelector('.left-sidebar-container');
        const editor = document.querySelector('#docs-editor-container');

        // --- Mission 1: Terminate the Sidebar ---
        if (sidebar && sidebar.style.display !== 'none') {
            sidebar.style.display = 'none';
        }

        // --- Mission 2: Force the Editor's Position ---
        // This is the new, hyper-aggressive part.
        // We are overriding every possible property that could be creating the space.
        if (editor) {
            editor.style.marginLeft = '0px !important'; // Kill the margin
            editor.style.paddingLeft = '0px !important'; // Kill any padding
            editor.style.left = '0px !important';       // Kill any absolute positioning
            editor.style.transform = 'none !important'; // Kill any transform-based positioning
        }
    }

    // Run this function repeatedly to win any fight.
    setInterval(scorchedEarth, 250);

    console.log('SCORCHED EARTH PROTOCOL IS ACTIVE. NO SURVIVORS.');
})();
