import SingIn from '../components/SignIn/SingIn';
import { Link } from 'react-router-dom';

export default function Authorisation() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  };
  return (
    <div style={styles}>
      <h1> SING IN </h1>
      <SingIn />
      <Link
        to="/signup"
        style={{
          color: 'var(--apricot)',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        SING UP
      </Link>
    </div>
  );
}
