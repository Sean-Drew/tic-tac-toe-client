'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./tic-tac-toe-game/events')

$(() => {
  // auth related events vv
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // game related events vv
  $('#game-board').on('click', gameEvents.onTokenAdd)
  $('#game-index').on('submit', gameEvents.onIndexGame)
  $('#game-new').on('submit', gameEvents.onNewGame)
})
