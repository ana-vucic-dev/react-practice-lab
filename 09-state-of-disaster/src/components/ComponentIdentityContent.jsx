export default function ComponentIdentityContent() {
  return (
    <>
      <p className='content-paragraph'>
        React uses a component's type, position in the render tree, and key
        (when provided) to determine whether it should preserve an existing
        component instance or treat it as a new one.
      </p>

      <p className='content-paragraph'>
        When the first three tabs render <code>TabPanel</code> in the same
        position, React can reuse that component instance. Your likes and
        content visibility survive the change.
      </p>

      <p className='content-paragraph'>
        Selecting the fourth tab replaces <code>TabPanel</code> with{' '}
        <code>StateDestroyer</code>. The original component unmounts, and its
        local state is discarded.
      </p>

      <p className='content-paragraph'>
        Return to one of the regular tabs, and React creates a fresh{' '}
        <code>TabPanel</code> with its initial state.
      </p>

      <p className='content-paragraph'>
        <b>Same component, same identity?</b> State survives.
      </p>

      <p className='content-paragraph'>
        <b>Component removed and replaced?</b> Say goodbye to your likes.{' '}
        <i
          className='bi bi-heartbreak-fill'
          aria-hidden='true'></i>
      </p>

      <p className='tab-summary'>
        <span className='disaster-level'>
          <i
            className='bi bi-exclamation-triangle-fill'
            aria-hidden='true'></i>{' '}
          Current disaster level:{' '}
        </span>
        The plot thickens.
      </p>
    </>
  );
}
