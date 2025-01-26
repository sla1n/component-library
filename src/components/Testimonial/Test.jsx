export default function Test(){
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="src\assets\react.svg" // Replace with actual image source
          alt="Person"
          style={styles.image}
        />
      </div>
      <div style={styles.textContainer}>
        <p style={styles.quote}>"</p>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
          vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </p>
        <p style={styles.name}>May Andersons</p>
        <p style={styles.position}>Workcation, CTO</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  imageContainer: {
    flex: '1',
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    flex: '2',
    backgroundColor: '#254EDB',
    padding: '20px',
    borderRadius: '8px',
    color: '#ffffff',
  },
  quote: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  text: {
    fontSize: '16px',
    margin: '10px 0',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  position: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
}