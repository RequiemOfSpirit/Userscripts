// ==UserScript==
// @name         HIDIVE video overlay visibility toggle
// @namespace    https://github.com/RequiemOfSpirit
// @version      1.0.0
// @description  Adds an event listener on HIDIVE stream pages on the letter `h` to toggle video overlay visibility
// @author       RequiemOfSpirit
// @homepage     https://github.com/RequiemOfSpirit/Userscripts
// @match        https://www.hidive.com/stream/*
// @license      MIT
// @icon         https://www.hidive.com/favicon.ico
// ==/UserScript==

(function() {
  'use strict';

  let isCurrentlyHidden = false;
  const topModulesSelector = '.rmp-module';
  const videoControlBarSelector = '.rmp-control-bar';
  const playButtonSelector = '.rmp-overlay-button';
  const overlayElementsSelector = [
    topModulesSelector,
    videoControlBarSelector,
    playButtonSelector
  ].join(',');

  document.addEventListener('keyup', (e) => {
    if (e.key !== 'h') {
      return;
    }

    const overlayNodes = document.querySelectorAll(overlayElementsSelector);
    overlayNodes.forEach((overlayItem) => {
      overlayItem.style.display = isCurrentlyHidden ? 'block' : 'none';
    });
    isCurrentlyHidden = !isCurrentlyHidden;
  });
})();
