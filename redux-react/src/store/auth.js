
import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
    isAuthenticated : false,

}
const authSlice = createSlice({
    name : 'authentication',
    initialState:initialAuthState,
    // the reduers changee the state
    reducers:{
        login(state){
            state.isAuthenticated = true;

        },
        logout(state){
            state.isAuthenticated = false;
            

        },

    }

    

})

export default authSlice;