
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarPanel = () => {
  const cartProducts = useSelector((state)=>state.cart)
  console.log("Navbar panel: ",cartProducts);
  
  return (    
    <Navbar bg='light' expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle />
    
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>My bag {cartProducts.length}</Nav.Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavbarPanel