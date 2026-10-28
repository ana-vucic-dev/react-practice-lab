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
    </footer>
  );
}
