
//react-bootstrap imports
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CartHeader () {


    return (

<         Container  fluid>
            <Card   border="secondary" style={{  color: 'rgb(145,145,145)', marginBottom:'20px', marginLeft:'20px', marginTop:'20px', }} bg="dark" className="text-center" >
            
                <Row>
                    <Col className="colCartCard" style={{backgroundColor:'rgb(50, 56, 63)'}}>
                    <ListGroup className="list-group-flush" >
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}>Imagen</ListGroup.Item>
                         </ListGroup>
                    </Col>
                    <Col className="colCartCard">
                         <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'transparent',fontSize:'1.5rem'}}>Titulo</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard" style={{backgroundColor:'rgb(50, 56, 63)'}}>
                    <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Cantidad</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">    
                         <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'transparent',fontSize:'1.5rem'}}> Precio Unitario (AR$)</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard" style={{backgroundColor:'rgb(50, 56, 63)'}}>    
                         <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> Precio total (AR$)</ListGroup.Item>
                         </ListGroup>
                    </Col>

                    <Col className="colCartCard">
                            <Row>
                            <ListGroup className="list-group-flush">
                         <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'transparent',fontSize:'1.5rem'}}> Opciones</ListGroup.Item>
                         </ListGroup>
                            </Row>
                            
                    </Col>
                </Row>
            </Card>
            
    </Container>

    )
}

