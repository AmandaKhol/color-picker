function hueCanvasGenerator(canvasRef) {
  const canvas = canvasRef.current;

  let gradient = canvas
    .getContext('2d')
    .createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#ff0000');
  gradient.addColorStop(1 / 6, '#ffff00');
  gradient.addColorStop((1 / 6) * 2, '#00ff00');
  gradient.addColorStop((1 / 6) * 3, '#00ffff');
  gradient.addColorStop((1 / 6) * 4, '#0000ff');
  gradient.addColorStop((1 / 6) * 5, '#ff00ff');
  gradient.addColorStop(1, '#ff0000');
  canvas.getContext('2d').fillStyle = gradient;
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
}

export default hueCanvasGenerator;
