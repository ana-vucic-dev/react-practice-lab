export default function PeopleInput({ peopleInput, handlePeopleInputChange }) {
  return (
    <fieldset className='input-container'>
      <legend>Number of People</legend>

      <label htmlFor='people'>How many people will split the bill?</label>

      <input
        type='text'
        id='people'
        value={peopleInput}
        onChange={handlePeopleInputChange}
      />
    </fieldset>
  );
}
