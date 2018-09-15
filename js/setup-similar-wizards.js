'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var generateWizards = function () {
    var wizardsArray = [];

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      var wizard = {};
      wizard.name = window.util.getRandomItemFromArray(window.wizardsCommonParameters.NAMES) + ' ' + window.util.getRandomItemFromArray(window.wizardsCommonParameters.SURNAMES);
      wizard.coatColor = window.util.getRandomItemFromArray(window.wizardsCommonParameters.COAT_COLORS);
      wizard.eyesColor = window.util.getRandomItemFromArray(window.wizardsCommonParameters.EYES_COLORS);

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


  similarListElement.appendChild(createWizardNodes());
  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');
})();
