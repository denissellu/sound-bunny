'use strict';

var soundButtons = document.querySelectorAll('.button-sound');

for (var i = 0; i < soundButtons.length; i++) {
  var soundButton = soundButtons[i];
  var soundName = soundButton.attributes['data-sound'].value;
  var fileType = soundButton.attributes['data-file-type'].value;

  prepareButton(soundButton, soundName, fileType);
}

function prepareButton(buttonEl, soundName, fileType) {
  var audio = new Audio(__dirname + '/sounds/' + soundName + '.' + fileType);
  buttonEl.addEventListener('click', function () {
    audio.currentTime = 0;
    audio.play();
  });
}
