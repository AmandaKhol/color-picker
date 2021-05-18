function gradientCanvasGenerator(canvasRef, colorHue) {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  context.fillStyle = colorHue;
  context.fillRect(0, 0, canvas.width, canvas.height);

  //create gradient
  const grd = context.createLinearGradient(0, 0, canvas.width, 0);
  grd.addColorStop(0, `rgba(255, 255, 255, 1)`);
  grd.addColorStop(1, `rgba(255, 255, 255, 0)`);

  // Fill with gradient
  context.fillStyle = grd;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const grd2 = context.createLinearGradient(0, 0, 0, canvas.height);
  grd2.addColorStop(0, `rgba(0, 0, 0, 0)`);
  grd2.addColorStop(1, `rgba(0, 0, 0, 1)`);

  context.fillStyle = grd2;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

export default gradientCanvasGenerator;
