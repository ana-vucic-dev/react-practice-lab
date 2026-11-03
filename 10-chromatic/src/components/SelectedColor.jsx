import { useEffect, useRef, useState } from 'react';
import hexToRgb from '../utils/hexToRgb.js';
import hexToHsl from '../utils/hexToHsl.js';

export default function SelectedColor({ color }) {
  const [copiedFormat, setCopiedFormat] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const [copyError, setCopyError] = useState(false);
  const timerRef = useRef();

  const rgb = hexToRgb(color);
  const hsl = hexToHsl(color);

  async function handleCopy(value, format) {
    setCopiedFormat(null);
    setAnnouncement('');
    setCopyError(false);

    try {
      await navigator.clipboard.writeText(value);

      setCopiedFormat(format);
      setAnnouncement(`${format} color value copied to clipboard.`);

      timerRef.current = setTimeout(() => {
        setCopiedFormat(null);
      }, 2000);
    } catch (error) {
      console.error('Unable to copy color:', error);
      setCopyError(true);
      setAnnouncement('Unable to copy color. Please try again.');
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const colors = [
    { format: 'HEX', value: color },
    { format: 'RGB', value: rgb.cssString },
    { format: 'HSL', value: hsl.cssString }
  ];

  return (
    <>
      <dl
        className='selected-color-container'
        style={{ backgroundColor: color }}>
        {colors.map(({ format, value }) => (
          <div
            className='selected-color'
            key={format}>
            <dt className='color-format'>{format}</dt>
            <dd className='color-code'>
              <span>{value}</span>

              <button
                type='button'
                ref={timerRef}
                className={`copy-color-btn ${copiedFormat === format ? 'copied' : ''}`}
                aria-label={`Copy ${format} color value`}
                onClick={() => handleCopy(value, format)}>
                {copiedFormat === format ? 'COPIED!' : 'COPY'}
              </button>
            </dd>
          </div>
        ))}
      </dl>

      {copyError && (
        <p className='copy-error'>Unable to copy color. Please try again.</p>
      )}

      <p
        className='visually-hidden'
        aria-live='polite'
        aria-atomic='true'>
        {announcement}
      </p>
    </>
  );
}
