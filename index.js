let home = 0
let away = 0
let period = 0

let perionNo = document.getElementById("period-No")
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let homeTeam = document.getElementById("home-team")
let awayTeam = document.getElementById("away-team")

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

function lead() {
    if (home > away) {
        homeTeam.style.color = "#00FF00" // green
        awayTeam.style.color = "#FF0000" // red
    } else if (away > home) {
        awayTeam.style.color = "#00FF00" // green
        homeTeam.style.color = "#FF0000" // red
    } else {
        homeTeam.style.color = "#EEEEEE" // white
        awayTeam.style.color = "#EEEEEE" // white
    }
}

function addPointHome1() {
    home += 1
    homeScore.textContent = home
    lead()
}

function addPointHome2() {
    home += 2
    homeScore.textContent = home
    lead()
}

function addPointHome3() {
    home += 3
    homeScore.textContent = home
    lead()
}

function addPointAway1() {
    away += 1
    awayScore.textContent = away
    lead()
}

function addPointAway2() {
    away += 2
    awayScore.textContent = away
    lead()
}

function addPointAway3() {
    away += 3
    awayScore.textContent = away
    lead()
}