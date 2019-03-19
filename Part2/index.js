var suits = document.getElementById("Suit");
var color = document.getElementById("Color");

function setCard(){
    var card = document.getElementById(suits.value);
    console.log(card)
    card.style.color = color.value;
}

function reset () {
    location.reload();
}