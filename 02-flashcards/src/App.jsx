import Header from './components/Header';
import Flashcards from './components/Flashcards';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='flashcards-title'>
      <Header />
      <Flashcards />
      <Footer />
    </div>
  );
}
