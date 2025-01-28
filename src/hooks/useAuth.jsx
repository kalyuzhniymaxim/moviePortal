import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/slices/authSlice';
import { logIn, logOut } from '../redux/slices/authSlice';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from '../utils/LocalStorageUtil';

export default function useAuth() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(getLocalStorageItem('users') || {});
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const loggedInUser = getLocalStorageItem('loggedInUser');
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      dispatch(logIn());
    }
    setLoading(false);
  }, [dispatch]);

  const handleLogin = (user) => {
    setLocalStorageItem('loggedInUser', user);
    dispatch(logIn());
    navigate('/');
  };
  const loginUser = (e) => {
    e.preventDefault();
    const user = users[currentUser.email];
    if (user && user.password === currentUser.password) {
      handleLogin(user);
      navigate('/');
    } else {
      alert('неверный логин или пароль');
    }
  };

  const handleLogout = () => {
    removeLocalStorageItem('loggedInUser');
    setCurrentUser({});
    dispatch(logOut());
    navigate('/');
  };

  const addUser = (user) => {
    const updatedUsers = { ...users, [user.email]: user };
    setUsers(updatedUsers);
    setLocalStorageItem('users', updatedUsers);
  };

  return {
    users,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    handleLogin,
    loginUser,
    handleLogout,
    addUser,
    loading,
  };
}
