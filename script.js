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
]

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
}

function play() {
	let k = player1Hand.pop() // draw one card for player1
	cardTable.push(k)	      // add it to the middle of the table
	let m = player2Hand.pop() // draw one card for player2
	cardTable.push(m)		  // add it to the middle of the table
	battle(k, m)              // invoke the 'battle' function
} 

function battle(a,b) {
	if (a.value > b.value) {   
		while (cardTable.length !== 0) { 
			player1Hand.unshift(cardTable.pop())       
		}
		cardTable = [] 
		console.log("Player One plays " + a.value + " of " + a.suit + ". Player Two plays " + b.value + " of " + b.suit + ". Player One wins the round!")
		console.log("End of round " + roundNumber + "! Player One has " + player1Hand.length + " cards left. Player Two has " + player2Hand.length + " cards left.")
		roundNumber++
	} else if (a.value < b.value) { 
		while (cardTable.length !== 0) { 
			player2Hand.unshift(cardTable.pop())        
		}
		cardTable = [] 
		console.log("Player One plays " + a.value + " of " + a.suit + ". Player Two plays " + b.value + " of " + b.suit + ". Player Two wins the round!")
		console.log("End of round " + roundNumber + "! Player One has " + player1Hand.length + " cards left. Player Two has " + player2Hand.length + " cards left.")
		roundNumber++
    } else {
  		if (player1Hand.length < 4) {
			  notEnoughCardsPlayerOne = true
			  return
		}
  		if (player2Hand.length < 4) {
			  notEnoughCardsPlayerTwo = true
			  return
		}
		console.log("Player One plays " + a.value + " of " + a.suit + ". Player Two plays " + b.value + " of " + b.suit + ". It's War!")
		war()
  	}
}

function war() {
	for (let n = 0; n < 3; n++) { 
		let o = player1Hand.pop()
		cardTable.push(o)
		let p = player2Hand.pop()
		cardTable.push(p)	 
	}     
}

shuffle(warDeckCards);
const player1Hand = warDeckCards.slice(0,26)
const player2Hand = warDeckCards.slice(26)
let cardTable = []
let roundNumber = 0
let notEnoughCardsPlayerOne = false
let notEnoughCardsPlayerTwo = false

function start() {
	while (player1Hand.length !== 0 || player2Hand.length !== 0 || notEnoughCardsPlayerOne === true || notEnoughCardsPlayerTwo === true) {
		play()
	}
	if (player1Hand.length === 0) {
		console.log('PLAYER TWO WINS!!!')
	}
	if (player2Hand.length === 0) {
		console.log('PLAYER ONE WINS!!!')
	}
	if (notEnoughCardsPlayerOne === true) {
		console.log('PLAYER TWO WINS!!!')
	}
	if (notEnoughCardsPlayerTwo === true) {
		console.log('PLAYER ONE WINS!!!')
	}
}

start()

