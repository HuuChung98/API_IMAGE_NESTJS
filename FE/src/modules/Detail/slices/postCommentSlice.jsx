import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";

const initialState = {
    userComment: [],
    isLoading: false,
    error: null
}

export const postCmt = createAsyncThunk(
    "post",
    async ({payload, user_id}) => {
        return await imageAPI.postCmt({payload, user_id});
    }
)

const postCommentSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: {
        [postCmt.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [postCmt.fulfilled]: (state, action) => {
            return {...state, userComment: action.payload, isLoading: false}
        },
        [postCmt.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
}); 

export default postCommentSlice.reducer