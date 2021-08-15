import {useDispatch, useSelector} from  'react-redux';
import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice'


const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const toggleButtonHandler = (e) =>{
    dispatch(uiActions.toggle())

}

  return (
    <button onClick={toggleButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
