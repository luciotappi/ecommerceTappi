import React, { useContext, useEffect, useState } from "react";
import {CartContext} from '../../context/CartContext'
import { useNavigate } from "react-router-dom";
 
//components imports
import CartCard from '../CartCard/CartCard'; // para importar funciones 
import CartHeader from '../CartHeader'; 

//react-bootstrap imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//materialize UI imports
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

//css imports

import './Cart.css';

export default function Cart() {

  
    const {cartData,removeAll,cartQuantity,totalPrice,createOrder}= useContext(CartContext);
     
    console.log('>>cartData : ',cartData)


    const navigateFn = useNavigate();

    const goToHome = () => {
        navigateFn('/');
    }
    
    let isQuantity = false;

    // const [value,setValue] = useState(),
    // onInput =({target: {value}}) =>setValue(value),
    // onFormSubmit = e => {
    //   e.preventDefault()
    //   console.log(value)
    //   setValue()
    // }

    const [value,setValue] = useState({
      name:"",
      phone:"",
      email:"",
      emailchecked:""
    });
    

    
    function onInputName(evt) {
      
      console.log(evt.target.value);
      setValue({...value,
        name:evt.target.value
      }
      );
      console.log(value);
    }

    function onInputPhone(evt) {

      console.log(evt.target.value);
      setValue({...value,
        phone:evt.target.value
      });
      console.log(value);
    }

    function onInputEmail(evt) {

      console.log(evt.target.value);
      setValue({...value,
        email:evt.target.value
      });
      console.log(value);

    }
    function onInputEmailConfirm(evt) {
      
      console.log(evt.target.value);
      setValue({...value,
        emailchecked:evt.target.value
      });
      console.log(value); 

    }

    function onFormSubmit(e){
        e.preventDefault()
        console.log(value);
        if ((value.name == "") || (value.phone == "") || (value.email == "") || (value.emailchecked == ""))
        {
          alert("Por favor completar todos los campos")
        }
        else{
          if (value.email == value.emailchecked)
          {
            createOrder(value);
          console.log("ORDEN CREADA");
          }
          else{
            alert("Por favor verificar que el mail sea el correcto")
          }
        }
       
      }
    
    return(
      <>
      <div className="Container" style={{

        
      }}>
        <div className="CartListContainer">
        <CartHeader/>
            {
              cartData.map((item)=> {
                  
                  return <CartCard {...item}/>
                
              })
            } 
            
          </div>
          <div className="CartSummaryContainer">
            {cartQuantity!=0 &&
              <div> 
                {/* <h4 style= {{color:"white"}}>Precio Total (ARS$) : ${totalPrice}</h4>
                <Button variant ="success" onClick={() => createOrder()}>Confirmar compra!</Button>
                <br>
                </br>
                <br>
                </br> */}
               
                <Card border="light" style={{ width: '18rem' }}>
                  <Card.Header>Resumen de compra</Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="text-start">Subtotal: ${totalPrice}</ListGroup.Item>
                      <ListGroup.Item className="text-start">Envio: $0</ListGroup.Item>
                      <ListGroup.Item className="text-start">Descuentos: $0</ListGroup.Item>
                      <Card.Title>Precio Total: ${totalPrice}</Card.Title>
                      
                    </ListGroup>
                      {/* <Button variant="danger" onClick={() =>  removeAll()}>Vaciar carrito</Button> */}
                <Button variant="danger" onClick={() =>  { if (window.confirm('Esta seguro que quiere vaciar el carrito?')) removeAll() } }>Vaciar carrito</Button>
                 
                  </Card.Body> 
                 
                  <Card.Header>Datos del comprador</Card.Header>

                  
                  
                  <Form onSubmit={onFormSubmit}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="buyerName">
                      <PersonIcon/>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Nombre y apellido"
                      aria-label="buyerName"
                      aria-describedby="basic-addon1"
                      type="text"   
                      onChange={onInputName} 
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroup.Text id="buyerPhone">
                      <LocalPhoneIcon/>
                  </InputGroup.Text>
                    <Form.Control
                      placeholder="Telefono"
                      aria-label="buyerPhone"
                      aria-describedby="basic-addon1"
                      onChange={onInputPhone}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroup.Text id="buyerEmail">
                      <EmailIcon/>
                  </InputGroup.Text>
                  <Form.Control
                      placeholder="Email"
                      aria-label="buyerEmail"
                      aria-describedby="basic-addon1"
                      type="email"
                      onChange={onInputEmail} 
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroup.Text id="buyerEmailConfirm">
                      <MarkEmailReadIcon/>
                    </InputGroup.Text>
                  <Form.Control
                      placeholder=" Confirmar Email"
                      aria-label="buyerEmailConfirm"
                      aria-describedby="basic-addon1"
                      type="email"
                      onChange={onInputEmailConfirm} 
                    />

                  </InputGroup>
                

                    {/* <Button variant ="success" onClick={() => createOrder()}>Confirmar compra!</Button> */}
                    <Button variant ="success" type="submit">Confirmar compra!</Button>
                    
                  </Form>
                
                  
                  
                  
                </Card>
              </div>}

          
          </div>
          {cartQuantity==0 &&
          <div className="emptyCartContainer">
              <RemoveShoppingCartIcon color="info"></RemoveShoppingCartIcon>
              <h4 style= {{color:"white"}}>No hay productos en el carrito...aun</h4>
              <Button variant="primary"  onClick={() => goToHome()} ><HomeIcon/>Volver al Inicio</Button>
          </div>}
          </div>
          
         
      </>
        
    )
}