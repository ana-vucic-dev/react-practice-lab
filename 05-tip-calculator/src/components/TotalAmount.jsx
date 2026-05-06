import { useMemo } from 'react';

export default function TotalAmount({ bill, totalTipAmount }) {
  const total = bill + totalTipAmount;

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }),
    []
  );

  const breakdown =
    totalTipAmount > 0
      ? `(${formatter.format(bill)} + ${formatter.format(totalTipAmount)} tip)`
      : null;

  return (
    <>
      <section
        className='total-amount'
        aria-labelledby='bill-and-tips'>
        <h2
          id='bill-and-tips'
          className='visually-hidden'>
          Total amount to pay
        </h2>

        <p>Total: {formatter.format(total)}</p>

        {breakdown && <p>{breakdown}</p>}
      </section>

      <p
        aria-live='polite'
        aria-atomic='true'
        className='visually-hidden'>
        Total to pay is {formatter.format(total)}
        {totalTipAmount > 0 &&
          `, including a ${formatter.format(totalTipAmount)} tip`}
      </p>
    </>
  );
}
