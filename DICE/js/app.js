// Creo le variabili
let userDice
let pcDice
let message
let userText = document.getElementById('user')
let pcText = document.getElementById('pc')
let winnerText = document.getElementById('message')
// genero numeri casuali
userDice = Math.floor((Math.random() * 6) + 1);
pcDice = Math.floor((Math.random() * 6) + 1)

console.log(userDice, pcDice)
// Dichiaro il vincitore

if (userDice > pcDice) {
    console.log('user vince')
    message = 'Hai vinto! :D'
} else if (userDice === pcDice) {
    console.log('pareggio')
    message = 'Hai pareggiato :/'
} else {
    console.log('pc vince')
    message = 'Hai perso! :('
}


userText.innerHTML += userDice
pcText.innerHTML += pcDice
winnerText.innerHTML = message