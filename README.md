# Sparta JQuery TicTacToe Lab


### Description
In this project I worked independently to develop a functional tic tac toe game using JQuery. 
### Installation 
To download code visit the github repo name Sparta-JQuery-TicTacToe and click the clone or download button to download as zip.
Alternatively the following command can be copied into the terminal:

``git clone hub.com/isabelvalente/Sparta-JQuery-TicTacToe.git``


### Challenges
The major challenge in this project was to make the code DRY as I have used many if statements. It was also very challenging to develop a functional reset button. Currently the reset does wipe the board but once the board is wiped, if it is played again, the styles are not functioning.  
### Code snippets
Here I have used the .empty method to remove the innerHTML when the reset button is clicked. For the crosses I have also added the .clear class to change the background from black to white again once the reset button has been clicked.

    $('#reset').click(function(event){
      if ($(data.innerHTML == 'X')) {
        $(data.empty());
        $(data.addClass('clear'));
      } if else {
        $(data.empty());
      }
    });
