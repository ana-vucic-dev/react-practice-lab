import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({ data }) {
  const [currentlyOpenId, setCurrentlyOpenId] = useState(null);

  return (
    <section
      className='accordion-list'
      aria-label='Frequently asked questions'>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          number={index}
          itemId={item.id}
          title={item.question}
          currentlyOpenId={currentlyOpenId}
          onOpen={setCurrentlyOpenId}>
          {item.answer}
        </AccordionItem>
      ))}
    </section>
  );
}
