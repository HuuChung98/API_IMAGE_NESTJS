import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

export const searchImages = createAsyncThunk(
    "user/get-image/image/",
    async (value) => {
        // const { data } = await imageAPI.searchImages(value);
        // console.log(data);
        // return data;
        return await imageAPI.searchImages(value);
    }
)

const searchImageSlice = createSlice({
    name: "user/get-image/image/",
    initialState,
    extraReducers: {
        [searchImages.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [searchImages.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [searchImages.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
});

export default searchImageSlice.reducer;