import { v4 as uuidv4 } from 'uuid';

export const faqs = [
  {
    id: uuidv4(),
    question: 'Where are these chairs assembled?',
    answer: (
      <>
        <p>
          Our chairs are designed for simple, DIY home assembly to reduce
          shipping costs. They are manufactured in Sweden and come with all the
          necessary tools and illustrated step-by-step instructions.
        </p>
        <p>
          Estimated assembly time is <strong>15-20 minutes</strong>.
        </p>
      </>
    )
  },
  {
    id: uuidv4(),
    question: 'What is your return policy?',
    answer: (
      <>
        <p>
          If your ordered chair doesn't meet your expectations, you may return
          it within <strong>30 days of delivery</strong> for a full refund
          (minus return shipping fees). Items must be returned in new, unused
          condition and their original packaging.
        </p>
        <p>
          Please note that assembled items may incur a{' '}
          <strong>15% restocking fee</strong>. Custom-ordered fabrics or colours
          are <strong>non-refundable</strong>.
        </p>
        <p>
          Visit our <a href='#'>Support Centre</a> to initiate a Return
          Merchandise Authorisation (RMA).
        </p>
      </>
    )
  },
  {
    id: uuidv4(),
    question: 'Do you ship to countries outside the EU?',
    answer: (
      <>
        <p>
          We ship our chairs worldwide. International shipping usually takes
          <strong> 10–20 business days</strong>.
        </p>
        <p>
          Please note that customers are responsible for any applicable customs
          fees, import duties, or taxes incurred outside the EU.
        </p>
        <p>
          For large orders, please contact our <a href='#'>support team</a> for
          a custom quote.
        </p>
      </>
    )
  },
  {
    id: uuidv4(),
    question: 'What are your EU shipping costs?',
    answer: (
      <>
        <p>
          Shipping costs are calculated based on your location and order amount:
        </p>

        <ul>
          <li>
            <strong>Zone 1 (DE, BE, NL, LU):</strong> €90 flat rate
          </li>
          <li>
            <strong>Zone 2 (FR, AT, DK, PL, CZ):</strong> €120 flat rate
          </li>
          <li>
            <strong>Zone 3 (Rest of EU):</strong> €150+ (calculated at checkout)
          </li>
        </ul>

        <p>
          <em>Free shipping applies to orders over €500.</em>
        </p>

        <p>
          Please refer to our <a href='#'>Shipping Policy</a> for more
          information on delivery times per country.
        </p>
      </>
    )
  }
];
