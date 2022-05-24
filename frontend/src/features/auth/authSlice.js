import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// create new user
export const createUser = createAsyncThunk(
  'auth/create_user',
  async (user, thunkAPI) => {
    console.log(user)
  }
)

// login a user
export const loginUser = createAsyncThunk(
  'auth/login_user',
  async (user, thunkAPI) => {
    console.log(user)
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
