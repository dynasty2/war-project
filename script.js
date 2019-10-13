const warDeckCards = [
	{ suit: "Spades", value: 2 }, //creating and nameing cards. placing value
	{ suit: "Spades", value: 3 },
	{ suit: "Spades", value: 4 },
	{ suit: "Spades", value: 5 },
	{ suit: "Spades", value: 6 },
	{ suit: "Spades", value: 7 },
	{ suit: "Spades", value: 8 },
	{ suit: "Spades", value: 9 },
	{ suit: "Spades", value: 10 },
	{ suit: "Spades", value: 11 },
	{ suit: "Spades", value: 12 },
	{ suit: "Spades", value: 13 },
	{ suit: "Spades", value: 14 },
	{ suit: "Diamonds", value: 2 },
	{ suit: "Diamonds", value: 3 },
	{ suit: "Diamonds", value: 4 },
	{ suit: "Diamonds", value: 5 },
	{ suit: "Diamonds", value: 6 },
	{ suit: "Diamonds", value: 7 },
	{ suit: "Diamonds", value: 8 },
	{ suit: "Diamonds", value: 9 },
	{ suit: "Diamonds", value: 10 },
	{ suit: "Diamonds", value: 11 },
	{ suit: "Diamonds", value: 12 },
	{ suit: "Diamonds", value: 13 },
	{ suit: "Diamonds", value: 14 },
	{ suit: "Hearts", value: 2 },
	{ suit: "Hearts", value: 3 },
	{ suit: "Hearts", value: 4 },
	{ suit: "Hearts", value: 5 },
	{ suit: "Hearts", value: 6 },
	{ suit: "Hearts", value: 7 },
	{ suit: "Hearts", value: 8 },
	{ suit: "Hearts", value: 9 },
	{ suit: "Hearts", value: 10 },
	{ suit: "Hearts", value: 11 },
	{ suit: "Hearts", value: 12 },
	{ suit: "Hearts", value: 13 },
	{ suit: "Hearts", value: 14 },
	{ suit: "Clubs", value: 2 },
	{ suit: "Clubs", value: 3 },
	{ suit: "Clubs", value: 4 },
	{ suit: "Clubs", value: 5 },
	{ suit: "Clubs", value: 6 },
	{ suit: "Clubs", value: 7 },
	{ suit: "Clubs", value: 8 },
	{ suit: "Clubs", value: 9 },
	{ suit: "Clubs", value: 10 },
	{ suit: "Clubs", value: 11 },
	{ suit: "Clubs", value: 12 },
	{ suit: "Clubs", value: 13 },
	{ suit: "Clubs", value: 14 }
];
// console.log(warDeckCards);
// console.log(warDeckCards) making sure the cards showed properly 

function shuffle (array) { //https://www.frankmitchell.org/2015/01/fisher-yates/
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
};
shuffle(warDeckCards);
console.log(warDeckCards);

const player1Hand = warDeckCards.slice(0,26)
const player2Hand = warDeckCards.slice(26)

console.log(player1Hand);
console.log(player2Hand);

// console.log(player1Hand.pop());
// console.log(player2Hand.pop());

const battleDeck1 = []
const battleDeck2 = []

k = player1Hand.pop() 
m = player2Hand.pop() 

battleDeck1.unshift(k);
battleDeck2.unshift(m);

console.log(battleDeck1);
console.log(battleDeck2);

var a = battleDeck1[0]
var b = battleDeck2[0]


function battle(a,b) {
	if (a > b) { 
		battleDeck1.pop(a) && battleDeck2.pop(b) && player1Hand.unshift(a,b);
	} else if (a < b) { 
		battleDeck1.pop(a) && battleDeck2.pop(b) && player2Hand.unshift(a,b);
    } else {
  	    function war(a,b,c) {
  	    	player1Hand.pop(a,b,c) && battleDeck1.unshift(a,b,c) && player2Hand.pop(a,b,c) && battleDeck2.unshift(a,b,c);
  	    }
  }
  }	



  // function battle() {
  // 	if 
  // }
// battle(k,m)
// console.log(player1Hand)
// console.log(player2Hand)

// console.log(player1Hand)
// console.log(player2Hand)

// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }













