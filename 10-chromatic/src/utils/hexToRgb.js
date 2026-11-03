export default function hexToRgb(hexColor) {
  let hex = hexColor.replace('#', '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4), 16);

  return {
    red,
    green,
    blue,
    cssString: `rgb(${red}, ${green}, ${blue})`
  };
}
