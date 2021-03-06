import {useReducer} from 'react'
import CartContext  from './cart-context'

const defaultCartState ={
    items:[],
    totalAmount:0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(item => item.id  === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems;


        if(existingCartItem){
            const  updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedItems =state.items.concat(action.item)

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
        
    }

    if(action.type === 'REMOVE'){
        // finding the cart item
        const existingItemIndex = state.items.findIndex(
            item => item.id  === action.id)
        // initialize thwe cart item
        const existingItem = state.items[existingItemIndex]
        // update totla amount 
        const updatedTotalAmount = state.totalAmount - existingItem.price

        let updatedItems;

        if(existingItem.amount === 1){
        // temove cart item totally
            updatedItems = state.items.filter(item => item.id  === existingItemIndex)

        }
        else{
            // decrease quantity and amount on cart item
            const updatedItem = {...existingItem, amount:existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
        
    }

    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchcartState] = useReducer(cartReducer, defaultCartState    )

    const addItemCartHandler = item =>{
        dispatchcartState({type:'ADD', item: item})

    }

    const removeItemCartHandler = id =>{
        dispatchcartState({type:'REMOVE', id: id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemCartHandler,
        removeItem:removeItemCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;