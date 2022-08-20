import React, { useState } from "react";


export const CartContext = React.createContext([]);

export default function CartCustomContext({children})

   
{

    const [cart, setCart] = useState([]);
    const [cartQuantity,setCartQuantity]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [productinCart,setProductInCart]=useState(false);
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
            setCartQuantity(

                cartQuantity + producto.quantity
            );
            setTotalPrice(

                totalPrice + parseInt(producto.price.replace('$', '')*producto.quantity)
            );
        } else
        {
            
            setCartQuantity(

                cartQuantity + producto.quantity
            );
            
            setTotalPrice(

                totalPrice + parseInt(producto.price.replace('$', '')*producto.quantity)
            );
           
            const listaActualizada = [...cart,producto]
            setCart(listaActualizada);
            console.log(' >> Elementos del carrito actual<<', listaActualizada);
            
            
            

        } 
        
        
    }

    const removeItem =(id) => {

        const prodToRemove = cart.filter ((product)=> product.id == id);
        console.log(prodToRemove[0].quantity);
        const newCart =cart.filter ((product)=> product.id !== id);
        setCart(newCart);
        
        setCartQuantity(

            cartQuantity - prodToRemove[0].quantity
        );

        setTotalPrice(

            totalPrice - parseInt(prodToRemove[0].price.replace('$', '')*prodToRemove[0].quantity)
        );

        
    }

    const removeAll = () => {
        
        setCartQuantity(0);
        
        setCart([]);

        setTotalPrice(0);
        
    }

    const isInCart = (id) => {
        
        console.log("ID QUE LE PASO AL CONTEXT : > ",id);
        console.log("Y HASTA AHORA EL CART ES >: ",cart);
        const idInCart = cart.find((productInCart)=> productInCart.id == id );
        console.log("EL RESULTADO DEL FIND ES >>:  ",idInCart)
        if (idInCart !=null) {

            setProductInCart(true)

        } 
        else
        {
            setProductInCart(false)
        }
    }


     return(
        <CartContext.Provider value={{addCartItem,removeItem,removeAll,isInCart, cartData: cart, cartQuantity:cartQuantity,totalPrice,productInCart:productinCart}}>
            {/* <CartContext.Provider value={{addCartItem,removeItem,removeAll, cartData: cart}}> */}
            {children}
        </CartContext.Provider>
    )
}