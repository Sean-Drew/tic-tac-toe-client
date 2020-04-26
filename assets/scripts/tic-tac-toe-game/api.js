'use strict'

const config = require('../config')
const store = require('../store')

const indexGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// id: currentGameId,
// index: targetId,
// gameToken: currentPlayerToken,
// over: gameOver

const updateGameBoard = function (dataObj) {
  return $.ajax({
    url: config.apiUrl + '/games/' + dataObj.id,
    method: 'PATCH',
    // vv expecting an object with a game property, et al. See docs.
    data: {
      "game": {
        "cell": {
          "index": dataObj.index,
          "value": dataObj.gameToken
        },
        "over": dataObj.over
      }
  },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexGame,
  newGame,
  updateGameBoard
}
