import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ItemCount from "../ItemCount";

function ItemDetail(props) {

 
  console.log("Logs del ItemDetail.js")
  console.log("El titulo es : " + props.title );
  console.log("El stock es : " + props.stock);

  return (
        <Container style={{margin:'0', padding:'0', marginLeft:'15%' }}>
            <Card border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px' }} bg="dark" >
                <Card.Body>
                    <Card.Title >{props.title}</Card.Title>
                </Card.Body>
                <Row>
                    <Col style ={{margin:'20px'}}>
                        <Card.Img variant="bottom" src={props.image} style={{width:'18rem',height:'auto'}}/>
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
                                    <ItemCount stock={props.stock} initial={props.initial} ></ItemCount>
                                </Card.Body>
                            </Row>
                    </Col>
                </Row>
            </Card>
    </Container>
  );
}

export default ItemDetail;