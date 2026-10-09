import { useState } from 'react';
import { FILTER_MAP } from '../config/filters.js';
import MenuFilters from './MenuFilters';
import Pizza from './Pizza';

export default function Menu({ pizzas }) {
  const [filter, setFilter] = useState('all');
  const activeFilter = FILTER_MAP[filter] ?? FILTER_MAP.all;
  const filteredPizzas = pizzas.filter(activeFilter.filterFn);

  return (
    <section
      className='menu'
      aria-label='Pizza menu'>
      <header
        className='menu-header'
        aria-labelledby='menu-heading'>
        <h2 id='menu-heading'>OUR MENU</h2>

        <p className='menu-info'>
          Authentic Italian cuisine
          <span
            className='dot-separator'
            aria-hidden='true'>
            &middot;
          </span>
          Hand-crafted dishes made with organic ingredients and traditional
          recipes
          <span
            className='dot-separator'
            aria-hidden='true'>
            &middot;
          </span>
          Available fresh from our stone oven
        </p>
      </header>

      {pizzas.length > 0 ? (
        <>
          <MenuFilters
            filter={filter}
            activeFilter={activeFilter}
            changeFilter={setFilter}
          />

          <ul className='pizza-list'>
            {filteredPizzas.map(pizza => (
              <Pizza
                key={pizza.id}
                pizza={pizza}
              />
            ))}
          </ul>
        </>
      ) : (
        <p className='menu-in-progress'>
          We are refining our menu. Please check back soon.
        </p>
      )}
    </section>
  );
}
