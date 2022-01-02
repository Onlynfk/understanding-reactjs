import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../features/todoSlice';

const store = configureStore({
    // map of reducer -- need a key
    // or single reducer
    reducer:{
        todos: todoSlice.reducer, 
    }
})

export default store;
