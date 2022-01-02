import React from "react"
import {createSelector} from "reselect"
import {makeSelectUser} from "./selectors";
import {useSelector} from "react-redux";
import styled from "styled-components";

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


function UserProfile(){
    
const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}));

    const { user } = useSelector(stateSelector);
    console.log('User Profile', user)

    
    return <UsersContainer>
            <UserWrapper key={user.id}>
                <UserImage > 
                    <img src={user.avatar} alt="user img" />
                </UserImage>
                <UserName>{user.first_name}
                {user.last_name}
                </UserName>
            </UserWrapper>
    </UsersContainer>
}

export default UserProfile;