var arr = [];

function play(parameter){
 var player = document.getElementById("player"); //player X
 var row = document.getElementById(parameter); // parameterth square
 if(player.innnerText === "X"){
     player.innnerText = "O" 
     row.innerText = "X"
     arr[parameter] = "X"
    }
 else{
     player.innnerText = "X"
     row.innerText = "O"
     arr[parameter] = "O"
    }
  let square1 = arr[0] 
  let square2 = arr[1]      
  let square3 = arr[2] 
  let square4 = arr[3] 
  let square5 = arr[4] 
  let square6 = arr[5]
  let square7 = arr[6]
  let square8 = arr[7]
  let square9 = arr[8]

  if (square1 !== undefined && square1 === square2 && square1 === square3) {
    window.alert(`${square1} is the winner`);
    resetGame();
    
  } else if (square1 !== undefined && square1 === square4 && square1 === square7) {
    window.alert(`${square1} is the winner`);
    resetGame();
  } else if (square1 !== undefined && square1 === square5 && square1 === square9) {
    window.alert(`${square1} is the winner`);
    resetGame();
 
  } else if (square2 !== undefined && square2 === square5 && square2=== square8) {
    window.alert(`${square2} is the winner`);
    resetGame();
  } 
    else if (square3 !== undefined && square3 === square5 && square3=== square7) {
    window.alert(`${square3} is the winner`);
    resetGame();
  } 
    else if (square3 !== undefined && square3 === square6 && square3=== square9) {
    window.alert(`${square3} is the winner`);
    resetGame();
  } else if (square4 !== undefined && square4 === square5 && square4=== square6) {
    window.alert(`${square4} is the winner`);
    resetGame();
  } else if (square7 !== undefined && square7 === square8 && square3=== square9) {
    window.alert(`${square7} is the winner`);
    resetGame();
  } else {
        let boardFull = true
        for(let i = 0; i <= 8; i++){
            if(arr[i] === undefined){
                boardFull = false
            }
        }
        if(boardFull === true){
            window.alert("Cat's game, there is no winner")
            resetGame();
        }
    }
}

function resetGame(){
    for (let index = 0; index < 9; index++) {
        document.getElementById(index).innerText = "";
        
    }
    arr = [];
}