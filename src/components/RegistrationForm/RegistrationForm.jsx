import React, { useState } from 'react';

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

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setCurrentUser({ ...currentUser, [name]: value });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin(currentUser);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (users[currentUser.email]) {
      alert('Пользователь с таким email уже существует.');
      return;
    }
    if (currentUser.password.length < 5) {
      alert('Пароль должен содержать минимум 5 символов.');
      return;
    }
    if (currentUser.password !== confirmPassword) {
      alert('Пароли не совпадают.');
      return;
    }
    addUser(currentUser);
    handleLogin(currentUser);
    setIsCreatingAccount(false);
  };

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };
  const handleBackToLoginClick = () => {
    setIsCreatingAccount(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          {!isCreatingAccount ? (
            <form onSubmit={handleLoginSubmit} className={styles.block}>
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
              <PageButton text={'Войти'} handle={loginUser} />
              <PageButton
                text={'Создать аккаунт'}
                handle={handleCreateAccountClick}
              />
            </form>
          ) : (
            <form onSubmit={handleRegistrationSubmit} className={styles.block}>
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
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword || ''}
                required
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <PageButton text={'Регистрация'} />
              <PageButton text={'Назад'} handle={handleBackToLoginClick} />
            </form>
          )}
        </>
      ) : (
        <PageButton text={'Выйти'} handle={handleLogout} />
      )}
    </>
  );
}
