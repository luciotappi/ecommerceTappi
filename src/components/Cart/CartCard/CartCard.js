//react imports
import React, { useContext } from "react";

//context
// import {CartContext} from '../../context/CartContext'
import {CartContext} from '../../../context/CartContext'

//react-bootstrap imports

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//css imports
import './CartCard.css'

export default function CartCard(datos) {

    const {cartData,removeItem}= useContext(CartContext);

    return(
           
            <Container  fluid>
            <Card border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px' }} bg="dark" className="text-center" >
    
                <Row>
                    <Col style ={{margin:'20px', backgroundColor:'white',display:'flex',}}>
                        <Card.Img variant="bottom" src={datos.image} style={{width:'10rem',height:'auto',margin:'auto',display:'block'}}/>
                    </Col>
                    <Col className="colCartCard">
                         <ListGroup className="list-group-flush">
                            <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}>{datos.title}</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Cantidad: {datos.quantity}</ListGroup.Item>
                         </ListGroup>
                    </Col>
                    
                    <Col className="colCartCard">    
                         <ListGroup className="list-group-flush">
                         <  ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> ${datos.price}</ListGroup.Item>
                         </ListGroup>
                    </Col>
               
                    <Col className="colCartCard">    
                         <ListGroup className="list-group-flush">
                            <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> ${datos.price*datos.quantity}</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">
                            <Row>
                                <Card.Body>
                                    <Button variant="danger" onClick={() => { if (window.confirm('Esta seguro que quiere eliminar el producto del carrito?')) removeItem(datos.idProd) }}>Eliminar</Button>
                                </Card.Body>
                            </Row>
                            
                    </Col>
                </Row>
            </Card>
            
    </Container>
                 
    )
}

