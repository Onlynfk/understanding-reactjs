import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    // map of reducer -- need a key
    // or single reducer
    reducer:{
        ui:uiSlice.reducer,
        cart:cartSlice.reducer

    }
})

export default store;
