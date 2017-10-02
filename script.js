function myFunction() {
  var pl2 = prompt("Player One, do you choose: Rock, Paper, or Scissors"); //asks the first player to make a choice
  var pl1 = prompt("Player Two, do you choose: Rock, Paper, or Scissors"); //asks the second player to make a choice
  if(pl1==="Rock"&&pl2==="Scissors"||pl1==="Paper"&&pl2==="Rock"||pl1==="Scissors"&&pl2==="Paper"){ //a complex if statement (thanks to my Java experience) containing all the possibilities of the second player winning 
    alert("Player Two just won that one!"); //displays result
  }
  else if(pl1==pl2){ //if player one has the same value as player two
    alert("Tis a tie!"); //display that it's a tie
  }else if(! (pl1==="Rock"&&pl2==="Scissors"||pl1==="Paper"&&pl2==="Rock"||pl1==="Scissors"&&pl2==="Paper")){ //another complex if statment! However, this contains the possibilities of the first player winning
    alert("Player One just won that one!"); //displays result
  }
}
