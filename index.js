let homeCount = 0;
let homeScore = document.getElementById("homeScore")
function plusOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount
}
function plusTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount
}
function plusThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount
}

let guestCount = 0;
let guestScore = document.getElementById("guestScore")

function plusOneGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount
}
function plusTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount
}
function plusThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount
}

function reset() {
    guestCount = 0;
    homeCount = 0;
    document.getElementById("homeScore").innerText = homeCount
    document.getElementById("guestScore").innerText = guestCount

}
