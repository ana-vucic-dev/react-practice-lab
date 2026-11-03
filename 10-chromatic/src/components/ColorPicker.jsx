export default function ColorPicker({ color, onChange }) {
  return (
    <div className='color-picker-container'>
      <fieldset className='color-picker'>
        <legend className='visually-hidden'>Color Picker</legend>

        <label htmlFor='color-input'>Select a color:</label>

        <input
          type='color'
          id='color-input'
          className='color-input'
          value={color}
          onChange={onChange}
        />
      </fieldset>
    </div>
  );
}
