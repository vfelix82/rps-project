//BACK E
var youwinSound = new Audio('audio/youwin.mp3');

function Game(playerOneTurn, playerTwoTurn, scores, playerOne, playerTwo) {
  this.playerOneTurn = playerOneTurn;
  this.playerTwoTurn = playerTwoTurn;
  this.scores = scores;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

Game.prototype.changePlayer = function(){
  if (this.playerOneTurn === true) {
    this.playerOneTurn = false;
    this.playerTwoTurn = true;
  }
  else if (this.playerTwoTurn === true) {
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
  }
}

Game.prototype.charChoiceDisplay = function() {
  $("#charChoice").text("Player 1: " + this.playerOneChar);
}

//PAGE NAVIGATION FUNCTIONS
function toStart() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").show();
}

function toChars() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page2").show();
  $(".page1").hide();
}

function toStage() {
  $(".page4").hide();
  $(".page3").show();
  $(".page2").hide();
  $(".page1").hide();
}

Game.prototype.toFight =function() {
  $(".page4").show();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").hide();
  $("#playerOneName").text(this.playerOneChar + "'s" + " " + "Score:");
  $("#playerTwoName").text(this.playerTwoChar + "'s" + " " + "Score:");
  $("#playerOneIconName").text(this.playerOneChar);
  $("#playerTwoIconName").text(this.playerTwoChar);
}

Game.prototype.getWinner = function() {
  if (inputOne !== "" && inputTwo !== "") {
    if (inputOne === "rock" && inputTwo === "scissors") {
      this.scores[0] += 1;
    } else if (inputOne === "rock" && inputTwo === "paper")  {
      this.scores[2] += 1;
    } else if (inputOne === "rock" && inputTwo === "rock")  {
      this.scores[1] += 1;
      $("#tieMessage").text("TIE! Roll again.");
    } else if (inputOne === "paper" && inputTwo === "rock") {
      this.scores[0] += 1;
    } else if (inputOne === "paper" && inputTwo === "scissors")  {
      this.scores[2] += 1;
    } else if (inputOne === "paper" && inputTwo === "paper")  {
      this.scores[1] += 1;
      $("#tieMessage").text("TIE! Roll again.");
    } else if (inputOne === "scissors" && inputTwo === "paper") {
      this.scores[0] += 1;
    } else if (inputOne === "scissors" && inputTwo === "rock")  {
      this.scores[2] += 1;
    } else if (inputOne === "scissors" && inputTwo === "scissors")  {
      this.scores[1] += 1;
      $("#tieMessage").text("TIE! Roll again.");
    }
    $("#playerOneScore").text(this.scores[0]);
    $("#playerTwoScore").text(this.scores[2]);
    $("#p1checkMark").html("");
    $("#p2checkMark").html("");
    this.Victory();
    inputOne = "";
    inputTwo = "";
  }
}
var inputOne = "";
var inputTwo = "";

Game.prototype.Victory = function() {
  if (this.scores[0] >= 10) {
    youwinSound.play();
    $("#scoreColumn").hide();
    $("#win-details").html("<h1>The winner is " + this.playerOneChar + "!</h1>");
    $("#win-page").show();
  }
  else if (this.scores[2] >= 10) {
    youwinSound.play();
    $("#scoreColumn").hide();
    $("#win-details").html("<h1>The winner is " + this.playerTwoChar + "!</h1>");
    $("#win-page").show();
  }
}

//FRONT END LOGIC

