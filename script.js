
document.getElementById("explode-btn").addEventListener("click", () => {
  const explosion = document.getElementById("explosion");
  explosion.style.display = "block";
  const audio = new Audio("boom.mp3");
  audio.play();
  setTimeout(() => {
    explosion.style.display = "none";
  }, 1500);
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
