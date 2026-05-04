import { faqs } from './data/faqs';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='main-title'>
      <Header />
      <Accordion data={faqs} />
      <Footer />
    </div>
  );
}
