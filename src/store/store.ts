import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../Counter/counterslice';
import searchReducer from '../Search/searchslice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
