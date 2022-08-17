import React, { useState } from "react";


export const CartContext = React.createContext([]);

export default function CartCustomContext({children})

   
{

    const [cart, setCart] = useState([]);
    
    const  addCartItem = (producto,quantity) => {
        console.log(quantity);
        console.log(producto.quantity);
        const productInCart = cart.find((productInCart)=> productInCart.id === producto.id );
        console.log(productInCart);
        if (productInCart){
            const newCart = cart.map((productInCart) => {

                if (productInCart.id === producto.id){
                    return {...productInCart, quantity: producto.quantity+ productInCart.quantity};
                } else {
                    return productInCart;
                }
            });
            setCart(newCart);
        } else
        {
            const listaActualizada = [...cart,producto]
            setCart(listaActualizada);
            console.log(' >> Elementos del carrito actual<<', listaActualizada);
        } 
        
        
    }

    const removeItem =(id) => {

        const newCart =cart.filter ((product)=> product.id !== id);
        setCart(newCart);
    }

    const removeAll = () => {

        setCart([]);

    }


     return(
        <CartContext.Provider value={{addCartItem,removeItem,removeAll, cartData: cart}}>
            {children}
        </CartContext.Provider>
    )
}