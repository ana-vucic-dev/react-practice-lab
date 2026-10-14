export default function Header() {
  return (
    <header className='app-header'>
      <h1 id='app-name'>
        <span aria-hidden='true'>🏝️ </span>
        <div className='logo-wrapper'>
          <span className='logo-far-away'>FAR AWAY</span>
          <span className='logo-travel'>TRAVEL</span>
        </div>
        <span aria-hidden='true'> 🧳</span>
      </h1>
    </header>
  );
}
