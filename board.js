
var board = document.getElementById('board');

for (var i = 0; i < 8; i++) {
  var row = board.appendChild(document.createElement('div'));
  for (var j = 0; j < 8; j++) {
    row.appendChild(document.createElement('span'));
  }
}

