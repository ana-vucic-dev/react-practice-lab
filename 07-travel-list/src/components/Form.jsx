import { useState } from 'react';

export default function Form({ addItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedDescription = description.trim();
    if (!trimmedDescription) return;

    const newItem = {
      id: crypto.randomUUID(),
      description: trimmedDescription,
      quantity,
      packed: false
    };

    addItem(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form
      className='add-item-form'
      aria-labelledby='add-item-form-title'
      onSubmit={handleSubmit}>
      <h2 id='add-item-form-title'>What do you need for your trip?</h2>

      <div className='form-inputs-wrapper'>
        <fieldset>
          <legend className='visually-hidden'>Add items and quantity</legend>

          <label
            htmlFor='item-quantity'
            className='visually-hidden'>
            Select quantity from 1 to 20
          </label>

          <select
            id='item-quantity'
            name='item-quantity'
            className='item-quantity'
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
              <option
                key={num}
                value={num}>
                {num}
              </option>
            ))}
          </select>

          <label
            htmlFor='item-description'
            className='visually-hidden'>
            Enter item description
          </label>

          <input
            type='text'
            id='item-description'
            name='item'
            placeholder='e.g. Passport'
            className='item-description'
            maxLength={100}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </fieldset>

        <button
          type='submit'
          className='btn add-item-btn'>
          ADD
        </button>
      </div>
    </form>
  );
}
