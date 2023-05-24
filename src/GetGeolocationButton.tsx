import React from 'react';

// create a button component that gets the geolocation
export const GetGeolocationButton = () => {
  const [geolocation, setGeolocation] =
    React.useState<GeolocationPosition | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getGeolocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        console.log(JSON.stringify(position.coords));
        setGeolocation(position);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <button onClick={getGeolocation} disabled={loading}>
        Get Geolocation
      </button>
      {geolocation && (
        <pre>
          <code>
            {geolocation.coords.latitude}, {geolocation.coords.longitude}
          </code>
        </pre>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
