'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (minValue, maxValue) {
  return Math.floor((maxValue - minValue) * Math.random() + minValue);
};

var generateWizards = function () {
  var wizardsArray = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var wizard = {};
    wizard.name = NAMES[getRandomNumber(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandomNumber(0, SURNAMES.length - 1)];
    wizard.coatColor = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)];
    wizard.eyesColor = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)];

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


userDialog.classList.remove('hidden');

similarListElement.appendChild(createWizardNodes());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
