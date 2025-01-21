import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn, logOut } from '../../redux/slices/authSlice';
import { PageButton } from '../PageButton/PageButton';
import styles from './RegistrationForm.module.scss';

export function RegistrationForm() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || {},
  );
  const [currentUser, setCurrentUser] = useState({});
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // console.log(loggedInUser);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
      dispatch(logIn());
    }
  }, [dispatch]);

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
      JSON.stringify({ ...users, [currentUser.email]: currentUser }),
    );
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    dispatch(logIn());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users[currentUser.email];
    if (user && user.password === currentUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      dispatch(logIn());
    } else {
      alert('Неверный логин или пароль.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setCurrentUser({});
    dispatch(logOut());
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
          <PageButton text={'Log in'} handle={handleLogin} />
          <PageButton text={'Sign Up'} />
        </form>
      ) : (
        <PageButton text={'Log out'} handle={handleLogout} />
      )}
    </>
  );
}
