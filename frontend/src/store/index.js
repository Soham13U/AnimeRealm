import { configureStore, createSlice } from "@reduxjs/toolkit";
//to change the state for login, logout

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true; // state is true once user logs in
    },
    logout(state) {
      localStorage.removeItem("userId"); //once user has logged out, remove its value from local storage
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
