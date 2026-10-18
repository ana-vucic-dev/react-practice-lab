import { useState } from 'react';

export default function useGeolocation() {
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [announcement, setAnnouncement] = useState('');

  function getCoordinates() {
    if (!navigator.geolocation) {
      const err = 'Your browser does not support geolocation.';
      setError(err);
      setAnnouncement(`Error: ${err}`);
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnnouncement('Requesting coordinates');

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setCoordinates({
          lat: latitude,
          lng: longitude
        });

        setAnnouncement(
          `Location updated. Latitude ${latitude}, longitude ${longitude}.`
        );
        setIsLoading(false);
      },
      err => {
        setError(err.message);
        setAnnouncement(`Error obtaining coordinates: ${err.message}.`);
        setIsLoading(false);
      }
    );
  }

  return {
    getCoordinates,
    coordinates,
    isLoading,
    error,
    announcement
  };
}
