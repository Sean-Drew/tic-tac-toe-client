'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.log('signUpFailure ran. Error is:', data)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('signInSuccess ran. Data is:', data)
  store.user = data.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
}

const signInFailure = function (error) {
  $('#message').text('Failed to sign in!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.log('signInFailure ran. Error is:', data)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('changePasswordSuccess ran. Data is:', data)
}

const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.log('changePasswordFailure ran. Error is:', data)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran. Data is:', data)
  $('#authenticated').hide()
  $('#unauthenticated').show()
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Failed to sign out!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  console.log('signOutFailure ran. Error is:', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
