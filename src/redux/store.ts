import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice.ts';


export const reduxStore = configureStore({
    reducer: {
        auth: authReducer,
    },
});
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

