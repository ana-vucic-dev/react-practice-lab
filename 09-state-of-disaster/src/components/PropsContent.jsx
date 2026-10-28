export default function PropsContent() {
  return (
    <>
      <p className='content-paragraph'>
        Props let a parent component pass information to a child. They tell the
        child what to display or how to behave without the child needing to own
        that information itself.
      </p>

      <p className='content-paragraph'>
        In this app, the parent passes the selected tab's content to the content
        component through an <code>item</code> prop.
      </p>

      <p className='content-paragraph'>
        Props are read-only: a child shouldn't modify the props it receives. If
        the information changes, the parent is responsible for passing the
        updated value.
      </p>

      <p className='content-paragraph'>
        <strong>Important distinction:</strong> New props don't automatically
        mean new state. A component can receive different content while keeping
        its existing local state.
      </p>

      <p className='tab-summary'>
        <span className='disaster-level'>
          <i
            className='bi bi-exclamation-triangle-fill'
            aria-hidden='true'></i>{' '}
          Current disaster level:{' '}
        </span>
        Blame successfully redirected.
      </p>
    </>
  );
}
