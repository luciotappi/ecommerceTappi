//react imports 
import React, { useState } from "react";

//firebase imports
import { serverTimestamp} from "firebase/firestore";

import {createOrderInFirestore,getItemFirebase,updateStock} from '../Data/Data';

export const CartContext = React.createContext([]);

export default function CartCustomContext({children})

   
{

   
    const [cart, setCart] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("cart");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });

    
    const [cartQuantity, setCartQuantity] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("cartQuantity");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });
    
    const [totalPrice, setTotalPrice] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("totalPrice");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });
    const [productinCart,setProductInCart]=useState(false);


    const  addCartItem = (producto,quantity) => {
       
        const productInCart = cart.find((productInCart)=> productInCart.idProd === producto.idProd );
        
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
            
            localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity + producto.quantity));

            setTotalPrice(

                
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
            
            
            localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity + producto.quantity));

            setTotalPrice(

                
                totalPrice + producto.price*producto.quantity
            );
           
            localStorage.setItem('totalPrice',JSON.stringify(totalPrice +producto.price*producto.quantity));
            console.log(' >> Elementos del carrito actual<<', listaActualizada);
            
            
            

        } 
        
        
    }

    const removeItem =(id) => {

        const prodToRemove = cart.filter ((product)=> product.idProd == id);
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
        
        
        try {
            const idInCart = cart.find((productInCart)=> productInCart.id == id );
            
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
            {children}
        </CartContext.Provider>
    )
}