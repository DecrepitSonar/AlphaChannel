import { configureStore } from '@reduxjs/toolkit'
import { auth } from "./Reducers/authSlice"
import { live } from "./Reducers/livestreamSlice"
import { videos } from './Reducers/videoSlice'
import { mediaPlayer } from './Reducers/mediaPlayerslice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    auth, live, videos, mediaPlayer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export default store