const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// štartovacia pozícia
noBtn.style.left = "50%";
noBtn.style.top = "60%";

function moveNo() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// PC – len prejdem myšou
noBtn.addEventListener("mouseenter", moveNo);

// MOBIL – len sa dotknem
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
});

// poistka – nikdy sa nedá kliknúť
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNo();
});

// YES
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
