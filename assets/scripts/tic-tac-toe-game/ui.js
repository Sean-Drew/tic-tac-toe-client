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
  // console.log('changeTurnSuccess ran. Current player is', player)
}

const winnerNotice = function (player) {
  // trying to have this apply only when game is over, it'll say Game Over.
  // added this to the else/return statement for when the game is over in events.js file.
  $('#message').text(`Game Over, winner is ${player}`)
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('winnerNotice ran. Winner is ', player)
}

const gameTie = function () {
  $('#message').text(`Game Over, it's a tie!`)
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('gameTie ran. Stalemate')
}

const invalidMove = function () {
  $('#message').text(`Invalid move!`)
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('Invalid Move - ui')
}

const gameIndexSuccess = function (data) {
  $('#message').text('Showed game list successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(`gameIndexSuccess ran. Data is:`, data)

  // create array of all games
  const gamesArray = data.games
  // filter games array for only completed games
  const completedGames = gamesArray.filter((game) => game.over === true)
  // console.log(completedGames)

  // let gameList = ''
  //
  // data.games.forEach(game => {
  //   const gameHtml = (`
  //   <div>ID: ${game.id}</div>
  //   <div>${game.cells}</div>
  //   `)
  //   gameList += gameHtml
  // })

  $('#game-display').html(`You've completed ${completedGames.length} games.`)
}

const gameIndexFailure = function (error) {
  $('#message').text('Failed to show game list!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`gameIndexFailure ran. Error is:`, error)
}

const newGameSuccess = function (data) {
  $('#message').text('Created new game successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(`newGameSuccess ran. Data is:`, data)

  const newBoard = (`
  <div class="row board">
    <div id="0" class="col-4 box"></div>
    <div id="1" class="col-4 box"></div>
    <div id="2" class="col-4 box"></div>
    <div id="3" class="col-4 box"></div>
    <div id="4" class="col-4 box"></div>
    <div id="5" class="col-4 box"></div>
    <div id="6" class="col-4 box"></div>
    <div id="7" class="col-4 box"></div>
    <div id="8" class="col-4 box"></div>
  </div>
  `)
  $('#game-board').html(newBoard)
}

const newGameFailure = function (error) {
  $('#message').text('Failed to create new game!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`newGameFailure ran. Error is:`, error)
}

module.exports = {
  changeTurnSuccess,
  winnerNotice,
  gameTie,
  invalidMove,
  gameIndexSuccess,
  gameIndexFailure,
  newGameSuccess,
  newGameFailure
}
