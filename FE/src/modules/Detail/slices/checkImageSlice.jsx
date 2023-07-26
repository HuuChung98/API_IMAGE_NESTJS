import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";


const initialState = {
    content: [],
    isLoading: false,
    error: null
}

export const checkImageSaved = createAsyncThunk(
    "user/check-image",
    async (image_id) => {
        return await imageAPI.checkImageSaved(image_id);
    }
)

const checkImageSlice = createSlice({
    name: 'user/check-image',
    initialState,
    extraReducers: {
        [checkImageSaved.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [checkImageSaved.fulfilled]: (state, action) => {
            return {...state, content: action.payload, isLoading: false}
        },
        [checkImageSaved.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
}); 

export default checkImageSlice.reducer