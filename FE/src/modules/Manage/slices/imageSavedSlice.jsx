import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images"


const initialState = {
    data: [],
    isLoading: false,
    errors: null
}

export const getImageSaved = createAsyncThunk(
    "user/saved",
    async(user_id) => {
        return await imageAPI.getImageSaved(user_id);
    } 
)

const imageSavedSlice = createSlice({
    name: 'user/saved',
    initialState,
    extraReducers: {
        [getImageSaved.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [getImageSaved.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [getImageSaved.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
})

export default imageSavedSlice.reducer