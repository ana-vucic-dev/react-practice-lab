import Header from './components/Header';
import TipCalculator from './components/TipCalculator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='main-title'>
      <Header />
      <TipCalculator />
      <Footer />
    </div>
  );
}
