const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount === 3) {
    noBtn.innerText = "Are you sure? 😅";
  }
  if (noCount === 5) {
    noBtn.innerText = "Last chance 🙃";
  }
  if (noCount >= 7) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  // confetti burst
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
