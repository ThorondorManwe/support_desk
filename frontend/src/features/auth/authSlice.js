/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
//import authService from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register new user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    /* try {
        return await authService.register(user)
      } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
      } */
    console.log(user);
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  /* try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  } */
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
});

export default authSlice.reducer;
