import React, {useContext} from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';



function Cart(props) {
    const carCtx = useContext(CartContext)
    
    const totalAmount = `$${carCtx.totalAmount.toFixed(2)}`; // two decimal places
    const hasItems = carCtx.items.length >  0;
  

    const  cartItemRemoveHandler = (id)=>{
      
    }
    const  cartItemAddHandler = (item)=>{
      
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
          {carCtx.items.map((item) => (
            <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );    

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>CLose </button>
                {hasItems && <button className={classes.button}>Order </button>}

            </div>
        </Modal>

    )
}

export default Cart;
