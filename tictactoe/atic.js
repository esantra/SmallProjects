//will need ot refactor a bit
var userChoice = "";
$(document).ready(function() {
    var play = 1;
    var computerChoice;
    var playerChoice;
    var p1;
    var compPlayer;

    getConfirmation().then(function(answer) {
        restart();
        $("#0, #1, #2, #3, #4, #5, #6, #7, #8").click(function() {
            if ($(this).text() === "") {
                $(this).text(p1);
                computerMoves().then(function(answer) {
                    play++;
                    if (win() != -1 && win() !== "") {
                        if (win() == p1) {
                            alert("Player 1 is the winner!");

                        } else {
                            alert("Computer is the winner!");
                        }
                        restart();
                    }
                }); //end computer moves then
            }
        });
    });

    function restart() {
        $("#0, #1, #2, #3, #4, #5, #6, #7, #8").text('');
        //start
        playerChoice = getChoice();
        computerChoice = "O";
        if (playerChoice === "O") {
            computerChoice = "X";
        } else if (playerChoice === "X") {
            computerChoice = "O";
        } else {
            console.log('player choice not made ' + playerChoice);
            alert("You must choose Xs or Ox");
        }

        p1 = playerChoice;
        compPlayer = computerChoice;
    }

    function getConfirmation() {
        var defer = $.Deferred();
        var dialog = $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "O": function() {
                    $(this).dialog("close");
                    setChoice("O");
                    defer.resolve("true");
                },
                "X": function() {
                    $(this).dialog("close");
                    setChoice("X");
                    defer.resolve("true");
                }
            }
        });
        return defer.promise();
    }

    function setChoice(choice) {
        userChoice = choice;
    }

    function getChoice() {
        return userChoice;
    }

    function computerMoves() {
        defer = $.Deferred();
        var emptys = [];
        for (j = 0; j < 9; j++) {
            if ($("#" + j).text() !== 'X' && $("#" + j).text() !== 'O') {
                emptys.push(j);
            }
        }
        if (emptys.length > 0) {
            var rMax = emptys.length;
            var randNum = getRandomInt(0, rMax);
            $('#' + emptys[randNum]).text(computerChoice);
            defer.resolve("true");
        } else if (emptys.length < 1) {
          if (win() != -1 && win() !== "") {
              if (win() == p1) {
                  alert("Player 1 is the winner!");

              } else {
                  alert("Computer is the winner!");
              }
              restart();
          } else {
            alert('It is a tie!');
            restart();
            defer.resolve("true");
          }
        }
        return defer.promise();
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function win() {
        var s0 = $("#0").text();
        var s1 = $("#1").text();
        var s2 = $("#2").text();
        var s3 = $("#3").text();
        var s4 = $("#4").text();
        var s5 = $("#5").text();
        var s6 = $("#6").text();
        var s7 = $("#7").text();
        var s8 = $("#8").text();

        var winningCombinations = [
            [s0, s1, s2],
            [s3, s4, s5],
            [s6, s7, s8],
            [s0, s3, s6],
            [s1, s4, s7],
            [s2, s5, s8],
            [s0, s4, s8],
            [s2, s4, s6]
        ];

        for (i = 0; i < winningCombinations.length; i++) {

            if (winningCombinations[i][0] === p1 &&
                winningCombinations[i][1] === p1 &&
                winningCombinations[i][2] === p1) {
                return p1;
            }

            if (winningCombinations[i][0] === compPlayer &&
                winningCombinations[i][1] === compPlayer &&
                winningCombinations[i][2] === compPlayer) {
                return compPlayer;
            }
        }
        return -1;
    }
});
