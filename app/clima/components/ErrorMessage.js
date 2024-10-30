const ErrorMessage = ({ error }) => {
    return <p style={styles.error}>{error}</p>;
  };
  
  const styles = {
    error: {
      color: 'red',
      fontSize: '1.2rem',
    },
  };
  
  export default ErrorMessage;
  