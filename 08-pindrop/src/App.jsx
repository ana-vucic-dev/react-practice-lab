import Header from './components/Header.jsx';
import GeoLocator from './components/GeoLocator.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='app-name'>
      <Header />

      <main>
        <GeoLocator />
      </main>

      <Footer />
    </div>
  );
}
