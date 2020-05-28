import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

class NavbarFormPage extends React.Component{
  render(){
    return(
      <Navbar bg="light"  expand="lg">
        <Navbar.Brand href="/">MAKE MARRIAGE SIMPLE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link href="/matromony">SIGN IN</Nav.Link>
            <Nav.Link href="/matrimony/signup">SIGN UP</Nav.Link>       
          </Nav>       
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarFormPage;