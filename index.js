let home = 0
let guest = 0
let period = 0

let perionNo = document.getElementById("period-No")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function newGame() {
    home = 0
    guest = 0
    period = 0
    perionNo.textContent = period
    homeScore.textContent = home
    guestScore.textContent = guest
}

function addPeriodNo() {
    period += 1
    perionNo.textContent = period
}

function addPointHome1() {
    home += 1
    homeScore.textContent = home
}

function addPointHome2() {
    home += 2
    homeScore.textContent = home
}

function addPointHome3() {
    home += 3
    homeScore.textContent = home
}

function addPointGuest1() {
    guest += 1
    guestScore.textContent = guest
}

function addPointGuest2() {
    guest += 2
    guestScore.textContent = guest
}

function addPointGuest3() {
    guest += 3
    guestScore.textContent = guest
}

