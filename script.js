const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let noCount = 0;

function moveNoButton() {
  noCount++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount === 5) {
    noBtn.innerText = "Still no? 😏";
  }
  if (noCount === 10) {
    noBtn.innerText = "You can’t escape 😈";
  }
  if (noCount === 15) {
    noBtn.innerText = "Just say yes 💖";
  }
}

// PC – myš
noBtn.addEventListener("mouseover", moveNoButton);

// MOBIL – dotyk
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES button
yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.location.href =
      "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
  }, 1200);
});
