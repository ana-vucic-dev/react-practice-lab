import Header from './components/Header';
import DateCounter from './components/DateCounter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='date-counter-title'>
      <Header />
      <DateCounter />
      <Footer />
    </div>
  );
}
