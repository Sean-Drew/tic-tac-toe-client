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

// identify win conditions
// check game board after every move.
// if a win condition is met, end game. If not, continue game.
// AKA ^^ if win condition = true, end game. If win condition = false, continue.
// use a while loop in here somehow? While win condition = false, continue game?


module.exports = {
  onTokenAdd
}
