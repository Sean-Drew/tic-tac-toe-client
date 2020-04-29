<img src="public/Tic Tac Toe - Transparent Background.png">

---

# Tic Tac Toe Web Browser Game
   This is a web browser tic-tac-toe game.

## General Features:
  - Ability to **sign up** and **log in** as a new user.
  - Ability to **sign out** and **change user password**.
  - Clean user interface with a convenient **'new game' button** to generate a fresh new game board.
  - Ability to use the 'new game' button over and over, to play as many new games as you can!
  - 'Number of Completed Games' button will calculate the number of completed games (ending in a win, loss or stalemate) of the specific user and show this information to you on screen.
  - Tic Tac Toe **standard rules apply** (one token per space, three in a row wins).
  - Convenient user interface notices on successful actions (sign in, sign out, etc).
  - Convenient user interface notices inform user whose turn it is.
  - Messages show the winner of the game, or if the game ends in a stalemate (tie/draw).
  - Intuitive **game engine knows when the game is over** and conveniently disallows further gameplay.
  - Built with mobile devices in mind - **playable on the go!**

## Made possible with the following technology:
  - html
  - css / scss
  - bootstrap
  - jquery
  - javascript
  - github version control
  - ajax
  - rails API
  - cURL

---
## Wireframe:
  - *https://i.imgur.com/UuWkEDr.jpg*

## User Stories:
#### As a user I want to...
  - Be able to sign up and customize/maintain a user profile.
  - Choose my team (team color? team token?)
  - Share my games with friends to social media?
  - Have easy access to the game rules.
  - See who won the game.
  - Know when it's my turn (visual cue).
  - Track my wins.
  - Have the game to be easy/straightforward to play.

---
## Planning and Development:
The planning phase consisted of various elements which were modified as necessary as the project evolved and developed.

Starting with a wireframe and user stories (listed above), development began. **The first step taken was to create user authentication features**, such as signing up a new user, signing in and out an existing user, and changing an existing user's password. Doing this first allowed clearly defined lines between what the user will see when logged in versus what a user will see if they are not logged in. This was then linked to some basic UI elements.

After this the focus shifted on creating some additional basic UI elements such as the game board, **then moving into the game logic**. As the game logic grew and became more complex, some issues/bugs were encountered that needed correction. *Employing a 'thinking out loud' problem solving strategy, ultimately the issues/bugs were corrected.* Over the course of developing the game logic it was ultimately tied into UI elements and the game API.

**The final stretch was relative to styling and layout**. Until this point the game was very basic - no significant styling or formatting. A color scheme was chosen to project a semblance uniformity throughout the page, and so the page overall wouldn't look 'busy' or 'loud', so to speak. Some additional formatting gave the game board the appearance of a classic tic-tac-toe game board (akin to a hashtag #, rather than just a 3x3 block grid).

As the end approached it became clear that some of the 'stretch goals' in mind for the game would not be realistic to implement for version 1.0 and were tabled until such a time that further development and styling can be completed. *Any future versions may include the items listed below in the 'Possible features for future versions' section.*

---
## Possible features for future versions:
  - Formatting/styling modifications.
  - Share with social media.
  - Choose custom team color and/or custom team token.
  - Additional game metrics (track wins, losses, etc).
  - Have easy access to game rules.
  - Custom color schemes.

## Unsolved Problems:
  - N/A
