import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authentication.isAuthenticated);
console.log(isAuth)
  
  const authLogoutHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.logout());
    console.log("logout")
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
        {isAuth == true &&  <li>
            <a href='/'>My Products</a>
          </li>}
          { isAuth == true && <li>
            <a href='/'>My Sales</a>
          </li>}
          { isAuth == true && <li>
            <button onClick={authLogoutHandler}>Logout</button>
          </li>}
       
        </ul>
      </nav>
    </header>
  );
};

export default Header;
