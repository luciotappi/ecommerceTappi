
//react-bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//componens imports
import Item from "../Item";

//css files
import './ItemList.css'

function ItemList(data) {

    return (
   <div style={{height:'fit-content',minHeight:'60vh',display:'flex',alignItems:'center'}}>
    <Row  className="g-4 h-100 d-flex">
    {
       
       
    Array.from({ length: data.data.length }).map((_, idx) => (
        
      <Col lg={true} key={data.data[idx].id}>

      <Item  id={data.data[idx].id} title={data.data[idx].title} description={data.data[idx].description} price={data.data[idx].price} info={data.data[idx].info} stock={data.data[idx].stock} initial={data.data[idx].initial} image={data.data[idx].image} ></Item>
        
      </Col>
    ))}
  </Row>
   </div>     
  
        );

        
}



export default ItemList;