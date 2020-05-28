import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


class Navigation extends React.Component{
  render(){
    return(
        <Navbar bg="light"   expand="lg">
          <Navbar.Brand href="/">Icon Place</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/post">Posts</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/matrimony">Matrimonal Service</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>

              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Urdu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Arabic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Chinese</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}



export default Navigation;