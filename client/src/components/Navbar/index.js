import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
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
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" variant="dark"light expand="md">
          <NavbarBrand href="/" variant="dark">indiePlay</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
          <DropdownToggle tag="a" className="nav-link" caret>
            More Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/">Landing</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="a" href="/discoverartist">Discover Artist</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="a" href="/discover">Discover</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="a" href="/favorites">Favorites</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="a" href="/search">Search</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}