import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";
import cn from "classnames";

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

export const getImagesDetail = createAsyncThunk(
    "image/detail",
    async (image_id) => {
        return await imageAPI.getImagesDetail(image_id);
    }
)

const getDetailSlice = createSlice({
    name: 'image/detail',
    initialState,
    extraReducers: {
        [getImagesDetail.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [getImagesDetail.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [getImagesDetail.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
}); 

export default getDetailSlice.reducer