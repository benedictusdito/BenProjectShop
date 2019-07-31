import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  FormControl,
  Form,
  DropdownMenu,
  Button,
  NavDropdown
} from "react-bootstrap";

class HeaderAtas extends Component {
  render() {
    return (
      <div className="">
        <Navbar bg="warning" expand="lg">
          <h1>
            <i class="fas fa-people-carry mr-2 text-black" />
          </h1>
          <Navbar.Brand href="/">
            <a className="font-weight-bold"> BEN SHOP</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-4 font-weight-bold">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="#link">Reseller</Nav.Link>
              <Nav.Link href="#link">Hubungi Kami</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="success">Search</Button>
            </Form>
            <div className="icon mt-2">
              <h5>
                <Button
                  className="ml-2 bg-warning mr-3"
                  variant="outline-dark "
                >
                  <i class="fas fa-sign-in-alt mr-2" /> Login
                </Button>
                <i class="fas fa-envelope-open mr-3" />
                <i class="fas fa-bell mr-3" />
              </h5>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderAtas;
