const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let sparks = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;

  for (let i = 0; i < 70; i++) {
    sparks.push({
      x,
      y,
      vx: Math.random() * 6 - 3,
      vy: Math.random() * 6 - 3,
      life: 80,
      color: `hsl(${Math.random()*360},100%,60%)`
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sparks.forEach((s, i) => {
    s.x += s.vx;
    s.y += s.vy;
    s.life--;

    ctx.beginPath();
    ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.fill();

    if (s.life <= 0) sparks.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

setInterval(createFirework, 1200);
animate();
