import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

export const editUser = createAsyncThunk(
    "user/edit-user",
    async ({ values, user_id }) => {
        return await imageAPI.editUser({ values, user_id});
    }
)

const editSlice = createSlice({
    name: 'user/get-image',
    initialState,
    extraReducers: {
        [editUser.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [editUser.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [editUser.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        }
    }
});

export default editSlice.reducer;
