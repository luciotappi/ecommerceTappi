import { serverTimestamp, updateDoc,increment } from "firebase/firestore";
import React, { useState } from "react";

import {createOrderInFirestore,getItemFirebase,updateStock} from '../Data/Data';
export const CartContext = React.createContext([]);

export default function CartCustomContext({children})

   
{

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("cart");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });

    // const [cartQuantity,setCartQuantity]=useState(0);
    const [cartQuantity, setCartQuantity] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("cartQuantity");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });
    // const [totalPrice,setTotalPrice]=useState(0);
    const [totalPrice, setTotalPrice] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("totalPrice");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });
    const [productinCart,setProductInCart]=useState(false);


    const  addCartItem = (producto,quantity) => {
        console.log(quantity);
        console.log(producto.quantity);
        console.log(cart);
        const productInCart = cart.find((productInCart)=> productInCart.idProd === producto.idProd );
        console.log(productInCart);
        if (productInCart){
            const newCart = cart.map((productInCart) => {

                if (productInCart.idProd === producto.idProd){
                    return {...productInCart, quantity: producto.quantity+ productInCart.quantity};
                } else {
                    return productInCart;
                }
            });
            setCart(newCart);
            localStorage.setItem('cart',JSON.stringify(newCart));

            setCartQuantity(

                cartQuantity + producto.quantity
            );
            let cartCuantityAux = cartQuantity + producto.quantity;
            localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity + producto.quantity));

            setTotalPrice(

                // totalPrice + parseInt(producto.price.replace('$', '')*producto.quantity)
                totalPrice +producto.price*producto.quantity
            );

            localStorage.setItem('totalPrice',JSON.stringify(totalPrice +producto.price*producto.quantity));

        } else
        {
            const listaActualizada = [...cart,producto]
            setCart(listaActualizada);
            localStorage.setItem('cart',JSON.stringify(listaActualizada));
            setCartQuantity(

                cartQuantity + producto.quantity
            );
            
            let cartCuantityAux = cartQuantity + producto.quantity;
            localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity + producto.quantity));

            setTotalPrice(

                // totalPrice + parseInt(producto.price.replace('$', '')*producto.quantity)
                totalPrice + producto.price*producto.quantity
            );
           
            localStorage.setItem('totalPrice',JSON.stringify(totalPrice +producto.price*producto.quantity));
            console.log(' >> Elementos del carrito actual<<', listaActualizada);
            
            
            

        } 
        
        
    }

    const removeItem =(id) => {

        const prodToRemove = cart.filter ((product)=> product.idProd == id);
        console.log(cart);
        console.log(id);
        console.log(prodToRemove);
        console.log(prodToRemove[0].quantity);
        const newCart =cart.filter ((product)=> product.idProd !== id);
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
        
        setCartQuantity(

            cartQuantity - prodToRemove[0].quantity
        );

        localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity - prodToRemove[0].quantity));
        setTotalPrice(

            totalPrice - parseInt(prodToRemove[0].price*prodToRemove[0].quantity)
        );

        localStorage.setItem('totalPrice',JSON.stringify(totalPrice - parseInt(prodToRemove[0].price*prodToRemove[0].quantity)));
    }

    const removeAll = () => {
        
        setCartQuantity(0);
        localStorage.setItem('cartQuantity',JSON.stringify(0));
        setCart([]);
        localStorage.setItem('cart',JSON.stringify([]));
        setTotalPrice(0);
        localStorage.setItem('totalPrice',JSON.stringify(0));

        
    }

    const isInCart = (id) => {
        
        console.log("ID QUE LE PASO AL CONTEXT : > ",id);
        console.log("Y HASTA AHORA EL CART ES >: ",cart);
        try {
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
        catch(e) { 
            console.error(e); 
        }
    }


    const createOrder = (userData) => {


        //stock check

        let stockError= false;
        console.log (cart);
        let counter =0;
        let finish=false;
        Object.keys(cart).forEach(key => {
            async function getD () {
        
                const itemForStockCheck  = await getItemFirebase(cart[key].idProd);
                counter++;
                return itemForStockCheck;
             }

            getD().then(data=>
                {
                  
                    if (data.stock != cart[key].stock)
                    {
                        stockError=true;
                        console.log("Error de stock en el producto :" + data.title);
                        alert(data.title + " fuera de stock para las cantidades pedidas!");
                        
                    }
                    if (counter==cart.length){
                        console.log("el error interno final es de :" + stockError);
                        if (stockError == false )
                        {

                            //save order    
                                const itemsForDB = cart.map(item => ({

                                            id:item.idProd,
                                            title:item.title,
                                            price: item.price,
                                        }))

                                        let order = {
                                            buyer: {
                                                name: userData.name,
                                                phone:userData.phone,
                                                email:userData.email
                                            },
                                            items:itemsForDB,
                                            date:serverTimestamp(),
                                            status:'generada',
                                            total:totalPrice
                                        }
                                        console.log(cart);
                                        console.log(order);
                                        createOrderInFirestore(order)
                                        .then(result => {
                                            alert("Tu orden ha sido creada. Numero de orden: " + result.id);
                                            console.log(result);
                                            console.log("PROCESO DE RE STOCK");
                                            console.log("EL CART ES :" , cart);
                                            
                                            cart.forEach (async (item) => {

                                                
                                                updateStock(item)
                                            })
                                        })
                                        .catch(err => console.log(err))
                                        removeAll();
                        }
                        
                    }
                    
                })
            
            });
        
    }
    
     return(
        <CartContext.Provider value={{addCartItem,removeItem,removeAll,isInCart,createOrder, cartData: cart, cartQuantity:cartQuantity,totalPrice,productInCart:productinCart}}>
            {/* <CartContext.Provider value={{addCartItem,removeItem,removeAll, cartData: cart}}> */}
            {children}
        </CartContext.Provider>
    )
}