export default function Footer() {
  const releaseYear = 2026;
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <address>
        <p className='contact-info-container'>
          <span className='contact-label'>
            <i
              className='bi bi-geo-alt-fill contact-icon'
              aria-hidden='true'></i>{' '}
            Address:
          </span>

          <span className='contact-info address'>
            123 Pizza Street, Fast City, React
          </span>
        </p>

        <p className='contact-info-container'>
          <span className='contact-label'>
            <i
              className='bi bi-telephone-fill contact-icon'
              aria-hidden='true'></i>{' '}
            Phone:
          </span>

          <span className='contact-info'>
            <a href='tel:+1-555-123-4567'>+1 (555) 123-4567</a>
          </span>
        </p>

        <p className='contact-info-container'>
          <span className='contact-label'>
            <i
              className='bi bi-envelope-at-fill contact-icon'
              aria-hidden='true'></i>{' '}
            Email:
          </span>

          <span className='contact-info'>
            <a href='mailto:support@example.com'>support@example.com</a>
          </span>
        </p>
      </address>

      <section
        className='copyright'
        aria-label='Copyright information'>
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

        <p>
          React Fast Pizza Co. by{' '}
          <a
            href='https://jonas.io/'
            target='_blank'
            rel='noopener noreferrer'>
            Jonas Schmedtmann
          </a>
        </p>
      </section>
    </footer>
  );
}
