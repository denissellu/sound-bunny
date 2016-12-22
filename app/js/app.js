'use strict';

const remote = require('electron').remote;
const {app} = remote

let soundButtons = document.querySelectorAll('.button-sound');

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

let closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function () {
  app.quit();
});
