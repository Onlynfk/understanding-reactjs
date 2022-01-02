import React, {Fragment} from 'react';
import classes from './Header.module.css';
import Meals from '../../assests/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const  Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>OrderMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt="meals" />

            </div>
      
    </Fragment>
}
   

export default Header;
