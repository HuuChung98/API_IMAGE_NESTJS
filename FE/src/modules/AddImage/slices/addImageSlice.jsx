import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images"


const initialState = {
    // data: [],
    isLoading: false,
    error: null
}

export const addImage = createAsyncThunk(
    "user/add-image",
    async ({payload, user_id}) => {

        await imageAPI.addImage({payload, user_id});
        return null;
    }
)

const addImageSlice = createSlice({
    name: 'user/get-image',
    initialState,
    extraReducers: {
        [addImage.pending]: (state) => {
            return {...state, isLoading: true}
        },
        // [addImage.fulfilled]: (state, action) => {
        //     return {...state, data: action.payload, isLoading: false}
        // },
        [addImage.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
});

export default addImageSlice.reducer