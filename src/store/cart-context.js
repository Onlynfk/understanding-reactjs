import React from 'react'

 const CartContext = React.createContext({
    items:[],
    totalAmount:9,
    addItem:(item) =>{},
    removeItem:(item) =>{},
})


export default CartContext;