//imports de react-router-dom

import {useNavigate} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import ItemCount from "../ItemCount";

function Item(props) {

 
  console.log("El titulo es : " + props.stock );
  console.log("La imagen es : " + props.image);

  const navigateFn = useNavigate();

  const goToItem = () => {
      
   
      navigateFn(`/item/${props.id}`);
  }
  return (
    
        <Card border="secondary" style={{ width: '18rem', color: 'rgb(145,145,145)', margin:'5%' }} bg="dark">
      <Card.Img variant="top" src={props.image} />
     
      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item bg ="dark" style={{color:'rgba(57,180,224,1)' ,background:'rgb(50, 56, 63)',fontSize:'1.5rem'}}> {props.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href=" " onClick={goToItem.bind(this)}>Mas informacion</Card.Link>
      </Card.Body>
      <Card.Body>
        <ItemCount stock={props.stock} initial={props.initial} ></ItemCount>
      </Card.Body>
    </Card>
  
  );
}

export default Item;