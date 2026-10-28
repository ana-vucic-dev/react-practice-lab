export default function StateDestroyerContent() {
  return (
    <>
      <p className='content-paragraph'>
        Congratulations. You've replaced a perfectly functional component with a
        completely different one.
      </p>

      <p className='content-paragraph'>All those hearts? Gone.</p>

      <p className='content-paragraph'>
        Your expanded sections across tabs? Back to their default state when you
        return.
      </p>

      <p className='content-paragraph'>
        React didn't forget anything. The component that owned that state simply
        ceased to exist.
      </p>

      <p className='content-paragraph accent highlight'>
        <b>Was it worth it?</b>
      </p>

      <p className='tab-summary'>
        <span className='disaster-level'>
          <i
            className='bi bi-exclamation-triangle-fill'
            aria-hidden='true'></i>{' '}
          Current disaster level:{' '}
        </span>{' '}
        You are the <span className='accent'>disaster</span>.
      </p>
    </>
  );
}
