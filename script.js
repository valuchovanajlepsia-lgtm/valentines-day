const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

document.getElementById("yes").onclick = () => {
  document.body.innerHTML = "<h1>YAY!!! 💕💍</h1>";
};
