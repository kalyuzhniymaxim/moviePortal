import { useEffect, useState } from 'react';
import styles from './RegistrationForm.module.scss';

export default function SingIn() {
  const [users, SetUsers] = useState(JSON.parse(localStorage.getItem('user')) || {});


const [currentUser, setCurrentUser] = useState({});
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    setCurrentUser(JSON.parse(loggedInUser));
    setIsLoggedIn(true);
  }
}, []);

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
    setUsers({ ...users, [currentUser.email]: currentUser });
    localStorage.setItem(
      'users',
      JSON.stringify({ ...users, [currentUser.email]: currentUser })
    );
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    setIsLoggedIn(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users[currentUser.email];
    if (user && user.password === currentUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setIsLoggedIn(true);
    } else {
      alert('Неверный логин или пароль.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setCurrentUser({});
    setIsLoggedIn(false);
  };
  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className={styles.block}>
          {/* <input
            type="text"
            name="username"
            placeholder="User Name"
            value={currentUser.username || ''}
            onChange={handleChange}
            required
          /> */}
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
          <button type="button" onClick={handleLogin}>
            Log in
          </button>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      )}
    </>
  );

}