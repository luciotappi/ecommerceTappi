import { React} from 'react';
//imports de react-router-dom
import {useNavigate} from 'react-router-dom';

// react-bootstrap imports
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// css imports
import './Item.css';

function Item(props) {

  const navigateFn = useNavigate();

  const goToItem = () => {
    
      navigateFn(`/item/${props.id}`);

  }

  return (
    <Card
      border="secondary"
      style={{ width: "18rem", color: "rgb(145,145,145)", margin: "15%" }}
      bg="dark"
      onClick={goToItem.bind(this)}
      className="itemHover"
    >
      <Card.Img 
      variant="top" 
      src={props.image} 
      style = {{
        
        width:  '100%',
        height: '20vh',

        }}
      />

      <Card.Body>
        <Card.Title className="cardTitle"
        style = {{
          fontSize: '1.2rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          transition: 'max-height 0.15s ease-out',
          
        }}
        >{props.title}</Card.Title>
  
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item
          bg="dark"
          style={{
            color: "rgba(57,180,224,1)",
            background: "rgb(50, 56, 63)",
            fontSize: "1.5rem",
          }}
        >
          {"$"}
          {props.price}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link
          href=" "
          bg="dark"
          style={{ color: "rgba(57,180,224,1)", textDecoration: "none" }}
          onClick={goToItem.bind(this)}
        >
          Mas informacion
        </Card.Link>  
      </Card.Body>
      
    </Card>
  );
}

export default Item;