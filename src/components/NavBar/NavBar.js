//imports de react
import { NavLink } from 'react-router-dom';

// imports de navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//imports
import pic from ".//Tappi-logo.png";

import CartWidget from '../CartWidget/CartWidget';

  function NavBar(props) {

    
    const routeCategory = "/category/";


    //console.log("LAS PROPS DE NAVBAR SON ");
    //console.log(props.categories);
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container >
        <Nav className="me-auto">
         <NavLink to="/" style={{textDecoration:'none',color:'grey'}}> 
          
         
          <img
              src={pic}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
            </NavLink>
          
             </Nav>
             <span>span</span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">
        
              {props.categories.map(u => <NavLink key={u.key} to={routeCategory+ u.key} className="nav-link"  style={{ textDecoration: 'none' }}>{u.categoryName}</NavLink> )}
              
            </Nav>

            <Nav>
              <CartWidget/>
             <div style={{marginLeft:"20px"}}>
             </div>
              <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#deets">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }

export default NavBar;