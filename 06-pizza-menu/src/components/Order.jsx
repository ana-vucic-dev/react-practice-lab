export default function Order({ openingHour, closingHour }) {
  const hour = new Date().getHours();
  const isOpen = hour >= openingHour && hour < closingHour;

  const openingTime = `${openingHour.toString().padStart(2, '0')}:00`;
  const closingTime = `${closingHour}:00`;
  const orderEndTime = `${closingHour - 1}:30`;

  const hoursMessage = (
    <>
      <time dateTime={openingTime}> {openingTime}</time> and
      <time dateTime={closingTime}> {closingTime}</time>
    </>
  );

  return (
    <section
      className='order'
      aria-label='Online orders and business hours'>
      {isOpen ? (
        <>
          <p>
            We are open. Visit us between
            {hoursMessage} or order online until
            <time dateTime={orderEndTime}> {orderEndTime}</time>.
          </p>

          <button
            type='button'
            className='btn order-btn'>
            Order
          </button>
        </>
      ) : (
        <p>
          We are closed. Come back between
          {hoursMessage}.
        </p>
      )}
    </section>
  );
}
