let elem = document.getElementById('insert-text');

elem.innerHTML = "<h2>Hi!</h2>";

function draw() {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200 0 0)";
      ctx.fillRect(100, 100, 500, 500);

      ctx.fillStyle = "rgb(0 0 200 / 50%)";
      ctx.fillRect(300, 300, 400, 400);
    }
}

window.addEventListener("load", draw);