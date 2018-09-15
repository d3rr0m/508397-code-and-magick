'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  // functions for working with numbers and arrays
  var getMaxElement = function (arr) {
    if (arr.length === 0) {
      return 0;
    }

    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomNumber = function (minValue, maxValue) {
    return Math.floor((maxValue + 1 - minValue) * Math.random() + minValue);
  };

  var getRandomItemFromArray = function (array) {
    return array[getRandomNumber(0, array.length - 1)];
  };

  var getDifferentRandomItemFromArray = function (array, oldValue) {
    var newValue = getRandomItemFromArray(array);
    while (newValue === oldValue) {
      newValue = getRandomItemFromArray(array);
    }
    return newValue;
  };


  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getMaxElement: getMaxElement,
    getRandomNumber: getRandomNumber,
    getRandomItemFromArray: getRandomItemFromArray,
    getDifferentRandomItemFromArray: getDifferentRandomItemFromArray
  };
})();
