import Counter from './components/Counter';
import { useSelector, useDispatch } from 'react-redux';

import React, {Fragment} from 'react'
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Fragment>
       <Header />
      { isAuth == false && <Auth/> }
      { isAuth == true && <UserProfile/>}
       <Counter />
    </Fragment>
   
  );
}

export default App;
