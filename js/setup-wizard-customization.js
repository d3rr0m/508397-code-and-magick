'use strict';

(function () {

  var wizardCoatElement = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesElement = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('input[name=fireball-color]');

  var wizardCoatClickHandler = function () {
    var coatColor = window.util.getDifferentRandomItemFromArray(window.wizardsCommonParameters.COAT_COLORS, wizardCoatInput.value);
    wizardCoatElement.style.fill = coatColor;
    wizardCoatInput.value = coatColor;
  };

  var wizardEyesClickHandler = function () {
    var eyesColor = window.util.getDifferentRandomItemFromArray(window.wizardsCommonParameters.EYES_COLORS, wizardEyesInput.value);
    wizardEyesElement.style.fill = eyesColor;
    wizardEyesInput.value = eyesColor;
  };

  var wizardFireballClickHandler = function () {
    var fireballColor = window.util.getDifferentRandomItemFromArray(window.wizardsCommonParameters.FIREBALL_COLORS, wizardFireballInput.value);
    wizardFireballElement.style.backgroundColor = fireballColor;
    wizardFireballInput.value = fireballColor;
  };


  wizardCoatElement.addEventListener('click', wizardCoatClickHandler);
  wizardEyesElement.addEventListener('click', wizardEyesClickHandler);
  wizardFireballElement.addEventListener('click', wizardFireballClickHandler);
})();
