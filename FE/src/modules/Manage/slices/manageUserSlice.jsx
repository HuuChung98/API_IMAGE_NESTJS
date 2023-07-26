import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as imageAPI from "../../../apis/images"


const initialState = {
    data: [],
    isLoading: false,
    errors: null
}

export const getImageCreated = createAsyncThunk(
    "user/created",
    async (user_id) => {
        return await imageAPI.getImageCreated(user_id);
        // localStorage.setItem("data", JSON.stringify(data));
    }
)


const manageUserSlice = createSlice({
    name: 'user/created',
    initialState,
    extraReducers: {
        [getImageCreated.pending]: (state) => {
            return {...state, isLoading: true}
        },
        [getImageCreated.fulfilled]: (state, action) => {
            return {...state, data: action.payload, isLoading: false}
        },
        [getImageCreated.rejected]: (state, action) => {
            return {...state, error:action.error, isLoading: false}
        },
    }
})

export default manageUserSlice.reducer