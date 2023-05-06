import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { save } from "react-cookies"

const initialState = {
  isLoading: false,
  LoggedIn: false,
  user: {},
  error: "",
  loginModal:{
    open: false, 
    form: "login"
  }
}


type LoginFormTypes = {
  email: string,
  password: string
}

type RegisterFormTypes = {
  usename: string, 
  email: string,
  password: string
}

const verifyAuth = createAsyncThunk( "auth/chverifyAuth", async ( token: string ) => {
  console.log( "token", token)
  return await axios.post(`http://localhost:8000/api/v1/auth/verify?token=${token}`)
  .then( response => {
    console.log( response )
    return response 
  })
})

const handleLogin = createAsyncThunk('auth/handleLogin', async  (credentials: LoginFormTypes)  => {
     return await axios.post('http://localhost:8000/api/v1/auth/login', credentials)
      .then( response => { 
        console.log( response )

        save("x_auth", response.data.apiKey, {})
        return response
      })
})

const handleRegister = createAsyncThunk('auth/handleRegister', async (authData:RegisterFormTypes) => {
  return await axios.post("http://localhost:8000/api/v1/auth/signup", authData)
  .then( response => {
    return response 
  })
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoginModal: ( state ) => {
      state.loginModal.open  = !state.loginModal.open
    },
    setForm: ( state, action ) => {
      state.loginModal.open = true
      state.loginModal.form = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, state => {
      state.isLoading = true 
      state.error = ""
    })
    builder.addCase(handleLogin.fulfilled, ( state, action) => {
      state.isLoading = false
      state.LoggedIn = true
      state.loginModal.open = false
      state.user = action.payload.data
      console.log(action.payload.data.apiKey)
    })
    builder.addCase(verifyAuth.fulfilled, ( state , action) => {
      state.LoggedIn = true
      state.user = action.payload.data
  })
    builder.addCase( handleLogin.rejected, (state, action) => {
      state.isLoading = false
      switch( action.error.code){
        case "ERR_BAD_REQUEST":
            state.error = "Username or Password incorrect"
            break;
            default: 
            state.error = "Network error"
      }
    })
    builder.addCase(handleRegister.pending, state => {
      state.isLoading = true 
      state.error = ""
    })
    builder.addCase(handleRegister.fulfilled, (state, action ) => {
      state.isLoading = false 
      state.user = action.payload.data
      state.loginModal.open  = !state.loginModal.open
      state.LoggedIn = true

    })
    builder.addCase( handleRegister.rejected, (state, action) => {
      state.isLoading = false

      switch( action.error.code){
        case "ERR_BAD_REQUEST":
            state.error = "User Already Exist"
            break;
            default: 
            state.error = "Network error"
      }
    })
  }
})

export const auth = authSlice.reducer
export const {toggleLoginModal, setForm} = authSlice.actions
export const login = handleLogin 
export const register = handleRegister
export const verifyAuthentication = verifyAuth