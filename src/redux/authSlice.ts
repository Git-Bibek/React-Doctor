import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "../pages/auth/auth.service.ts";
import {initialState} from "./___contract.ts";


export const getLoggedInUserRedux = createAsyncThunk(
    'auth/getLoggedInUser',
    async () => {
        try {
            const response: any = await authService.getRequest('/auth/login-check', {auth: true});
            return response.result
        } catch (exception) {
            console.log(exception)
            throw exception
        }
    }
)


const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.token = localStorage.getItem("_at");
            state.loggedInUser = action.payload
            console.log(state.user, 'From setLoggedInUser in authSlice');
        },
        login: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            localStorage.setItem("_at", action.payload.token);
            console.log(action, state, 'From login in authSlice');
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("_at");
            state.token = null;
            console.log('From logout in authSlice');
        }
    },
    extraReducers: (builder: any) => {
        builder.addCase(getLoggedInUserRedux.fulfilled, (state: any, action: any) => {
            state.user = action.payload
            state.isAuthenticated = true;
            state.token = localStorage.getItem("_at");
            state.loggedInUser = action.payload
            console.log(action, state, 'From getLoggedInUserRedux in authSliceBuilder');
        })
        builder.addCase(getLoggedInUserRedux.rejected, (state: any, action: any) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("_at");
            state.token = null;
            console.log(action, state, 'From getLoggedInUserRedux in authSliceBuilder');
        })
    }
})
export const {setLoggedInUser, logout, login} = AuthSlice.actions
export default AuthSlice.reducer