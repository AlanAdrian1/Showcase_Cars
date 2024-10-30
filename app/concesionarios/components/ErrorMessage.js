const ErrorMessage = ({ error }) => {
    return <p style={styles.error}>{error}</p>;
  };
  
  const styles = {
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '1.2rem',
      marginTop: '20px',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    },
  };
  
  export default ErrorMessage;
  