import SingUp from '../components/SingUp/SingUp';
import { Link } from 'react-router-dom';

export default function Registration() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  };
  return (
    <div style={styles}>
      <h1> SIGN UP </h1>
      <SingUp />
      <Link
        to="/signin"
        style={{
          color: 'var(--apricot)',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        SING IN
      </Link>
    </div>
  );
}
