'use strict'

const api = require('./api')
const ui = require('./ui')

let currentPlayerToken = "x"
const gameBoard = ["","","","","","","","",""]

const onTokenAdd = function (event) {
  console.log(event.target.id)
  const target = event.target
  const targetId = target.id
  if ($(target).text() === 'x' || $(target).text() === 'o') {
    console.log('bad move')
  } else {
    // this is html work vv
    $(target).text(currentPlayerToken)
    // call game board function vv
    gameBoard[targetId] = currentPlayerToken
    // change players after a move vv
    checkForWin()
    if (currentPlayerToken === 'x') {
      currentPlayerToken = "o"
    } else {
      currentPlayerToken = 'x'
    } console.log(gameBoard)
  }
}

const checkForWin = function () {
  if (gameBoard[0] === currentPlayerToken && gameBoard[1] === currentPlayerToken && gameBoard[2] === currentPlayerToken) {
    console.log('GAME OVER')
  }
}

// identify win conditions (written down on paper right now).
// check game board after every move. iterate through the game board? No, probably just need to call on specific combinations that equal a win condition?
// if a win condition is met, end game. If not, continue game.
// if (win condition === true) {
//   end game
// } else {
//   continue game
// }

// end game, reset board
// check if array is full, and no win condition is met. board full func?

module.exports = {
  onTokenAdd
}
