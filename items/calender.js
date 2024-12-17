function drawCalender(ctx, x, y, size, hue) {
  const top = y - size / 2;
  const left = x - size / 2;
  const day = 15;
  // ctx.strokeRect(top,left,size,size);

  const roundness = size * 0.1;
  ctx.beginPath();
  ctx.fillStyle = color.light(hue);
  ctx.roundRect(left, top, size, size, roundness);
  ctx.fill();

  ctx.save()
  ctx.clip();

  const headerHeight = size * 0.3;
  ctx.fillStyle = color.dark(hue);
  ctx.fillRect(left, top, size, headerHeight);

  const hole = {
    xs: [x - headerHeight, x, x + headerHeight],
    y: top + headerHeight / 2,
    radius: headerHeight / 3,
    color: color.lightest(hue),
  };

  ctx.globalCompositeOperation = "destination-out";

  hole.xs.forEach((x) => {
    draw.circle(ctx, x, hole.y, hole.radius, {
      fillStyle: hole.color,
    });
  });

  ctx.restore();

  const text = {
    size : size / 2,
    x,
    y : y + headerHeight / 2
  }

  ctx.beginPath();
  ctx.fillStyle = color.dark(hue);
  ctx.font = `bold ${text.size}px Consolas`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"
  ctx.fillText(day,text.x,text.y)
}
