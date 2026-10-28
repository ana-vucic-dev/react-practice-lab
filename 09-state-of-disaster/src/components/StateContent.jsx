export default function StateContent() {
  return (
    <>
      <p className='content-paragraph'>
        State is a component's <b>memory</b>. It lets React remember information
        between renders, such as whether this content is visible or how many
        hearts you've accumulated.
      </p>

      <p className='content-paragraph'>
        When state changes, React renders the component again so the interface
        reflects the new value. You don't manually update the DOM; React handles
        that part.
      </p>

      <p className='content-paragraph'>
        <b>The catch?</b> State belongs to a particular component instance.
        Destroy that instance, and its local state goes with it.
      </p>

      <p className='tab-summary'>
        <span className='disaster-level'>
          <i
            className='bi bi-exclamation-triangle-fill'
            aria-hidden='true'></i>{' '}
          Current disaster level:{' '}
        </span>
        Manageable.
      </p>
    </>
  );
}
