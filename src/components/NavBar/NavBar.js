// import Navbar from 'react-bootstrap/Navbar';



// function  NavBar() {
//     return (
//         <Navbar expand="lg" variant="light" bg="light" fixed="top">

//         </Navbar>
          
// );
// }


// imports de navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//imports
import pic from ".//Tappi-logo.png";

import CartWidget from '../CartWidget/CartWidget';

  function NavBar() {
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          
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
              <Nav.Link href="#features">Placas</Nav.Link>
              <Nav.Link href="#features">Microcontroladores</Nav.Link>
              <Nav.Link href="#features">Sensores</Nav.Link>
              <Nav.Link href="#features">Electronica</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              
              <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Automatizacion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  IOT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Industria
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
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