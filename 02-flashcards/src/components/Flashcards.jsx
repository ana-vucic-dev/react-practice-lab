import { useState } from 'react';
import { questions } from '../data/questions.js';

export default function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <main className='flashcards'>
      {questions.map(q => (
        <button
          key={q.id}
          className={q.id === selectedId ? 'selected' : ''}
          aria-pressed={q.id === selectedId}
          onClick={() => handleClick(q.id)}>
          {q.id === selectedId ? q.answer : q.question}
        </button>
      ))}
    </main>
  );
}
