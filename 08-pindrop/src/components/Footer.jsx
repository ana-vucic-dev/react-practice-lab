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

      <p className='map-data-attribution'>
        Map data &copy;{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.openstreetmap.org/copyright'>
          OpenStreetMap
        </a>
      </p>
    </footer>
  );
}
