'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barBottomY = CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentBarX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var currentBarHeight = BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 71, 171, ' + Math.random() + ')';
    ctx.fillRect(currentBarX, barBottomY, BAR_WIDTH, -currentBarHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), currentBarX, barBottomY - currentBarHeight - GAP);
    ctx.fillText(players[i], currentBarX, barBottomY + FONT_GAP);
  }
};
