export default function hexToHsl(hexColor) {
  let hex = hexColor.replace('#', '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  const red = Number.parseInt(hex.slice(0, 2), 16) / 255;
  const green = Number.parseInt(hex.slice(2, 4), 16) / 255;
  const blue = Number.parseInt(hex.slice(4), 16) / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let hue = 0;
  let saturation = 0;
  let lightness = (min + max) / 2;

  if (max !== min) {
    const delta = max - min;

    saturation =
      lightness > 0.5 ? delta / (2 - min - max) : delta / (min + max);

    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / delta + 2;
        break;
      case blue:
        hue = (red - green) / delta + 4;
        break;
    }

    hue /= 6;
  }

  const h = Math.round(hue * 360);
  const s = Math.round(saturation * 100);
  const l = Math.round(lightness * 100);

  return {
    hue: h,
    saturation: s,
    lightness: l,
    cssString: `hsl(${h}, ${s}%, ${l}%)`
  };
}
