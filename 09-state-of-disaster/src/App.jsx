import Header from './components/Header.jsx';
import Tabs from './components/Tabs.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='app-name'>
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
}
