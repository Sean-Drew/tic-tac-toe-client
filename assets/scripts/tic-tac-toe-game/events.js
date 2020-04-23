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
    if (currentPlayerToken === 'x') {
      currentPlayerToken = "o"
    } else {
      currentPlayerToken = 'x'
    }
  }
}

// const winnerX = function () {
//   $('#message').value('Player X wins!')
// }
//
// const winnerO = function () {
//   $('#message').value('Player O wins!')
// }
//
// const winCondition = function () {
//   if (gameBoard.arr[0] === 'x' && gameBoard.arr[1] === 'x' && gameBoard.arr[2] === 'x') {
//     console.log(winnerX())
//
//   }
// }



// while (winCondition = false) {
//   return
// }
//
// const winCondition = function () {
//   while
// }


// if three in a row, game is won, game ends
// identify possible win scenarios
// check after every move if a win scenario exists
// if win scenario = true, end game. if win scenario = false, continue game
// while win scenario = false, continue game?


module.exports = {
  onTokenAdd
}
