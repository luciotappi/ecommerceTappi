// import Navbar from 'react-bootstrap/Navbar';



// function  NavBar() {
//     return (
//         <Navbar expand="lg" variant="light" bg="light" fixed="top">

//         </Navbar>
          
// );
// }


//imports de react

import { Link, useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react';


// imports de navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//imports
import pic from ".//Tappi-logo.png";

import CartWidget from '../CartWidget/CartWidget';

  function NavBar() {

    const navigateFn = useNavigate();



    // MEJORAR ESTO CON UN USE STATE  y USE EFFECT 

    // const [path,setPath] = useState("/none");

    const goToHome = () => {
      
      console.log("NAVBAR");
        console.log(this);
        navigateFn('/');
    }
    const goToCategory1 = () => {
      
      console.log("NAVBAR");
        console.log(this);
        navigateFn('/category/placas');
    }
    const goToCategory2 = () => {
      
      console.log("NAVBAR");
        console.log(this);
        navigateFn('/category/microcontroladores');
    }
    const goToCategory3 = () => {
      
      console.log("NAVBAR");
        console.log(this);
        navigateFn('/category/sensores');
    }
    const goToCategory4 = () => {
      
      console.log("NAVBAR");
        console.log(this);
        navigateFn('/category/electronica');
    }


    const routeCategory = "/category/";
  
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          {/* <Navbar.Brand href="/home"> */}
          <Navbar.Brand href=" " onClick={goToHome.bind(this)}>
          {/* <Navbar.Brand href=" " onClick={goToHome(this)}> */}
          {/* <Navbar.Brand href="/"> */}
          <img
              src={pic}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
             Tappi electronics</Navbar.Brand>
          
             
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">
              <Nav.Link href=" " onClick={goToCategory1.bind(this)} >Placas</Nav.Link>
              <Nav.Link href=" " onClick={goToCategory2.bind(this)} >Microcontroladores</Nav.Link>
              <Nav.Link href=" " onClick={goToCategory3.bind(this)} >Sensores</Nav.Link>
              <Nav.Link href=" " onClick={goToCategory4.bind(this)} >Electronica</Nav.Link>
              
              <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
                <NavDropdown.Item href=" " onClick={goToCategory4.bind(this)}>Automatizacion</NavDropdown.Item>
                <NavDropdown.Item href=" " onClick={goToCategory4.bind(this)}>
                  IOT
                </NavDropdown.Item>
                <NavDropdown.Item href=" " onClick={goToCategory4.bind(this)}>
                  Industria
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href=" " onClick={goToCategory4.bind(this)}>
                  Personaliza tu solucion
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              
            <CartWidget/>
              <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#deets">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }

export default NavBar;