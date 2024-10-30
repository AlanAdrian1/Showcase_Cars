const DealerList = ({ dealers }) => {
  return (
    <div style={styles.container}>
      {dealers.map((dealer, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{dealer.name}</h2>
          <p style={styles.address}>Dirección: {dealer.vicinity}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  address: {
    fontSize: '1.1rem',
    color: '#666',
  },
};

export default DealerList;
