export default function Header() {
  return (
    <header className='app-header'>
      <h1 id='app-name'>
        <i
          className='bi bi-geo-alt logo-icon'
          aria-hidden='true'></i>{' '}
        PinDrop
      </h1>

      <p className='tagline'>Your location, in coordinates.</p>
    </header>
  );
}
