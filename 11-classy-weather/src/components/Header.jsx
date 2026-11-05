import formatDate from '../utils/formatDate.js';

export default function Header() {
  return (
    <header className='app-header'>
      <h1>Classy Weather</h1>
      <p className='tagline'>Daily weather forecast wherever you are.</p>
      <p className='date'>{formatDate()}</p>
    </header>
  );
}
