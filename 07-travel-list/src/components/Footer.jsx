export default function Footer() {
  const releaseYear = 2026;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <small>
        <span aria-hidden='true'>&copy; </span>
        <span className='visually-hidden'>Copyright</span>
        <span>
          {releaseYear === currentYear
            ? `${currentYear} `
            : `${releaseYear}–${currentYear} `}
        </span>
        Far Away Travel by Ana Vučić
      </small>

      <p>
        Design by{' '}
        <a
          href='https://jonas.io/'
          target='_blank'
          rel='noopener noreferrer'>
          Jonas Schmedtmann
        </a>
      </p>
    </footer>
  );
}
