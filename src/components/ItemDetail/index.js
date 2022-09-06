import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ItemCount from "../ItemCount";

import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import './link-to-cart.css'


import  { CartContext }  from '../../context/CartContext';
function ItemDetail(props) {

  const {addCartItem,productInCart,isInCart} = useContext(CartContext);

  console.log("Logs del ItemDetail.js")
  console.log(">>> valores : ", props);
  console.log(">>>El titulo es : ", props.title );
  console.log(">>>El stock es : " , props.stock);

  const [finishState,setFinish] = useState(productInCart);
  const [quantityItem,setQuantity]=useState(0);
  const {idItem} = useParams();

       useEffect(() => {
        isInCart(idItem);
        if (productInCart==true){
            setFinish(true);
            console.log("ACA NO QUIERO ENTRAR");
        }
        return ()=> {
            console.log("EL ITEM ESTABA EN CARRITO ? > ",productInCart)
            

        }
       },[finishState,productInCart])

  function OnAdd(quantityToAdd) {
    
    
    addCartItem({...props, quantity: quantityToAdd, idProd :idItem} );
    console.log(quantityToAdd);

    setFinish(true);
    setQuantity(quantityToAdd);
    isInCart(idItem);
  }


console.log("finishState : ",finishState);
console.log("productInCart : ",productInCart);

  return (
        <Container style={{margin:'0', padding:'0', marginLeft:'15%', marginTop :'2%' }}>
            <Card  border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px' }} bg="dark" >
                {/* <Card.Body>
                    <Card.Title >{props.title}</Card.Title>
                </Card.Body> */}
                <Row>
                    <Col style ={{margin:'20px', backgroundColor:'white',display:'flex'}}>
                        <Card.Img variant="bottom" src={props.image} style={{width:'18rem',height:'auto',margin:'auto',display:'block'}}/>
                    </Col> 
                    <Col style={{display:'flex', alignItems:'center'}}>
                        {/* <Row>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                        </Row> */}
                        
                        <Row>
                            <Card.Text >
                                {props.descriptionLarge}
                            </Card.Text>
                        </Row>
        
                        
                    </Col>
                    <Col>
                        <Row>
                                <Card.Title >{props.title}</Card.Title>
                                <ListGroup className="list-group-flush">
                                <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> ${props.price}</ListGroup.Item>
                                </ListGroup>
                            </Row>
                            <Row>
                                <Card.Body>
                                    <Card.Link href={props.info}>Mas informacion</Card.Link>
                                </Card.Body>
                            </Row>
                            <Row>
                                <Card.Body>
                                    {(!finishState|| !productInCart) &&<ItemCount addON={OnAdd} stock={props.stock} initial={props.initial}></ItemCount>}
                                </Card.Body>
                                <Card.Body>
                                    {(finishState || productInCart) && <Link className='link-to-cart' to={`/cart`}>Finalizar Compra!</Link>}
                                   
                                </Card.Body>
                            </Row>
                    </Col>
                </Row>
            </Card>
    </Container>
  );
}

export default ItemDetail;