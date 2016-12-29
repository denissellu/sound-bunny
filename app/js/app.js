'use strict';

const remote = require('electron').remote;
const {app, BrowserWindow} = remote
const main = remote.require('./main.js');

let soundButtons = document.querySelectorAll('.button-sound');
let closeEl = document.querySelector('.close');
let settingsEl = document.querySelector('.settings');

for (let i = 0; i < soundButtons.length; i++) {
  let soundButton = soundButtons[i];
  let soundName = soundButton.attributes['data-sound'].value;
  let fileType = soundButton.attributes['data-file-type'].value;

  prepareButton(soundButton, soundName, fileType);
}

function prepareButton(buttonEl, soundName, fileType) {
  let audio = new Audio(__dirname + '/sounds/' + soundName + '.' + fileType);
  buttonEl.addEventListener('click', function () {
    audio.currentTime = 0;
    audio.play();
  });
}

settingsEl.addEventListener('click', function() {
  main.openSettings();
});

closeEl.addEventListener('click', function () {
  app.quit();
});
