export const getLocalStorageItem = (key, defaultValue = null) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const setLocalStorageFavourite = (arr) => {
  const users = getLocalStorageItem('users');
  const email = getLocalStorageItem('loggedInUser').email;

  if (users.hasOwnProperty(email)) {
    users[email].favourite = arr;
    setLocalStorageItem('users', users);
  }
};
