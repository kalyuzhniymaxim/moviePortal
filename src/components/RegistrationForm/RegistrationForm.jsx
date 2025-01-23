import useAuth from '../../hooks/useAuth';
import { PageButton } from '../PageButton/PageButton';
import styles from '../RegistrationForm/RegistrationForm.module.scss';

export function RegistrationForm() {
  const {
    users,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    handleLogin,
    loginUser,
    handleLogout,
    addUser,
  } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users[currentUser.email]) {
      alert('Пользователь с таким email уже существует.');
      return;
    }
    addUser(currentUser);
    handleLogin(currentUser);
  };

  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className={styles.block}>
          <input
            type="email"
            name="email"
            value={currentUser.email || ''}
            required
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={currentUser.password || ''}
            required
            placeholder="Password"
            onChange={handleChange}
          />
          <PageButton text={'Log in'} handle={loginUser} />
          <PageButton text={'Sign Up'} />
        </form>
      ) : (
        <PageButton text={'Log out'} handle={handleLogout} />
      )}
    </>
  );
}
