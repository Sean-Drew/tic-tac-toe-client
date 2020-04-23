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
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } else if (gameBoard[0] === currentPlayerToken && gameBoard[3] === currentPlayerToken && gameBoard[6] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } if (gameBoard[0] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[8] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } if (gameBoard[1] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[7] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } if (gameBoard[2] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[6] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } if (gameBoard[2] === currentPlayerToken && gameBoard[5] === currentPlayerToken && gameBoard[8] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } if (gameBoard[3] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[5] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } else if (gameBoard[6] === currentPlayerToken && gameBoard[7] === currentPlayerToken && gameBoard[8] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
  } else console.log('TIE')
  // need any more here? tie condition? anything else?
}



// end game, reset board
// check if array is full, and no win condition is met. board full func?

module.exports = {
  onTokenAdd
}
