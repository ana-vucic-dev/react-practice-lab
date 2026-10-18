import { useState } from 'react';
import useGeolocation from '../hooks/useGeolocation.js';

export default function GeoLocator() {
  const {
    getCoordinates,
    coordinates: { lat, lng },
    isLoading,
    error,
    announcement
  } = useGeolocation();

  const [requestAttempts, setRequestAttempts] = useState(0);

  function incrementCount() {
    setRequestAttempts(count => count + 1);
  }

  function handleLocationRequest() {
    getCoordinates();
    incrementCount();
  }

  return (
    <section
      aria-labelledby='location-heading'
      className='geo-locator'>
      <div
        aria-live='polite'
        aria-atomic='true'
        className='visually-hidden'>
        {announcement}
      </div>

      <h2 id='location-heading'>Find Your Location</h2>

      <p className='app-description'>
        Get your current latitude and longitude, then explore your location on
        OpenStreetMap.
      </p>

      <button
        type='button'
        className='location-btn'
        onClick={handleLocationRequest}
        disabled={isLoading}>
        Find my location
      </button>

      <div className='results-container'>
        {isLoading ? (
          <div
            className='coordinates-skeleton'
            aria-hidden='true'>
            <span className='skeleton-line skeleton-line--medium' />
            <span className='skeleton-line--short-container'>
              <span className='skeleton-line skeleton-line--short' />
            </span>
            <span className='skeleton-line skeleton-line--long' />
          </div>
        ) : error ? (
          <div className='error-container'>
            <p className='error-text'>ERROR OBTAINING COORDINATES:</p>
            <p className='error-message'>{error}</p>
          </div>
        ) : typeof lat === 'number' && typeof lng === 'number' ? (
          <div className='coordinates-container'>
            <p className='coordinates-text'>YOUR COORDINATES:</p>
            <p className='coordinates'>
              {lat.toFixed(4)}, {lng.toFixed(4)}
            </p>
            <a
              className='map-link'
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}>
              View on OpenStreetMap{' '}
              <i
                className='bi bi-arrow-up-right arrow-icon'
                aria-hidden='true'></i>
            </a>
          </div>
        ) : (
          <div className='coordinates-container'>
            <p className='coordinates-text'>YOUR COORDINATES:</p>
            <p className='coordinates-description'>
              Your coordinates will appear here.
            </p>
          </div>
        )}
      </div>

      <p className='request-attempts'>
        <i
          className='bi bi-activity activity-icon'
          aria-hidden='true'></i>{' '}
        Request attempts:{' '}
        <span className='num-of-requests'>{requestAttempts}</span>
      </p>
    </section>
  );
}
