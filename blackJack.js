let player = {
    name: "Your score",
    chips: 200
}
let cards = []
let sum = 0
let tries = 0
let blackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let noteEl = document.getElementById("note-el")
let triesEl = document.getElementById("tries-el")

playerEl.textContent = player.name + ": " + player.chips + "$"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    if (tries != 30) {
        let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    blackjack = false
    noteEl.textContent = ""
    tries += 1
    triesEl.textContent = "Tries: " + tries
    player.chips = player.chips - 5
    playerEl.textContent = player.name + ": " + player.chips + "$"
    renderGame()
    } else if (tries === 30) {
        messageEl.textContent = "Ooops! You've run out of tries! Refresh the page to start again!"
    }
    if (player.chips === 0) {
        messageEl.textContent = "Ooops! There's no money left! Refresh the page to start again!"
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    const lastIndex = cards.length - 1
    for (let i = 0; i < cards.length; i++) {
        if (i === lastIndex) {
            cardsEl.textContent += cards[i]
        } else {
        cardsEl.textContent += cards[i] + ", "
        }
    }
    sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw another card?"
    
} else if (sum === 21) {
    message = "You've got a blackjack!"
    blackjack = true
    player.chips += 40
    playerEl.textContent = player.name + ": " + player.chips + "$"
} else {
    message = "You've lost this round!"
    isAlive = false
    player.chips = player.chips - 10
    playerEl.textContent = player.name + ": " + player.chips + "$"
}
messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && blackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}