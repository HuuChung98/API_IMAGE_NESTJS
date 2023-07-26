import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../apis/auths";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
    error: null,
}

export const register = createAsyncThunk(
    "auth/register",
    async (values) => {
        return await authAPI.register(values);
    }
);


export const login = createAsyncThunk(
    "auth/login",
    async (values) => {
        const data = await authAPI.login(values);
        localStorage.setItem("user", JSON.stringify(data));
        return data
    }
);

const authSlices = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.pending]: (state) => {
            return { ...state, isLoading: true}
        },
        [login.fulfilled]: (state, action) => {
            return { ...state, isLoading: false, user: action.payload}
        },
        [login.rejected]: (state, action) => {
            return { ...state, isLoading: false, error: action.error.message}
        },
        [register.pending]: (state) => {
            return { ...state, isLoading: true}
        },
        [register.fulfilled]: (state) => {
            return { ...state, isLoading: false}
        },
        [register.rejected]: (state, action) => {
            return { ...state, isLoading: false, error: action.error.message}
        },
    }
})

export default authSlices.reducer;