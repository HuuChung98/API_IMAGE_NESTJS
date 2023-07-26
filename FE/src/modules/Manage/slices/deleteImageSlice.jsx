import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";


const initialState = {
    // data: [],
    isLoading: false,
    error: null
}

export const deleteImage = createAsyncThunk(
    "image/remove",
    async(image_id) => {
        return await imageAPI.deleteImage(image_id);
    }
)
const deleteImageSlice = createSlice({
    name: "image/remove",
    initialState,
    extraReducers: {
        [deleteImage.pending]: (state) => {
            return {...state, isLoading: true}
        },
        // [deleteImage.fulfilled]: (state, action) => {
        //     return {...state, data: action.payload, isLoading: false}
        // },
        [deleteImage.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
})

export default deleteImageSlice.reducer