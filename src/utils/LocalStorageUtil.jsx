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

export const setLocalStorageHistory = (histories) => {
  return setLocalStorageItem('histories', histories);
};

export const getLocalStorageHistory = () => {
  return getLocalStorageItem('histories', {});
};

export const setLocalStorageFavourite = (favourite) => {
  return setLocalStorageItem('favourite', favourite);
};

export const getLocalStorageFavourite = () => {
  return getLocalStorageItem('favourite', {});
};
