'use client';

import { useState } from 'react';
import MapContainer from './components/MapContainer';
import DealerList from './components/DealerList';
import ErrorMessage from './components/ErrorMessage';

const DealerPage = () => {
  const [dealers, setDealers] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Concesionarios de Vehículos Cercanos</h1>
      
      <MapContainer setDealers={setDealers} setError={setError} />

      {error && <ErrorMessage error={error} />}

      {!error && <DealerList dealers={dealers} />}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
};

export default DealerPage;
