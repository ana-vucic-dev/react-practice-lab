import { pizzaData } from './data/pizza-data.js';
import Header from './components/Header';
import Menu from './components/Menu';
import Order from './components/Order';
import Footer from './components/Footer';
import './styles/index.css';

export default function App() {
  return (
    <div
      className='app'
      aria-labelledby='main-title'>
      <Header />

      <main>
        <Menu pizzas={pizzaData} />
        {pizzaData.length > 0 && (
          <Order
            openingHour={9}
            closingHour={22}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
