const WeatherCard = ({ clima }) => {
    return (
      <div style={styles.weatherCard}>
        <div style={styles.weatherItem}>
          <strong>Ciudad:</strong> {clima.name}
        </div>
        <div style={styles.weatherItem}>
          <strong>Temperatura:</strong> {clima.main.temp}°C
        </div>
        <div style={styles.weatherItem}>
          <strong>Humedad:</strong> {clima.main.humidity}%
        </div>
        <div style={styles.weatherItem}>
          <strong>Descripción:</strong> {clima.weather[0].description}
        </div>
      </div>
    );
  };
  
  const styles = {
    weatherCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
      color: '#444',
    },
    weatherItem: {
      margin: '10px 0',
      fontSize: '1.2rem',
    },
  };
  
  export default WeatherCard;
  