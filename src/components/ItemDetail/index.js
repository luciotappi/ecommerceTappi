import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ItemCount from "../ItemCount";

import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';


import './link-to-cart.css'

function ItemDetail(props) {

  console.log("Logs del ItemDetail.js")
  console.log(">>>El titulo es : ", props.title );
  console.log(">>>El stock es : " , props.stock);

  const [finishState,setFinish] = useState(false);
  const [quantityItem,setQuantity]=useState(0);

//   useEffect(() => {
    
//     console.log('>>La cantidad del carrito es : ',quantityItem);
//     return ()=> {
//       console.log('>>Ahora es:',quantityItem);
//     }
//   },[quantityItem]);

  function OnAdd(quantityToAdd) {
    console.log(quantityToAdd);
    setFinish(true);
    setQuantity(quantityToAdd);
  }

//   const linkToCart = ({ isVisible}) => {
//     if (!isVisible) {
//       return <h5>My component</h5>
//     }
//     return null
//   }
  return (
        <Container style={{margin:'0', padding:'0', marginLeft:'15%' }}>
            <Card  border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px' }} bg="dark" >
                <Card.Body>
                    <Card.Title >{props.title}</Card.Title>
                </Card.Body>
                <Row>
                    <Col style ={{margin:'20px', backgroundColor:'white',display:'flex'}}>
                        <Card.Img variant="bottom" src={props.image} style={{width:'18rem',height:'auto',margin:'auto',display:'block'}}/>
                    </Col> 
                    <Col>
                        <Row>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                        </Row>
                        <Row>
                            <Card.Text>
                                {props.descriptionLarge}
                            </Card.Text>
                        </Row>
        
                        
                    </Col>
                    <Col>
                        <Row>
                                <ListGroup className="list-group-flush">
                                <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> {props.price}</ListGroup.Item>
                                </ListGroup>
                            </Row>
                            <Row>
                                <Card.Body>
                                    <Card.Link href={props.info}>Mas informacion</Card.Link>
                                </Card.Body>
                            </Row>
                            <Row>
                                <Card.Body>
                                    <ItemCount addON={OnAdd} stock={props.stock} initial={props.initial}></ItemCount>
                                </Card.Body>
                                <Card.Body>
                                    {finishState && <Link className='link-to-cart' to={`/cart`}>Finalizar Compra!</Link>}
                                    {/* <linkToCart isVisible={finishState} /> */}
                                </Card.Body>
                            </Row>
                    </Col>
                </Row>
            </Card>
    </Container>
  );
}

export default ItemDetail;