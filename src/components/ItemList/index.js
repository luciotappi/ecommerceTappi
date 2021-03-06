import { useEffect, useState } from 'react';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Item from "../Item";

import getFetch from '../../Data/Data';

import './ItemList.css'

function ItemList() {

const[data,setData] = useState([])
const[loading,setLoading]=useState(true)

useEffect(()=>{
  getFetch
  .then((resp)=>setData(resp))
  .catch(err=>console.log(err))
  .finally(()=>setLoading(false))
},[])

console.log(data);

console.log("LOS DATOS SON : " + {data});
console.log(data.length);

    return (
        
  <Row xs={1} md={6} className="g-4 h-100 d-flex">
    {
        loading ? 
        <div className="loading">
        <h2 style={{height:'100vh' , color:'rgba(57,180,224,1)'}}>CARGANDO...</h2>
        {/* <img src={"../images/WMDx.gif"}></img> */}
        <div class="loader-wheel"></div>

        </div>
       
        :
    Array.from({ length: data.length }).map((_, idx) => (
        
      <Col style={{height:'100vh'}}>

      <Item key={data[idx].id} title={data[idx].title} description={data[idx].description} price={data[idx].price} info={data[idx].info} stock={data[idx].stock} initial={data[idx].initial} image={data[idx].image} ></Item>
        
      </Col>
    ))}
  </Row>
        );

        
}



export default ItemList;