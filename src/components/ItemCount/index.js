import { useState , useEffect} from "react";

// imports bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 
// Own CSS 

import './btnAddCart.css'
import './btnQty.css'
import './lblQuantity.css'
import './lblStockQuantity.css'
// main function 

function ItemCount({stock, initial, onAdd}) {


    console.log("El stock ds de " + stock + " unidades");
    console.log("El valor inicial es de " + initial);

    //check stock and handle AddCart btn 

    // use states 

    const [quantity,setQuantity] = useState(parseInt(initial));

   
    const stockAvailable = stock >= 1 ? true : false;
    console.log(stockAvailable);
    console.log(!stockAvailable);
    // use effects


    // useEffect(() => {
    //     console.log('%c    Renderizado Siempre', 'color: #38761d');
    //     return () => {
    //         console.log('Contador listo para ser cleanup!');
    //     }        
    // });

    // useEffect(() => {
    //     console.log('%c    >>>>> Renderizado Contador', 'color: #00761d');
    //     return () => {
    //         console.log('Contador listo para ser cleanup!');
    //     }
    // }, [quantity]);
    useEffect(() => {
    const btnAddCart =document.getElementsByClassName('btnAddCart');
    console.log(btnAddCart.fontSize);
        return () => {
            console.log('Contador listo para ser cleanup!');
        }        
    });

    // functions

    function decQty(){

        if (quantity ==1)
        {
          console.log('la cantidad minima a pedir es ' + quantity);       
        } else{
            setQuantity(
                quantity -1
            );
        }
    };

    function incQty(){

        
        if (quantity >= stock)
        {
          console.log('la cantidad maxima no puede superar el stock. STOCK = ' + stock);       
        } else{
            // setQuantity(
                 
            //     quantity++
                
            // );
            setQuantity(quantity +1);
            
        }
        
    };




    function addON(){

        if (!stockAvailable){
            console.log("No hay stock del produto seleccionado.");
        } else {
            console.log(quantity);  
        }
    };
    
    console.log(quantity);
    return (

        <div className="container  border border-dark rounded mx-auto" style = {{width:"100%",margin:"0px"}}>
            <div className="row ">
                <div class="col d-flex justify-content-start ">
                    <button onClick={decQty} className="btnQty">-</button>
                </div>
                <div class="col d-flex justify-content-center" >
                    <h1 className="lblQuantity"id="lblquantity">{quantity}</h1> 
                </div>
                
                <div class="col d-flex justify-content-end">
                    <button onClick={incQty} className="btnQty">+</button>
                </div>
                   
            </div>

            <div className="row">
                <h4 className="lblStockQuantity"id="lblStockquantity">En stock : {stock}</h4> 
                </div>
           <div className="row">
               
                    <button onClick={addON} className="btnAddCart" disabled={!stockAvailable}>Agregar al carrito!</button>
                
           </div>
        </div>

    );

}

export default ItemCount;
