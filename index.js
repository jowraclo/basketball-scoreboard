let home = 0
let away = 0
let period = 0

let perionNo = document.getElementById("period-No")
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

function newGame() {
    home = 0
    away = 0
    period = 0
    perionNo.textContent = period
    homeScore.textContent = home
    awayScore.textContent = away
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

function addPointAway1() {
    away += 1
    awayScore.textContent = away
}

function addPointAway2() {
    away += 2
    awayScore.textContent = away
}

function addPointAway3() {
    away += 3
    awayScore.textContent = away
}

