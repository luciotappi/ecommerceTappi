import { useEffect, useState } from 'react';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Item from "../Item";

import getFetch from '../../Data/Data';

import './ItemList.css'

function ItemList(data) {


console.log("ACA ENTRE");
console.log(data.data.length);
console.log("Los datos son en ItemList son : " + data)
console.log(data.length);
    return (
        
  <Row xs={1} md={6} className="g-4 h-100 d-flex">
    {
       
       
    Array.from({ length: data.data.length }).map((_, idx) => (
        
      <Col key={data.data[idx].id} style={{height:'100vh'}}>

      <Item  id={data.data[idx].id} title={data.data[idx].title} description={data.data[idx].description} price={data.data[idx].price} info={data.data[idx].info} stock={data.data[idx].stock} initial={data.data[idx].initial} image={data.data[idx].image} ></Item>
        
      </Col>
    ))}
  </Row>
        );

        
}



export default ItemList;