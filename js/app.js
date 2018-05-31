$(document).ready(function(){
  // Code goes here


  var $turn = 1;

  // Function to make Xs and Os appear and change the text that shows the player turn

  $('tr td').click(function(event){
    if ($(this).text() === '') {
        if (($turn%2)==1) { $(this).append('X').addClass('X') && $('.playerTurn').text("It is O's turn");
      } else {$(this).append("O").addClass('O') && $('.playerTurn').text("It is X's turn");}
      $turn++;
    }


  });

    var data = $('[data-num]');
    // console.log($(data[0]));


   $('tr').click(function(event){
     // X WIN CONDIITIONS
     if ((data[0].innerHTML == 'X' && data[1].innerHTML == 'X' && data[2].innerHTML == 'X')) {
       alert('X wins!');
     }
     if ((data[3].innerHTML == 'X' && data[4].innerHTML == 'X' && data[5].innerHTML == 'X')) {
       alert('X wins!');
     }
     if ((data[6].innerHTML == 'X' && data[7].innerHTML == 'X' && data[8].innerHTML == 'X')) {
       alert('X wins!');
     }
     if ((data[2].innerHTML == 'X' && data[4].innerHTML == 'X' && data[6].innerHTML == 'X')) {
       alert('X wins!');
     }
     if ((data[0].innerHTML == 'X' && data[4].innerHTML == 'X' && data[8].innerHTML == 'X')) {
       alert('X wins!');
     }
     // O WIN CONDITIONS
     if ((data[0].innerHTML == 'O' && data[1].innerHTML == 'O' && data[2].innerHTML == 'O')) {
       alert('O wins!');
     }
     if ((data[3].innerHTML == 'O' && data[4].innerHTML == 'O' && data[5].innerHTML == 'O')) {
       alert('O wins!');
     }
     if ((data[6].innerHTML == 'O' && data[7].innerHTML == 'O' && data[8].innerHTML == 'O')) {
       alert('O wins!');
     }
     if ((data[2].innerHTML == 'O' && data[4].innerHTML == 'O' && data[6].innerHTML == 'O')) {
       alert('O wins!');
     }
     if ((data[0].innerHTML == 'O' && data[4].innerHTML == 'O' && data[8].innerHTML == 'O')) {
       alert('O wins!');
     }


   });

   // Attempt to make reset button function

    $('#reset').click(function(event){
      if ($(data.innerHTML == 'X')) {
        $(data.empty());
        $(data.addClass('clear'));
      }
      if ($(data.innerHTML == 'O')) {
        $(data.empty());
      }
    });


    console.log($(data.innerHTML));



});
