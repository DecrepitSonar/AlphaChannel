import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    nowPlaying: {},
    comments: [],
}
const mediaPlayerSllice =  createSlice({
    name: "mediaPlayer",
    initialState,
    reducers: {
    }

})

export const mediaPlayer = mediaPlayerSllice.reducer
// export const { postComment } = mediaPlayerSllice.actions