'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var wizardCoatElement = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var wizardCoatInput = document.querySelector('input[name=coat-color]');
var wizardEyesElement = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var wizardEyesInput = document.querySelector('input[name=eyes-color]');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
var wizardFireballInput = document.querySelector('input[name=fireball-color]');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// functions for working with random values
var getRandomNumber = function (minValue, maxValue) {
  return Math.floor((maxValue + 1 - minValue) * Math.random() + minValue);
};

var getRandomItemFromArray = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

var getDifferentRandomItemFromArray = function (array, oldValue) {
  var newValue = getRandomItemFromArray(array);
  while (newValue === oldValue) {
    newValue = getRandomItemFromArray(COAT_COLORS);
  }
  return newValue;
};


// functions for generating and showing similar wizards
var generateWizards = function () {
  var wizardsArray = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var wizard = {};
    wizard.name = getRandomItemFromArray(NAMES) + ' ' + getRandomItemFromArray(SURNAMES);
    wizard.coatColor = getRandomItemFromArray(COAT_COLORS);
    wizard.eyesColor = getRandomItemFromArray(EYES_COLORS);

    wizardsArray.push(wizard);
  }

  return wizardsArray;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizardNodes = function () {
  var wizardsArray = generateWizards();

  var fragment = document.createDocumentFragment();
  wizardsArray.forEach(function (element) {
    fragment.appendChild(renderWizard(element));
  });

  return fragment;
};


// functions for working with popup
var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};


// functions for working with wizard's appearance
var changeWizardCoatColor = function () {
  var coatColor = getDifferentRandomItemFromArray(COAT_COLORS, wizardCoatInput.value);
  wizardCoatElement.style.fill = coatColor;
  wizardCoatInput.value = coatColor;
};

var changeWizardEyesColor = function () {
  var eyesColor = getDifferentRandomItemFromArray(EYES_COLORS, wizardEyesInput.value);
  wizardEyesElement.style.fill = eyesColor;
  wizardEyesInput.value = eyesColor;
};

var changeWizardFireballColor = function () {
  var fireballColor = getDifferentRandomItemFromArray(FIREBALL_COLORS, wizardFireballInput.value);
  wizardFireballElement.style.backgroundColor = fireballColor;
  wizardFireballInput.value = fireballColor;
};


// adding listeners for opening and closing popup
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


// adding listeners for changing wizard's appearance
wizardCoatElement.addEventListener('click', changeWizardCoatColor);
wizardEyesElement.addEventListener('click', changeWizardEyesColor);
wizardFireballElement.addEventListener('click', changeWizardFireballColor);


// username validation
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});


// creating similar wizards
similarListElement.appendChild(createWizardNodes());
setup.querySelector('.setup-similar').classList.remove('hidden');
