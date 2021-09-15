var dice1Number = Math.floor(Math.random() * 6) + 1;
var dice2Number = Math.floor(Math.random() * 6) + 1;
document
    .querySelector("#img1")
    .setAttribute("src", `images/dice${dice1Number}.png`);
document
    .querySelector("#img2")
    .setAttribute("src", `images/dice${dice2Number}.png`);

if (dice1Number > dice2Number) {
    document.querySelector("h1").innerHTML = "Player 1 won ⛳";
} else if (dice1Number < dice2Number) {
    document.querySelector("h1").innerHTML = "Player 2 won ⛳";
} else {
    document.querySelector("h1").innerHTML = "Draw 🤯";
}