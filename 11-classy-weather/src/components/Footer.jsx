export default function Footer() {
  const releaseYear = 2026;
  const currentYear = new Date().getFullYear();
  const yearDisplay =
    releaseYear === currentYear ? releaseYear : `${releaseYear}–${currentYear}`;

  return (
    <footer>
      <p className='copyright'>
        <small>&copy; {yearDisplay} Ana Vučić</small>
      </p>

      <div className='attribution-wrapper'>
        <p className='attribution'>
          Design inspired by{' '}
          <a
            href='https://jonas.io/'
            target='_blank'
            rel='noopener noreferrer'>
            Jonas Schmedtmann
          </a>
        </p>

        <p className='attribution'>
          Weather data by{' '}
          <a
            href='https://open-meteo.com/'
            target='_blank'
            rel='noopener noreferrer'>
            Open-Meteo
          </a>
        </p>
      </div>
    </footer>
  );
}
