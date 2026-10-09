import { useRef, useState } from 'react';
import { FILTERS } from '../config/filters.js';

export default function MenuFilters({ filter, activeFilter, changeFilter }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const toggleBtnRef = useRef(null);

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setIsOpenDrawer(false);
      toggleBtnRef.current?.focus();
    }
  }

  return (
    <>
      <fieldset className='menu-filters'>
        <legend className='visually-hidden'>Menu filtering options</legend>

        <button
          type='button'
          className='btn filters-toggle-btn'
          aria-expanded={isOpenDrawer}
          aria-controls='pizza-filters'
          ref={toggleBtnRef}
          onClick={() => setIsOpenDrawer(isOpen => !isOpen)}>
          Filters:{' '}
          {activeFilter.emoji && (
            <span aria-hidden='true'>{activeFilter.emoji} </span>
          )}
          {activeFilter.label}
          <span
            className='filters-toggle-icon'
            aria-hidden='true'>
            ▾
          </span>
        </button>

        <div
          id='pizza-filters'
          className={`filter-drawer ${isOpenDrawer ? 'open' : ''}`}
          onKeyDown={handleKeyDown}>
          {FILTERS.map((option, i) => (
            <button
              type='button'
              key={option.value}
              className='btn filter-btn'
              aria-pressed={filter === option.value}
              onClick={() => {
                changeFilter(option.value);
                setIsOpenDrawer(false);
                toggleBtnRef.current?.focus();
              }}
              style={{ transitionDelay: `${i * 70}ms` }}>
              {option?.emoji && <span aria-hidden='true'>{option.emoji} </span>}
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p
        className={`filter-info ${
          filter === 'vegan' || filter === 'vegetarian' ? 'visible' : ''
        }`}>
        We offer both vegan and vegetarian mozzarella. You can choose when
        ordering.
      </p>
    </>
  );
}
