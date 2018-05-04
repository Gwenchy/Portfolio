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
import "./style.css";

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
		<Navbar className="stickyTop" color="light" light expand="md">
			<NavbarBrand href="/">Edgardo Mendez-Soto</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
			<Nav className="ml-auto" navbar>
				<NavItem>
				<NavLink href="#About">About Me</NavLink>
				</NavItem>
				<NavItem>
				<NavLink href="#Projects">My Projects</NavLink>
				</NavItem>
				<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Social Media
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem href="https://github.com/Gwenchy">
					Github
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem href="https://www.linkedin.com/in/edgardo-mendez-soto-b8966a145/">
					Linkedin
					</DropdownItem>
				</DropdownMenu>
				</UncontrolledDropdown>
			</Nav>
			</Collapse>
		</Navbar>
    );
  }
}