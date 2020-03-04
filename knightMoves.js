function findPossibleKnightMoves(currentPositionX, currentPositionY) {
  // All possible moves of a knight
  var xAxisMoves = [2, 1, -1, -2, -2, -1, 1, 2];
  var yAxisMoves = [1, 2, 2, 1, -1, -2, -2, -1];

  var outputMoves = [];

  // Check if each possible move is valid or not
  for (var i = 0; i < 8; i++) {
    // Position of knight after move
    var x = currentPositionX + xAxisMoves[i];
    var y = currentPositionY + yAxisMoves[i];

    // count valid moves
    if (
      x >= 0 &&
      y >= 0 &&
      x < chessBoard.length &&
      y < chessBoard[0].length &&
      chessBoard[x][y] == 0
    )
      outputMoves.push({ x, y });
  }

  // Return possible moves
  return outputMoves;
}

///creating 2 dim array and assume that the other sqaures are not filled
var chessBoard = new Array(8);

for (var i = 0; i < chessBoard.length; i++) {
  chessBoard[i] = new Array(8);
  for (var j = 0; j < chessBoard[i].length; j++) {
    chessBoard[i][j] = 0;
  }
}

var result = findPossibleKnightMoves(8, 8);
console.log(result);
