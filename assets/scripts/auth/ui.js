'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is:', data)
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is:', data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is:', data)
  store.user = data.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure ran. Error is:', data)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
