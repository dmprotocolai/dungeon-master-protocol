// ==UserScript==
// @name         Google Docs - The Archivist
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically renames "Untitled document" to a timestamped "Brain Dump" entry. Zero friction.
// @author       The Resistance
// @match        https://docs.google.com/document/d/*
// @grant        none
// @noframes
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const RENAME_PREFIX = "Brain Dump"; // Change this to "Log" or "Notes" or whatever you want!
    const UNTITLED_DEFAULT = "Untitled document";

    // We wait a couple of seconds for the page to fully load and the title to be settled.
    setTimeout(() => {
        const titleInput = document.querySelector('input.docs-title-input');

        // Proceed only if the element exists and the document is still untitled.
        if (titleInput && titleInput.value === UNTITLED_DEFAULT) {
            console.log("Archivist Protocol: Detected an untitled document. Renaming...");

            // Generate a clean, sortable timestamp.
            const now = new Date();
            const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
            const time = now.toLocaleTimeString('en-US', { hour12: false }); // HH:MM:SS
            const newTitle = `${RENAME_PREFIX} ${date} @ ${time}`;

            // --- The Magic ---
            // I need to simulate user input for Google Docs to register the change properly.
            titleInput.value = newTitle;

            // Trigger the 'input' event to let Google's code know the value has changed.
            const inputEvent = new Event('input', { bubbles: true });
            titleInput.dispatchEvent(inputEvent);

            // Trigger the 'blur' event (as if you clicked away) to commit the save.
            const blurEvent = new Event('blur', { bubbles: true });
            titleInput.dispatchEvent(blurEvent);

            console.log(`Renamed to: "${newTitle}"`);
        }
    }, 2000); // 2-second delay. Increase if your connection is slow.

})();
