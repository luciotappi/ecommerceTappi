
import CardProduct from "../CardProduct";
import pic from ".//under-construction.jpg";
import pic2 from ".//under-construction2.jpg";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import imageUrl from '../CardProduct/arduino-uno.png';

import ItemCount from "../ItemCount";

const estilos = {

  fontWeight :'bolder',
  // alignItems: 'center',
  fontSize:'200%',
  fontFamily:'Montserrat',
  // color:'rgb(252,3,140)',
  color:'#fff',
  backgroundColor:'rgb(53,60,66)',
  backgroundImage: `url(${pic2})`,
  minHeight:'100%',
  height:'100vh',
  backgroundSize:'cover'
};


const Image = () => {

  return (

    <img src={pic} widht='3000'></img>
  )
}

function ItemListContainer(props) {

  const cantItems =3;
  const Data = [{
    title: 'Arduino Uno',
    description: 'Placa de desarrollo Arduino Uno basada en ATMega328P. Chip CH340 + Cable de programacion',
    price:'$4000',
    info:'https://arduino.cl/arduino-uno/', 
    stock: 5,
    initial:1
    
    
  },
  
  {
    title: 'ESP32',
    description: 'Placa de desarollo ESP32 con procesador Tensilica Xtensa 32-bit LX6, antena Wi-Fi y receptor Bluetooth integrado',
    price:'$3000',
    info:'http://esp32.net/',
    stock:32,
    initial:1
    
    
  },

  {
    title: 'STM32',
    description: 'Placa de desarrollo STM32 Blue pill basada en STM32F103C8T6 STM32 Blue Pill CPU ARM 32 Cortex-M3',
    price:'$2500',
    info:'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html',
    stock:0,
    initial:1 
    
  }];

  console.log(Data[0]);

  return (
    <Row xs={1} md={6} className="g-4 h-100 d-flex">
    {Array.from({ length: cantItems }).map((_, idx) => (
      <Col>
        <CardProduct title={Data[idx].title} description={Data[idx].description} price={Data[idx].price} info={Data[idx].info} stock={Data[idx].stock} initial={Data[idx].initial}></CardProduct>
      </Col>
    ))}
  </Row>
    
   
  
  );

}

export default ItemListContainer;