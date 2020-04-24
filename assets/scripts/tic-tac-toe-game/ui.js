'use strict'

const store = require('../store')

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

const winnerNotice = function (player) {
  // trying to have this apply only when game is over, it'll say Game Over.
  // added this to the else/return statement for when the game is over in events.js file.
  $('#message').text(`Game Over, winner is ${player}`)
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('winnerNotice ran. Winner is ', player)
}

const gameTie = function () {
  $('#message').text(`Game Over, it's a tie!`)
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('gameTie ran. Stalemate')
}

const invalidMove = function () {
  $('#message').text(`Invalid move!`)
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('Invalid Move - ui')
}

const gameIndexSuccess = function (data) {
  $('#message').text('Showed game list successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`gameIndexSuccess ran. Data is:`, data)

  let gameList = ''

  data.games.forEach(game => {
    const gameHtml = (`
        <h4>Title: ${movie.title}</h4>
        <p>Director: ${movie.director}</p>
        <p>ID: ${movie._id}</p>
      `)
    gameList += gameHtml
  })
  $('#game-display').html(gameList)
}

const gameIndexFailure = function (error) {
  $('#message').text('Failed to show game list!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`gameIndexFailure ran. Error is:`, error)
}

module.exports = {
  changeTurnSuccess,
  winnerNotice,
  gameTie,
  invalidMove,
  gameIndexSuccess,
  gameIndexFailure
}
