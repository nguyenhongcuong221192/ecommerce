import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../reducers/sidebar_reducer';

export const store = configureStore({
    reducer: {
        sidebarReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>