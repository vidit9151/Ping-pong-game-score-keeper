const p1Button = document.querySelector("#p1Button"),
  p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;
let isGameOver = false;
let p1Score = 0,
  p2Score = 0;
p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      p2Display.classList.add("loser");
      p1Display.classList.add("winner");
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});
winningScoreSelect.addEventListener("change", () => {
  winningScore = Number(winningScoreSelect.value); //this will refer to the object before the.
  console.log(winningScore);
  reeSEt(); //It will reset whever the winning score is changed⭐⭐
}); //change is hwenever there isa change in value ⭐⭐⭐
reset.addEventListener("click", reeSEt);
function reeSEt() {
  p2Display.classList.remove("loser", "winner");
  p1Display.classList.remove("loser", "winner");
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Score = 0;
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.textContent = p2Score;
  isGameOver = false;
}
