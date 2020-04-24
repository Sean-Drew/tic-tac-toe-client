'use strict'

const store = require('../store')
const events = require('./events')

// add messaging for the user when the turn changes. can probably use currentPlayerToken from events.js if we require the file first? Going to try that - circular dependency? Got rid of line that was requiring events.js and code still functioned fine.
// to get changeTurnSuccess to work, had to make it take in the player, and then when invoking changeTurnSuccess in events.js had to pass currentPlayerToken as the argument. Had to invoke changeTurnSuccess in both parts of the if...else statement governing changing player turn otherwise it just kept saying player o.

const changeTurnSuccess = function (player) {
  // take in a player argument
  $('#message').text(`Your turn, Player ${player}!`)
  // tell the player it's their turn
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changeTurnSuccess ran. Current player is', player)
}

const changeTurnFailure = function () {
  // trying to have this apply only when game is over, it'll say Game Over.
  // added this to the else/return statement for when the game is over in events.js file.
  $('#message').text('Game Over, Play Again!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changeTurnFailure ran.')
}


module.exports = {
  changeTurnSuccess,
  changeTurnFailure
}
