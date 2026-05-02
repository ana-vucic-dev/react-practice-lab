import { useState } from 'react';
import getMessage from '../utils/getMessage.js';

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState('0');

  const date = new Date();
  date.setDate(date.getDate() + count);

  function decrementCount() {
    setCount(prevCount => prevCount - step);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + step);
  }

  function handleCountChange(e) {
    const value = e.target.value;

    if (/^-?\d*$/.test(value)) {
      setCountInput(value);

      if (value !== '' && value !== '-') {
        setCount(Number(value));
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    setStep(1);
    setCount(0);
    setCountInput('0');
  }

  return (
    <main className='date-counter'>
      <form
        onSubmit={handleSubmit}
        className='counter-settings'
        aria-labelledby='counter-settings-title'>
        <h2
          id='counter-settings-title'
          className='visually-hidden'>
          Counter controls
        </h2>

        <fieldset className='counter'>
          <legend className='visually-hidden'>
            Select the number of steps for counting days
          </legend>

          <label htmlFor='step'>Step: {step}</label>

          <div className='input-container'>
            <span aria-label='Minimum step'>1</span>

            <input
              type='range'
              id='step'
              min={1}
              max={10}
              value={step}
              onChange={e => setStep(Number(e.target.value))}
            />

            <span aria-label='Maximum step'>10</span>
          </div>
        </fieldset>

        <fieldset className='counter'>
          <legend className='visually-hidden'>
            Count days backwards or forwards
          </legend>

          <label htmlFor='count'>Day Count: {count}</label>

          <div className='input-container'>
            <button
              aria-label={`Count days backwards by ${step}`}
              onClick={decrementCount}>
              -
            </button>

            <input
              type='text'
              id='count'
              inputMode='numeric'
              aria-describedby='day-count-info'
              value={countInput}
              onChange={handleCountChange}
            />

            <p
              id='day-count-info'
              className='visually-hidden'>
              Enter the number of days from today
            </p>

            <button
              aria-label={`Count days forwards by ${step}`}
              onClick={incrementCount}>
              +
            </button>
          </div>
        </fieldset>
      </form>

      <p
        className='date-count'
        aria-live='polite'>
        {getMessage(count)} <span className='date'>{date.toDateString()}</span>
      </p>

      {(count !== 0 || step !== 1) && (
        <button
          className='reset-btn'
          onClick={handleReset}>
          Reset
        </button>
      )}
    </main>
  );
}
