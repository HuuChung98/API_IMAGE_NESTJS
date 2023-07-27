import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images";

const initialState = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    data: [],
    isLoading: false,
    error: null
}

export const editUser = createAsyncThunk(
    "user/edit-user",
    async ({ values, user_id }) => {
        return await imageAPI.editUser({ values, user_id});
        // const data =  await imageAPI.editUser({ values, user_id});
        // localStorage.setItem("user", JSON.stringify(data));
        // return data
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
            return {...state, user: action.payload, isLoading: false}
        },
        [editUser.rejected]: (state, action) => {
            return {...state, error:action.error.message, isLoading: false}
        }
    }
});

export default editSlice.reducer;
