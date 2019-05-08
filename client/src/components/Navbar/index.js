import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">iala</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/Login">Log in</NavLink>

              </NavItem>
              <NavItem>
                <NavLink href="/Register">Register</NavLink>

              </NavItem>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/discover">Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favorites">Favorites</NavLink>

              </NavItem>
            <NavItem>
                <NavLink href="/search">Search</NavLink>

              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}