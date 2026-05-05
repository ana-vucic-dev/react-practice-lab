import Header from './components/Header';
import Intro from './components/Intro';
import Stepper from './components/Stepper';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='main-title'>
      <Header />
      <Intro />
      <Stepper />
      <Footer />
    </div>
  );
}
