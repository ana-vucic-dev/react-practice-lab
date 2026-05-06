export default function PersonTipSelect({
  personId,
  percentage,
  handleTipChange
}) {
  function handleSelectChange(e) {
    handleTipChange(personId, e.target.value);
  }

  return (
    <>
      <label htmlFor={`tip-${personId}`}>Person {personId} Tip:</label>

      <select
        id={`tip-${personId}`}
        value={percentage}
        onChange={handleSelectChange}>
        <option value=''>Select a tip percentage</option>
        <option value={0}>Disappointing (0%)</option>
        <option value={5}>Satisfactory (5%)</option>
        <option value={10}>Average (10%)</option>
        <option value={15}>Impressive (15%)</option>
        <option value={20}>Exceptional (20%)</option>
      </select>
    </>
  );
}
