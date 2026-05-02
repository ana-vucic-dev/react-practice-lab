import { useEffect, useState } from 'react';

export default function Footer() {
  const releaseYear = 2026;
  const currentYear = new Date().getFullYear();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(time);

  return (
    <footer>
      <p className='time'>
        <span className='visually-hidden'>Current time: </span>
        {formattedTime}
      </p>

      <small>
        <span aria-hidden='true'>&copy; </span>
        <span className='visually-hidden'>Copyright</span>
        <span>
          {releaseYear === currentYear
            ? `${currentYear} `
            : `${releaseYear}–${currentYear} `}
        </span>
        Ana Vučić
      </small>
    </footer>
  );
}
