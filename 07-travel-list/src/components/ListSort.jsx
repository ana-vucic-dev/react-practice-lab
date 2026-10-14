export default function ListSort({ selectedValue, onChange }) {
  return (
    <fieldset className='list-sort'>
      <legend className='visually-hidden'>
        Sort or clear your packing list
      </legend>

      <label
        htmlFor='sorting-options'
        className='visually-hidden'>
        Select a sorting option
      </label>

      <select
        id='sorting-options'
        name='sorting-options'
        className='sorting-options'
        value={selectedValue}
        onChange={onChange}>
        <option value='input'>SORT BY INPUT ORDER</option>
        <option value='packed'>SORT BY PACKED STATUS</option>
        <option value='name'>SORT BY ITEM NAME</option>
      </select>
    </fieldset>
  );
}
