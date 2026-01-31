const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveNo() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// DESKTOP – len prejdeš myšou → uteká
noBtn.addEventListener("mouseenter", moveNo);

// MOBIL – len sa priblížiš prstom → uteká
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
});

// POISTKA – aj keby sa niečo pokúsilo kliknúť
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNo();
});

// YES – konfety + presmerovanie
yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.location.href =
      "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
  }, 1200);
});
