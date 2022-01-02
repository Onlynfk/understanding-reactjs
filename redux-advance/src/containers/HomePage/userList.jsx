import React from "react"
import {createSelector} from "reselect"
import {makeSelectUsers} from "./selectors";
import {useSelector} from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const UsersContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
`;

const UserImage  =styled.div`
    width:100%;
    height:7em;
    img{
        width:100%;
        height:100%;

    }
`;

const UserName = styled.h3`
    font-size:20px;
    color:#000;
    margin:0;
`;

const UserWrapper = styled.div`
    display:flex;
    flex-direction:column;

`;


const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}));

function UsersList(props){
    const { users } = useSelector(stateSelector);
    console.log('Users from userslist', users)

    const history = useHistory();

    const goToUserPage = (id) =>{
        history.push(`/user/${id}`);

    }
    const isEmptyUsers = !users || (users && users.length === 0);
    
    if(isEmptyUsers)
        return null;

    return <UsersContainer>
        
        {users.map((user, idx) =>(
            <UserWrapper key={idx}>
                <UserImage onClick={goToUserPage(user.id)}> 
                    <img src={user.avatar} alt="user img" />
                </UserImage>
                <UserName>{user.first_name}
                {user.last_name}
                </UserName>
            </UserWrapper>
        ))}
    </UsersContainer>
}

export default UsersList;