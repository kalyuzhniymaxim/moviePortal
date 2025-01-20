import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    // Действие для входа пользователя
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    // Действие для выхода пользователя
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Экспорт действий
export const { logIn, logOut } = authSlice.actions;

// Экспорт редьюсера
export default authSlice.reducer;
