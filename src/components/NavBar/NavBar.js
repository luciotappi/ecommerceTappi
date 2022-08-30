//imports de react
import { NavLink,Link } from 'react-router-dom';

// imports de navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//imports
import pic from ".//Tappi-logo.png";

import CartWidget from '../CartWidget/CartWidget';

  function NavBar(props) {

    
    const routeCategory = "/category/";


    console.log("LAS PROPS DE NAVBAR SON ");
    console.log(props.categories);
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

         <Link to="/"> 
          {/* <Navbar.Brand href=" " onClick={goToHome.bind(this)}> */}
         
          <img
              src={pic}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
             Tappi electronics</Link>
          
             
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">
            
              {/* {props.categories.map(u => <Nav.Link  key={u.categoryId} href=" " onClick={goToCategory.bind(u.categoryId)} >{u.categoryName}</Nav.Link> )} */}
               {/* {props.categories.map(u => <li><Link to={routeCategory+ u.categoryId}>{u.categoryName}</Link></li> )} */}
              {props.categories.map(u => <NavLink to={routeCategory+ u.id} className="nav-link"  style={{ textDecoration: 'none' }}>{u.categoryName}</NavLink> )}
              {/* <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
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
              </NavDropdown> */}
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