import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";

const initialState = {
    data: [],
    isLoading: false,
    error: null
}
 
export const getImages = createAsyncThunk(
    "user/get-image",
    async () => {
        // const { data } = await imageAPI.getImages();
        // return data;
        return await imageAPI.getImages();
    }
)



const imagesSlice = createSlice({
    name: 'user/get-image',
    initialState,
    extraReducers: {
        [getImages.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [getImages.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [getImages.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
});

export default imagesSlice.reducer;