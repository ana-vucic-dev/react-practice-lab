import PersonTipSelect from './PersonTipSelect';

export default function TipSelection({ people, handleTipChange }) {
  return (
    <fieldset className='input-container tips'>
      <legend>Tip Percentage</legend>

      <h2>How did you like the service?</h2>

      {people.map(person => (
        <PersonTipSelect
          key={person.id}
          personId={person.id}
          percentage={person.tip}
          handleTipChange={handleTipChange}
        />
      ))}
    </fieldset>
  );
}
