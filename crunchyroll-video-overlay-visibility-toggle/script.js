// ==UserScript==
// @name         Crunchyroll video overlay visibility toggle
// @namespace    https://github.com/RequiemOfSpirit
// @version      1.0.1
// @description  Adds an event listener on the Crunchyroll video player on the letter `h` to toggle video overlay visibility
// @author       RequiemOfSpirit
// @homepage     https://github.com/RequiemOfSpirit/Userscripts
// @match        https://static.crunchyroll.com/vilos-*
// @license      MIT
// @icon         https://upload.wikimedia.org/wikipedia/commons/7/75/Cib-crunchyroll_%28CoreUI_Icons_v1.0.0%29_orange.svg
// ==/UserScript==
 
(function() {
  'use strict';

  document.addEventListener('keyup', (e) => {
    const overlay = document.querySelector("#velocity-controls-package");
    if (overlay == undefined || e.key !== 'h') {
      return;
    }

    overlay.style.visibility = (overlay.style.visibility === 'hidden') ? 'visible' : 'hidden';
  });
})();
