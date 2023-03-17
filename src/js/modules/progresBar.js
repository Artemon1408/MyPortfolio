const progressBar = (id, percent) => {
  const percentIndex = percent;
  const ratio = percentIndex / 100;

  const canvas = document.querySelector(id);
  const ctx = canvas.getContext("2d");
  const startAngle = Math.PI / 6;
  const endAngle = (2 * Math.PI - startAngle) * ratio;

  const stepAngle = Math.PI / 108;
  let curAngle = startAngle;

  let grad = ctx.createLinearGradient(0, 0, 100, 0);
  grad.addColorStop(0, "#000");
  grad.addColorStop(1, "#0baeff");

  function drawArc(start, end, strokeStyle) {
    ctx.save();
    ctx.translate(120, 120);
    ctx.rotate(Math.PI / 2);

    ctx.beginPath();
    ctx.strokeStyle = "lightgrey";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.arc(0, 0, 50, start, 2 * Math.PI - start);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.arc(0, 0, 50, start, end);
    ctx.stroke();
    ctx.restore();
  }

  function drawCircle(angle) {
    ctx.save();
    ctx.translate(120, 120);
    ctx.rotate(Math.PI / 2);
    ctx.fillStyle = "white";
    ctx.translate(Math.cos(angle) * 100, Math.sin(angle) * 100);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }

  function drawText(length, cur) {
    const percent = ((cur / length) * percentIndex).toFixed(0);
    ctx.save();
    ctx.translate(120, 120);
    ctx.font = "bold 20px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.fillText(percent + "%", 0, 0);
    ctx.stroke();
    ctx.restore();
  }

  function drawSpeed(start, end, cur) {
    // drawArc(start, end, "lightgrey");
    drawArc(start, cur, grad);
    drawText(end - start, cur - start);
    if (cur !== end) {
      drawCircle(cur);
    }
  }

  requestAnimationFrame(function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    curAngle = Math.min(curAngle + stepAngle, endAngle);
    drawSpeed(startAngle, endAngle, curAngle);
    if (curAngle < endAngle) {
      requestAnimationFrame(draw);
    }
  });
};

export default progressBar;
