export default function BillInput({ billInput, handleBillInputChange }) {
  return (
    <fieldset className='input-container'>
      <legend>Bill Amount</legend>

      <label htmlFor='bill'>How much is the bill?</label>

      <input
        type='text'
        id='bill'
        value={billInput}
        onChange={handleBillInputChange}
      />
    </fieldset>
  );
}
