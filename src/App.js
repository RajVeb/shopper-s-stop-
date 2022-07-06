

import {Navbar,Nav,Container} from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import Navs from './Navs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLight,faBagShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <BrowserRouter>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
              <Navbar.Brand href="#home">Shopper's Stop </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   
 
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/home" className='nav-link'>HOME</Link>
      <Link to="/mens" className='nav-link'>MEN</Link>
      <Link to="/cloth" className='nav-link'>WOMEN</Link>
      <Link to="/watches" className='nav-link'>KIDS</Link>

    </Nav>

    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <FontAwesomeIcon icon={faBagShopping} /> Cart
      </Nav.Link>
    </Nav>
 
  </Navbar.Collapse>
 
  </Container>
</Navbar>
 <Navs/>
 </BrowserRouter>
  );
}

export default App;
