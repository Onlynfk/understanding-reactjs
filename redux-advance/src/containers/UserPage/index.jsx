import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setUser } from "./actions";
import { createSelector } from "reselect";
import { makeSelectUser } from "./selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserImage = styled.div`
  width: 100%;
  height: 7em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({
  user,
}));


const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});


function UserPage() {
  const { user } = useSelector(stateSelector);
  console.log("User Profile", user);

  const { setUser } = actionDispatch(useDispatch());

  const { userId } = useParams();

  const fetchUser = async (id) => {
    const response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((err) => {
        console.log("Erroor", err);
      });
    // console.log(response.data.data);
    // if (response) setUser(response.data.data);

    // if(!response) return <div>no users</div>

  };

  useEffect(() => {
    if (userId && userId !== "") fetchUser(userId);
  }, [userId]);

  if(!user) return <div>loading</div>


  return (
    <UsersContainer>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar} alt="user img" />
        </UserImage>
        <UserName>
          {user.first_name}
          {user.last_name}
        </UserName>
      </UserWrapper>
    </UsersContainer>
  );
}
export default UserPage;
