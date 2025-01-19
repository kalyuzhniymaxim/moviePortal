import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

export default function Authorisation() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  };
  return (
    <div style={styles}>
      <RegistrationForm />
    </div>
  );
}
