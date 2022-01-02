import React, {useContext, useEffect, useState} from 'react'
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) =>{
        return curNumber + item.amount
    }, 0)

    const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : '' }`;

    // using obect destructing to et items only from cart context
    const {items} = cartCtx

    useEffect(() => {
        if(items.length === 0){
            return;
        }

        setbtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setbtnIsHighLighted(false);
        }, 300);

        // cleamup funtion
        return () =>{
            clearTimeout(timer);
        }
    }, [items])


    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon/>
                
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
        
    )
}

export default HeaderCartButton;
