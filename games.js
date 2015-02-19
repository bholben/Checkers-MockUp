
var pluralize = function (count, word) {
  return count === 1 ? word : word + 's';
};


games.forEach(function (game) {
  var hash = CryptoJS.MD5(game.opponent).toString(),
      clock = game.isTimed ? '<i class="fa fa-clock-o"></i>' : '';

  if (game.isMyTurn) {

    $('.my-turn').append('' +

      '<li>' +
        '<div class="image"><img src="http://www.gravatar.com/avatar/' + hash + '?s=200&d=monsterid" alt=""></div>' +
        '<div class="text">' +
          '<div class="opponent-name">' + game.opponent + '</div>' +
          '<div class="captured">You have captured <span class="captured-value">' + game.myPrisonCount + '</span> ' + pluralize(game.myPrisonCount, 'prisoner') + '!</div>' +
        '</div>' +
        '<div class="timestamps">' +
          '<div class="last-move"><i class="fa fa-spinner fa-pulse"></i>&nbsp;' + game.lastMoveTime + '</div>' +
          '<div class="timed">' + clock + '</div>' +
        '</div>' +
      '</li>'
    );

  } else {

    $('.their-turn').append('' +

      '<li>' +
        '<div class="image"><img src="http://www.gravatar.com/avatar/' + hash + '?s=200&d=monsterid" alt=""></div>' +
        '<div class="text">' +
          '<div class="opponent-name">' + game.opponent + '</div>' +
          '<div class="captured">You have captured <span class="captured-value">' + game.myPrisonCount + '</span> ' + pluralize(game.myPrisonCount, 'prisoner') + '!</div>' +
        '</div>' +
        '<div class="timestamps">' +
          '<div class="last-move">' + game.lastMoveTime + '</div>' +
          '<div class="timed">' + clock + '</div>' +
        '</div>' +
      '</li>'
    );

  }
});