$(document).ready(function () {
  var arnoldSound = new Audio('audio/daddy.wav');
  var batmanSound = new Audio('audio/batman.wav');
  var jokerSound = new Audio('audio/joker.mp3');
  var donaldSound = new Audio('audio/donald.wav');
  var oprahSound = new Audio('audio/oprah.mp3');
  var ellenSound = new Audio('audio/ellen.wav');
  var predatorSound = new Audio('audio/predator.wav');
  var hillarySound = new Audio('audio/hillary.mp3');
  var newGame = new Game(true, false, [0,0,0], "human", "comp");
  toStart();
//CHOOSE YOUR FIGHTER CLICK FUNCTION
  $(".fighters").click(function(event) {
    event.preventDefault();
    var selection = $(this)[0].id;
    console.log(selection);

//IF PLAYING AGAINST COMPUTER
      if(newGame.playerTwo === "comp") {
        newGame.playerTwoChar = "Terminator";
        $("#p-two-rock").hide();
        $("#p-two-paper").hide();
        $("#p-two-scissors").hide();
      if (selection === "batman"){
        newGame.playerOneChar = "Batman";
        batmanSound.play();
        $("#player1").html('<img id="batmanImage" src="http://cdn3.darkhorizons.com/wp-content/uploads/2017/07/reeves-the-batman-will-begin-an-arc.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        jokerSound.play();
        $("#player1").html('<img id="batmanImage" src="https://vignette.wikia.nocookie.net/batman/images/2/22/The_Joker_smile.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        donaldSound.play();
        $("#player1").html('<img id="batmanImage" src="https://cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        hillarySound.play();
        $("#player1").html('<img id="batmanImage" src="http://c6.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/why-hell-hillary-clinton-comparing-herself-wonder-woman.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        arnoldSound.play();
        $("#player1").html('<img id="batmanImage" src="http://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        predatorSound.play();
        $("#player1").html('<img id="batmanImage" src="https://www.sideshowtoy.com/wp-content/uploads/2013/03/350x350-hottoys-Predator.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        oprahSound.play();
        $("#player1").html('<img id="batmanImage" src="https://ewedit.files.wordpress.com/2015/01/oprah_l-24.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        ellenSound.play();
        $("#player1").html('<img id="batmanImage" src="http://media.breitbart.com/media/2017/05/EllenDeGeneresTrumpNotWelcome-640x480.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
    }
//IF PLAYING AGAINST PLAYER
    else if(newGame.playerTwo === "human" && newGame.playerOneChar === undefined) {
      if (selection === "batman"){
        newGame.playerOneChar = "Batman";
        batmanSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://cdn3.darkhorizons.com/wp-content/uploads/2017/07/reeves-the-batman-will-begin-an-arc.jpg" />');
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        jokerSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://vignette.wikia.nocookie.net/batman/images/2/22/The_Joker_smile.jpg" />');
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        donaldSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg" />');
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        hillarySound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://c6.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/why-hell-hillary-clinton-comparing-herself-wonder-woman.jpg" />');
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        arnoldSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg" />');
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        predatorSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://www.sideshowtoy.com/wp-content/uploads/2013/03/350x350-hottoys-Predator.jpg" />');
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        oprahSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://ewedit.files.wordpress.com/2015/01/oprah_l-24.jpg" />');
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        ellenSound.play();
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://media.breitbart.com/media/2017/05/EllenDeGeneresTrumpNotWelcome-640x480.jpg" />');
      }
    }
    else if(newGame.playerTwoTurn === true){
      if(selection === "batman") {
        newGame.playerTwoChar = "Batman";
        batmanSound.play();
        newGame.changePlayer();
        $("#player2").html('<img id="batmanImage" src="http://cdn3.darkhorizons.com/wp-content/uploads/2017/07/reeves-the-batman-will-begin-an-arc.jpg" />');
        toStage();
      }
      else if(selection === "joker") {
        newGame.playerTwoChar = "Joker";
        jokerSound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="https://vignette.wikia.nocookie.net/batman/images/2/22/The_Joker_smile.jpg" />');
        toStage();
      }
      else if(selection === "trump") {
        newGame.playerTwoChar = "Trump";
        donaldSound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="https://cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg" />');

        toStage();
      }
      else if(selection === "hillary") {
        newGame.playerTwoChar = "Hillary";
        hillarySound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="http://c6.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/why-hell-hillary-clinton-comparing-herself-wonder-woman.jpg" />');
        toStage();
      }
      else if(selection === "arnold") {
        newGame.playerTwoChar = "Arnold";
        arnoldSound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="http://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg" />');
        toStage();``
      }
      else if(selection === "predator") {
        newGame.playerTwoChar = "Predator";
        predatorSound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="https://www.sideshowtoy.com/wp-content/uploads/2013/03/350x350-hottoys-Predator.jpg" />');
        toStage();
      }
      else if(selection === "oprah") {
        newGame.playerTwoChar = "Oprah";
        oprahSound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="https://ewedit.files.wordpress.com/2015/01/oprah_l-24.jpg" />');
        toStage();
      }
      else if(selection === "ellen") {
        newGame.playerTwoChar = "Ellen";
        ellenSound.play();
        newGame.changePlayer();
        $("#player2").html('<img src="http://media.breitbart.com/media/2017/05/EllenDeGeneresTrumpNotWelcome-640x480.jpg" />');
        toStage();
      }
    };
  });
//STAGE SELECTION CLICK FUNCTION
  $(".stages").click(function(event) {
    event.preventDefault();
    var selection = $(this)[0].id;
    if (selection === "epicodus"){
      $("body").removeClass();
      $("body").addClass("epicodus");
    }
    if (selection === "jungle"){
      $("body").removeClass();
      $("body").addClass("jungle");
    }
    if (selection === "oval"){
      $("body").removeClass();
      $("body").addClass("oval");
    }
    if (selection === "boxing"){
      $("body").removeClass();
      $("body").addClass("boxing");
    }
    if (selection === "oprahStage"){
      $("body").removeClass();
      $("body").addClass("oprahStage");
    }
    if (selection === "arkham"){
      $("body").removeClass();
      $("body").addClass("arkham");
    }
  });
//PVP OR VS CPU CLICK FUNCTIONS
  $("#pvp").click(function () {
    newGame.playerTwo = "human";
    toChars();
  });
  $("#cpu").click(function () {
    newGame.playerTwo = "comp";
    toChars();
  });
  $("#fight").click(function () {
    newGame.toFight();
  });
  $("#newgame").click(function () {
    location.reload();
  });

//KEYPRESS FUNCTIONS

  $(document).keypress(function(e) {
    if(e.originalEvent.keyCode == 113) {
      $("#p-one-rock").click();
    }
    else if(e.originalEvent.keyCode == 119) {
      $("#p-one-paper").click();
    }
    else if(e.originalEvent.keyCode == 101) {
      $("#p-one-scissors").click();
    }
    else if(e.originalEvent.keyCode == 105) {
      $("#p-two-rock").click();
    }
    else if(e.originalEvent.keyCode == 111) {
      $("#p-two-paper").click();
    }
    else if(e.originalEvent.keyCode == 112) {
      $("#p-two-scissors").click();
    }
  });

//PLAYER ONE ROCK BUTTON
  $("#p-one-rock").click(function(event) {
    event.preventDefault();
    $("#tieMessage").text("");
    $("#p1checkMark").html("&#10003");
    inputOne = "rock";
    if(newGame.playerTwo === "comp") {
      inputTwo = Math.floor(Math.random() * 3 + 1);
      if(inputTwo === 1) {
        inputTwo = "rock";
      }
      else if(inputTwo === 2){
        inputTwo = "paper";
      }
      else if(inputTwo === 3){
        inputTwo = "scissors";
      }
    }
    newGame.getWinner();
  });

  //PLAYER ONE PAPER BUTTON
  $("#p-one-paper").click(function(event) {
    event.preventDefault();
    inputOne = "paper";
    $("#tieMessage").text("");
    $("#p1checkMark").html("&#10003");
    if(newGame.playerTwo === "comp") {
      inputTwo = Math.floor(Math.random() * 3 + 1);
      if(inputTwo === 1) {
        inputTwo = "rock";
      }
      else if(inputTwo === 2){
        inputTwo = "paper";
      }
      else if(inputTwo === 3){
        inputTwo = "scissors";
      }
    }
    newGame.getWinner();
  });

  //PLAYER ONE SCISSORS BUTTON
  $("#p-one-scissors").click(function(event) {
    event.preventDefault();
    inputOne = "scissors";
    $("#tieMessage").text("");
    $("#p1checkMark").html("&#10003");
    if(newGame.playerTwo === "comp") {
      inputTwo = Math.floor(Math.random() * 3 + 1);
      if(inputTwo === 1) {
        inputTwo = "rock";
      }
      else if(inputTwo === 2){
        inputTwo = "paper";
      }
      else if(inputTwo === 3){
        inputTwo = "scissors";
      }
    }
    newGame.getWinner();
  });

  //PLAYER TWO BUTTONS
  $("#p-two-rock").click(function(event) {
    event.preventDefault();
    inputTwo = "rock";
    $("#p2checkMark").html("&#10003");
    newGame.getWinner();
  });
  $("#p-two-paper").click(function(event) {
    event.preventDefault();
    inputTwo = "paper";
    $("#p2checkMark").html("&#10003");
    newGame.getWinner();
  });
  $("#p-two-scissors").click(function(event) {
    event.preventDefault();
    inputTwo = "scissors";
    $("#p2checkMark").html("&#10003");
    newGame.getWinner();
  });

//REPLAY BUTTON
  $("#replay").click(function () {
    newGame.scores = [0, 0, 0];
    $("#win-page").hide();
    $("#scoreColumn").show();
    $("#playerOneScore").text("");
    $("#playerTwoScore").text("");
    $("#tieMessage").text("");
  });

//PAGE 2 BACK BUTTON
$("#p2back").click(function () {
  location.reload();
  });

$("#p3back").click(function () {
  location.reload();
  });
});
