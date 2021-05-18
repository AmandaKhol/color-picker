import rgbToHex from '../services/rgbToHex';

function pickerDetector(canvasRef, event) {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const pixel = context.getImageData(x, y, 1, 1);

  const data = pixel.data;

  const hex = '#' + ('000000' + rgbToHex(data[0], data[1], data[2])).slice(-6);
  const result = {
    colorHex: hex,
    positionX: x,
    positionY: y,
  };
  return result;
}
export default pickerDetector;
