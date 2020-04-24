'use strict'

const api = require('./api')
const ui = require('./ui')

let currentPlayerToken = "x"
let gameBoard = ["","","","","","","","",""]
let gameOver = false
// ^^ using 'let' on the above 3 because the values may change over the course of the game.

const onTokenAdd = function (event) {
  // function to add a game token with conditional statements about when and where tokens can be added.
  // tokens cannot be added to spaces already taken, tokens cannot be added after the game is over.
  // check to see if game is over before adding a new token.
  // check to see if game board is full but not won (tie) before adding a new token.
  if (gameOver === false) {
    // if the game is not over, run the following code
    console.log(event.target.id)
    const target = event.target
    const targetId = target.id
    if ($(target).text() === 'x' || $(target).text() === 'o') {
      ui.invalidMove()
      console.log('invalid move')
    } else {
      // this is html work vv
      $(target).text(currentPlayerToken)
      // call game board function vv
      gameBoard[targetId] = currentPlayerToken
      // change players after a move vv
      checkForWin()
      // ^^ DON'T FORGET TO INVOKE FUNCTIONS! EVERY TIME YOU WANT TO USE IT! (blue = invoked)
      if (isGameBoardFull()) {
        // ^^ DON'T FORGET TO INVOKE FUNCTIONS! EVERY TIME YOU WANT TO USE IT! (blue = invoked)
        console.log('Game Over')
        gameOver = true
        return
      }
      if (gameOver === false) {
        if (currentPlayerToken === 'x') {
          currentPlayerToken = 'o',
          ui.changeTurnSuccess(currentPlayerToken)
        } else {
          currentPlayerToken = 'x',
          ui.changeTurnSuccess(currentPlayerToken)
        } console.log(gameBoard)
      }
    }
  } else {
    ui.winnerNotice(currentPlayerToken)
    console.log('Game is over')
    return
    // specifically tell it to stop if the game IS over, don't presume the game will stop automatically. Even though it should, we want to make sure it does.
  }
}

const isGameBoardFull = function () {
  // function to check if the game board is full.
  let fullBoard = false
  //added a counter here to keep track of whether each array value is !== "" (not equal to an empty string)
  let counter = 0
  console.log('game board is ', gameBoard)
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] !== "") {
      counter += 1
      //if an instance of the array is !== "" (not equal to an empty string) then the counter increases by 1
    }
  } if (counter >= 9) {
    fullBoard = true
    //if the counter is 9+ then the game board is full. Don't need an else statement because the default state of fullBoard is defined above as false.
  }
    console.log('counter is ', counter)
    console.log('fullBoard is ', fullBoard)
    return fullBoard
    //will return fullBoard = true if all array values have anything inside them (for this, any game token). will return fullBoard = false if any of the array values are an empty string (no game token placed yet)
}

const checkForWin = function () {
  // declare all the win conditions and check if any of them have been met.
  // if we use currentPlayerToken we don't have to specify each player for the win condition checks. This will also help provide more flexible code so if the game tokens change we don't have to modify the code as much later on, and can interpolate currentPlayerToken as well.
  if (gameBoard[0] === currentPlayerToken && gameBoard[1] === currentPlayerToken && gameBoard[2] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[0] === currentPlayerToken && gameBoard[3] === currentPlayerToken && gameBoard[6] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[0] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[8] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[1] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[7] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[2] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[6] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[2] === currentPlayerToken && gameBoard[5] === currentPlayerToken && gameBoard[8] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[3] === currentPlayerToken && gameBoard[4] === currentPlayerToken && gameBoard[5] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  } else if (gameBoard[6] === currentPlayerToken && gameBoard[7] === currentPlayerToken && gameBoard[8] === currentPlayerToken) {
    console.log(`Game Over, ${currentPlayerToken} wins!`)
    gameOver = true
  }
}

const onIndexGame = function (event) {
  event.preventDefault()
  console.log(event)
  api.indexGame()
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}

module.exports = {
  onTokenAdd,
  isGameBoardFull,
  checkForWin,
  currentPlayerToken,
  onIndexGame
}
