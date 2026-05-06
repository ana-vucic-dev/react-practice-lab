export default function ResetButton({ handleReset }) {
  return (
    <button
      type='button'
      className='reset-btn'
      onClick={handleReset}>
      Reset
    </button>
  );
}
