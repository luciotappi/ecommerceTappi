//react imports 

import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//react-bootstrap imports
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components imports
import ItemCount from "../ItemCount";

//css imports
import './link-to-cart.css'

//context imports
import  { CartContext }  from '../../../context/CartContext';

function ItemDetail(props) {

  const {addCartItem,productInCart,isInCart} = useContext(CartContext);

  const [finishState,setFinish] = useState(productInCart);
  const [quantityItem,setQuantity]=useState(0);
  const {idItem} = useParams();

       useEffect(() => {
        isInCart(idItem);
        if (productInCart==true){
            setFinish(true);
            
        }
        return ()=> {
            //console.log("EL ITEM ESTABA EN CARRITO ? > ",productInCart)
            

        }
       },[finishState,productInCart])

  function OnAdd(quantityToAdd) {
    
    addCartItem({...props, quantity: quantityToAdd, idProd :idItem} );
    setFinish(true);
    setQuantity(quantityToAdd);
    isInCart(idItem);
  }

  return (
    <div style={{height:'fit-content',minHeight:'60vh',display:'flex',alignItems:'center'}}>
        <Container style={{margin:'0', padding:'0', marginLeft:'15%', marginTop :'2%'}}>
            <Card  border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px' }} bg="dark" >
            
                <Row>
                    <Col style ={{margin:'20px', backgroundColor:'white',display:'flex'}}>
                        <Card.Img variant="bottom" src={props.image} style={{width:'18rem',height:'auto',margin:'auto',display:'block'}}/>
                    </Col> 
                    <Col style={{display:'flex', alignItems:'center'}}>

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
    </div>
        
  );
}

export default ItemDetail;