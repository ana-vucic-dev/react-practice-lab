export default function AccordionItem({
  number,
  itemId,
  title,
  currentlyOpenId,
  onOpen,
  children
}) {
  const isOpen = itemId === currentlyOpenId;
  const numIndicator = number < 9 ? `0${number + 1}` : number + 1;

  function toggleItem() {
    onOpen(isOpen ? null : itemId);
  }

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <h2 className='accordion-heading'>
        <button
          className='accordion-trigger'
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${itemId}`}
          id={`accordion-trigger-${itemId}`}
          onClick={toggleItem}>
          <span className='number'>{numIndicator}</span>
          <span className='title'>{title}</span>
          <span
            className='icon'
            aria-hidden='true'>
            {isOpen ? '-' : '+'}
          </span>
        </button>
      </h2>

      <section
        className='accordion-panel'
        id={`accordion-panel-${itemId}`}
        aria-labelledby={`accordion-trigger-${itemId}`}
        hidden={!isOpen}>
        {children}
      </section>
    </div>
  );
}
