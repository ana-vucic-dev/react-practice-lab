import { describe, expect, it } from 'vitest';
import hexToRgb from './hexToRgb.js';

describe('hexToRgb function', () => {
  it('correctly converts black color value', () => {
    expect(hexToRgb('#000000')).toEqual({
      red: 0,
      green: 0,
      blue: 0,
      cssString: 'rgb(0, 0, 0)'
    });
  });

  it('correctly converts white color value', () => {
    expect(hexToRgb('#ffffff')).toEqual({
      red: 255,
      green: 255,
      blue: 255,
      cssString: 'rgb(255, 255, 255)'
    });
  });

  it('correctly converts primary red color value', () => {
    expect(hexToRgb('#ff0000')).toEqual({
      red: 255,
      green: 0,
      blue: 0,
      cssString: 'rgb(255, 0, 0)'
    });
  });

  it('correctly converts primary green color value', () => {
    expect(hexToRgb('#00ff00')).toEqual({
      red: 0,
      green: 255,
      blue: 0,
      cssString: 'rgb(0, 255, 0)'
    });
  });

  it('correctly converts primary blue color value', () => {
    expect(hexToRgb('#0000ff')).toEqual({
      red: 0,
      green: 0,
      blue: 255,
      cssString: 'rgb(0, 0, 255)'
    });
  });

  it('correctly converts color value with equal red, green, and blue channels', () => {
    expect(hexToRgb('#808080')).toEqual({
      red: 128,
      green: 128,
      blue: 128,
      cssString: 'rgb(128, 128, 128)'
    });
  });

  it('correctly converts arbitrary hex color values', () => {
    expect(hexToRgb('#ff8000')).toEqual({
      red: 255,
      green: 128,
      blue: 0,
      cssString: 'rgb(255, 128, 0)'
    });
  });

  it('correctly handles shorthand hex color values', () => {
    expect(hexToRgb('#f00')).toEqual({
      red: 255,
      green: 0,
      blue: 0,
      cssString: 'rgb(255, 0, 0)'
    });
  });
});
