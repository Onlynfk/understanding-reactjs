import React, {useEffect} from 'react';
import Axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {createSelector } from "reselect";
import {makeSelectUsers} from "./selectors";
import { setUsers} from "./actions"
import UsersList from "./userList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}));

const actionDispatch = (dispatch) =>({
    setUserse:(users) => dispatch(setUsers(users)) 
})

export function HomePage(props){
    const { users } = useSelector(stateSelector);
    const { setUserse} = actionDispatch(useDispatch())

    
const fetchUsers = async () => {
    const response =  await  Axios.get("https://reqres.in/api/users")
    .catch((err) => {
        console.log("Error ", err)
    });
    if(!response) return <div>no users</div>
    
   setUserse(response.data.data);
}

useEffect(() =>{
    fetchUsers();
}, [])

console.log("users:", users )

    return (
        <div>
            <h2>hello world</h2>
           <UsersList/>
        </div>
    )
}