export default function Header() {
  return (
    <header className='app-header'>
      <div className='logo-container'>
        <img
          src='/state-of-disaster-logo.svg'
          alt=''
          className='logo'
        />
      </div>

      <div className='app-name-container'>
        <h1 id='app-name'>
          State of <span className='accent'>Disaster</span>
        </h1>

        <p className='tagline'>Everything is under control. Probably.</p>
      </div>
    </header>
  );
}
