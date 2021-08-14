const redux = require('redux'); // declare redux


// reducer returns new object
const countReducer = (state = {counter: 0}, action) =>{

    if(action.type === 'increment'){
        return {
            counter:state.counter + 3,
        }
    }

    if(action.type === 'decrement'){
        return {
            counter :state.counter-3,
        }
    }
    return state;


}
// create a store
// and runs reducer fucntion
const store = redux.createStore(countReducer);
// console.log( store.getState())


// subscribe to the store
const countSubscripter = () => {
   console.log( store.getState())
}
// doesn't  run for subs
store.subscribe(countSubscripter) 

//  reducer runs reducer again for dispatch (action)
store.dispatch({ type:'increment'})
store.dispatch({ type:'decrement'})


