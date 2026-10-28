import { useEffect, useRef, useState } from 'react';

export default function TabPanel({ item }) {
  const [showDetails, setShowDetails] = useState(false);
  const [likeHistory, setLikeHistory] = useState([0]);
  const [isScheduledReset, setIsScheduledReset] = useState(false);

  const timerRef = useRef(null);
  const { id, title, subtitle, Content } = item;

  const totalLikes = likeHistory.reduce((a, b) => a + b, 0);

  function handleLike(amount) {
    setLikeHistory(prev => [...prev, amount]);
  }

  function clearResetTimer() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setIsScheduledReset(false);
  }

  function handleUndo() {
    if (isScheduledReset) {
      clearResetTimer();
      return;
    }

    if (likeHistory.length === 1) return;

    const updatedLikes = [...likeHistory];
    updatedLikes.pop();
    setLikeHistory(updatedLikes);
  }

  function handleReset() {
    clearResetTimer();
    setIsScheduledReset(true);

    timerRef.current = setTimeout(() => {
      setLikeHistory([0]);
      setIsScheduledReset(false);
      timerRef.current = null;
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      role='tabpanel'
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
      className='tab-panel'>
      <h2 className='tab-title'>{title}</h2>
      <p className='tab-subtitle'>{subtitle}</p>

      {showDetails && (
        <div className='tab-content'>
          <Content />
        </div>
      )}

      <div className='tab-actions'>
        <button
          type='button'
          className='btn show-details-btn'
          onClick={() => setShowDetails(isShown => !isShown)}>
          {showDetails ? (
            <>
              <i
                className='bi bi-arrow-90deg-up'
                aria-hidden='true'></i>
              <span> Close</span>
            </>
          ) : (
            <>
              <span>Learn more </span>
              <i
                className='bi bi-arrow-right'
                aria-hidden='true'></i>
            </>
          )}
        </button>

        <div className='likes-container'>
          <span className='likes-counter'>
            <span className='likes-number accent'>{totalLikes}</span>
            <span className='likes-label'>
              {totalLikes === 1 ? ' like' : ' likes'}
            </span>
            <span className='visually-hidden'> total</span>
          </span>

          <div className='like-buttons'>
            <button
              type='button'
              className='btn like-btn'
              onClick={() => handleLike(1)}>
              <i
                className='bi bi-heart-fill'
                aria-hidden='true'></i>{' '}
              Like
            </button>

            <button
              type='button'
              className='btn like-btn'
              onClick={() => handleLike(3)}>
              <i
                className='bi bi-heart-fill'
                aria-hidden='true'></i>{' '}
              <i
                className='bi bi-heart-fill'
                aria-hidden='true'></i>{' '}
              <i
                className='bi bi-heart-fill'
                aria-hidden='true'></i>{' '}
              Love <span className='visually-hidden'>(Triple Like)</span>
            </button>
          </div>
        </div>
      </div>

      {totalLikes > 0 && (
        <div className='undo-buttons'>
          <button
            type='button'
            className='btn undo-btn'
            onClick={handleUndo}>
            <i
              className='bi bi-arrow-counterclockwise'
              aria-hidden='true'></i>{' '}
            Undo
          </button>

          <button
            type='button'
            className='btn undo-btn'
            onClick={handleReset}>
            <i
              className='bi bi-stopwatch'
              aria-hidden='true'></i>
            {isScheduledReset ? ' Resetting in 2s' : ' Reset in 2s'}
          </button>
        </div>
      )}
    </div>
  );
}
