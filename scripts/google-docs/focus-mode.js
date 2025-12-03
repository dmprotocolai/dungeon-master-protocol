// ==UserScript==
// @name         Google Docs Focus Mode (ADHD Savior)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Alt+Z to toggle. Dims UI and all text except the active paragraph.
// @author       The Reistance
// @match        https://docs.google.com/*
// @noframes
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // --- CONFIGURATION ---
    const TOGGLE_KEY = 'z';      // Alt + Z
    const SPOTLIGHT_height = 150; // Height of the clear area (px)
    const DIM_OPACITY = '0.8';   // How dark the overlay is (0 to 1)
    // ---------------------

    let focusModeActive = false;
    let topShutter, bottomShutter;

    // 1. Create the Overlay Shutters
    function createOverlays() {
        topShutter = document.createElement('div');
        topShutter.id = 'focus-shutter-top';
        bottomShutter = document.createElement('div');
        bottomShutter.id = 'focus-shutter-bottom';

        const commonStyle = `
            position: fixed;
            left: 0;
            right: 0;
            background-color: #fff; /* White fade. Change to #111 for Dark Mode */
            opacity: 0;
            pointer-events: none; /* Lets you click through the mist */
            z-index: 9999;
            transition: opacity 0.3s ease, height 0.15s ease, top 0.15s ease;
            display: none;
        `;

        topShutter.style.cssText = commonStyle + "top: 0;";
        bottomShutter.style.cssText = commonStyle + "bottom: 0;";

        document.body.appendChild(topShutter);
        document.body.appendChild(bottomShutter);
    }

    // 2. CSS to hide the UI (Toolbar, Ruler, Sidebar)
    const css = `
        body.focus-mode-on #docs-chrome,
        body.focus-mode-on #docs-header,
        body.focus-mode-on .docs-ruler,
        body.focus-mode-on .kix-appview-sidebar {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.5s ease;
        }

        /* Show the shutters when mode is on */
        body.focus-mode-on #focus-shutter-top,
        body.focus-mode-on #focus-shutter-bottom {
            display: block !important;
            opacity: ${DIM_OPACITY} !important;
        }
    `;
    GM_addStyle(css);

    // 3. The Math: Find cursor, move shutters
    function updateSpotlight() {
        if (!focusModeActive) return;

        // Find the blinking cursor (The caret)
        const cursor = document.querySelector('.kix-cursor-caret');

        if (cursor) {
            const rect = cursor.getBoundingClientRect();

            // Calculate center of the spotlight
            const cursorY = rect.top + (rect.height / 2);

            // Calculate shutter positions
            // Top shutter goes from 0 down to (Cursor - Half Spotlight)
            let topHeight = cursorY - (SPOTLIGHT_height / 2);

            // Bottom shutter starts at (Cursor + Half Spotlight)
            let bottomTop = cursorY + (SPOTLIGHT_height / 2);

            // Apply to DOM
            if(topShutter) topShutter.style.height = `${Math.max(0, topHeight)}px`;
            if(bottomShutter) bottomShutter.style.top = `${bottomTop}px`;
        }
    }

    // Initialize
    window.addEventListener('load', createOverlays);
    // Fallback in case load already happened
    if (document.body) createOverlays();

    // Toggle Mode
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === TOGGLE_KEY) {
            e.preventDefault();
            focusModeActive = !focusModeActive;
            document.body.classList.toggle('focus-mode-on');
            updateSpotlight();
        }
    });

    // Update spotlight position on typing, clicking, or scrolling
    ['keydown', 'keyup', 'mouseup', 'click', 'scroll', 'wheel'].forEach(event => {
        window.addEventListener(event, () => {
            if(focusModeActive) requestAnimationFrame(updateSpotlight);
        }, { passive: true }); // passive improves scroll performance
    });

    // Also listen to internal scroll events of the editor container
    const editorContainer = document.querySelector('.kix-appview-editor');
    if(editorContainer) {
        editorContainer.addEventListener('scroll', () => {
             if(focusModeActive) requestAnimationFrame(updateSpotlight);
        });
    }

})();
