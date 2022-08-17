import React, { useContext } from "react";

import {CartContext} from '../../context/CartContext'
 
import CartCard from '../CartCard/CartCard'; // para importar funciones 


import Button from 'react-bootstrap/Button';

export default function Cart() {

    // const {cartData}= useContext(CartContext);
     const {cartData,removeAll}= useContext(CartContext);
    
    console.log('>>cartData : ',cartData)
     
    return(
      <>
      <div className="cart">
            Aqui es posible ver la info del cart
          {
            cartData.map((item)=> {

                // return <div>{`ID: ${item.id} - Cantidad : ${item.quantity}`}
                
                return <CartCard {...item}/>
                  
                
                // <button onClick={() => removeItem(item.id)}>Borrar Item</button>
                // </div>
            })
          } 
          
        </div>
        <Button variant="danger" onClick={() => removeAll()}>Vaciar carrito</Button>
      </>
        
    )
}