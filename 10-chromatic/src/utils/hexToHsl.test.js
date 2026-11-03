import { describe, expect, it } from 'vitest';
import hexToHsl from './hexToHsl.js';

describe('hexToHsl function', () => {
  it('correctly converts black color value', () => {
    expect(hexToHsl('#000000')).toEqual({
      hue: 0,
      saturation: 0,
      lightness: 0,
      cssString: 'hsl(0, 0%, 0%)'
    });
  });

  it('correctly converts white color value', () => {
    expect(hexToHsl('#ffffff')).toEqual({
      hue: 0,
      saturation: 0,
      lightness: 100,
      cssString: 'hsl(0, 0%, 100%)'
    });
  });

  it('correctly converts primary red color value', () => {
    expect(hexToHsl('#ff0000')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      cssString: 'hsl(0, 100%, 50%)'
    });
  });

  it('correctly converts primary green color value', () => {
    expect(hexToHsl('#00ff00')).toEqual({
      hue: 120,
      saturation: 100,
      lightness: 50,
      cssString: 'hsl(120, 100%, 50%)'
    });
  });

  it('correctly converts primary blue color value', () => {
    expect(hexToHsl('#0000ff')).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      cssString: 'hsl(240, 100%, 50%)'
    });
  });

  it('correctly converts color value with equal red, green, and blue channels', () => {
    expect(hexToHsl('#808080')).toEqual({
      hue: 0,
      saturation: 0,
      lightness: 50,
      cssString: 'hsl(0, 0%, 50%)'
    });
  });

  it('correctly converts arbitrary hex color values', () => {
    expect(hexToHsl('#ff8000')).toEqual({
      hue: 30,
      saturation: 100,
      lightness: 50,
      cssString: 'hsl(30, 100%, 50%)'
    });
  });

  it('correctly handles shorthand hex color values', () => {
    expect(hexToHsl('#f00')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      cssString: 'hsl(0, 100%, 50%)'
    });
  });
});
