'use client';

import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';

const WeatherInfo = () => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useLocation, setUseLocation] = useState(true); 

  useEffect(() => {
    const fetchClimaPorCoordenadas = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2a9190e0e624127cb5263afcefb1c1dd&units=metric`
        );
        if (!response.ok) {
          throw new Error('Error al obtener los datos de clima');
        }
        const data = await response.json();
        setClima(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const obtenerUbicacion = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchClimaPorCoordenadas(latitude, longitude);
          },
          (err) => {
            console.error('Error obteniendo la ubicación', err);
            setError('No se pudo obtener la ubicación. Usa el campo de búsqueda.');
            setUseLocation(false); 
            setLoading(false);
          }
        );
      } else {
        setError('La geolocalización no es soportada por este navegador.');
        setLoading(false);
      }
    };

    if (useLocation) {
      obtenerUbicacion(); 
    }
  }, [useLocation]); 

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Clima Actual</h1>
      {clima && <WeatherCard clima={clima} />}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
};

export default WeatherInfo;
