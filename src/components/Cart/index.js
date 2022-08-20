import React, { useContext } from "react";

import {CartContext} from '../../context/CartContext'

import { useNavigate } from "react-router-dom";
 
import CartCard from '../CartCard/CartCard'; // para importar funciones 


import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import HomeIcon from '@mui/icons-material/Home';


export default function Cart() {

    // const {cartData}= useContext(CartContext);
     const {cartData,removeAll,cartQuantity,totalPrice}= useContext(CartContext);
     
    console.log('>>cartData : ',cartData)

    const navigateFn = useNavigate();

    const goToHome = () => {
        navigateFn('/');
    }
    
    let isQuantity = false;
    
    return(
      <>
      <div className="cart">
      <Container  fluid>
            <Card   border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px' }} bg="dark" className="text-center" >
            
                <Row>
                    <Col className="colCartCard">
                    <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}>Imagen</ListGroup.Item>
                         </ListGroup>
                    </Col>
                    <Col className="colCartCard">
                         <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}>Titulo</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">
                    <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Cantidad</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">    
                         <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Precio Unitario (AR$)</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">    
                         <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Precio total (AR$)</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">
                            <Row>
                            <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Opciones</ListGroup.Item>
                         </ListGroup>
                            </Row>
                            
                    </Col>
                </Row>
            </Card>
            
    </Container>
          {
            cartData.map((item)=> {

                // return <div>{`ID: ${item.id} - Cantidad : ${item.quantity}`}
                
                return <CartCard {...item}/>
                  
                
                // <button onClick={() => removeItem(item.id)}>Borrar Item</button>
                // </div>
            })
          } 
          
        </div>
        
        {cartQuantity!=0 &&
          <div>
            <h4 style= {{color:"white"}}>Precio Total (ARS$) : ${totalPrice}</h4>
            <Button variant="danger" onClick={() => removeAll()}>Vaciar carrito</Button>
          </div>}

        {cartQuantity==0 &&
        <div>
            <RemoveShoppingCartIcon color="info"></RemoveShoppingCartIcon>
            <h4 style= {{color:"white"}}>No hay productos en el carrito...aun</h4>
        </div>}
        {cartQuantity==0 &&<Button variant="primary"  onClick={() => goToHome()} ><HomeIcon/>Volver al Inicio</Button>}
      </>
        
    )
}