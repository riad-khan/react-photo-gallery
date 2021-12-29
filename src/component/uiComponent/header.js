import React, { Component } from 'react';
import './header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
     } from 'reactstrap';
import { NavLink } from 'react-router-dom';


export class header extends Component {

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
            <Navbar  className='nav'  light expand="md">
                    <NavbarBrand id='navBrand' href="/">Photo Gallery</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem className='nav-item'>
                        <NavLink to="/"  className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/authentication" className="nav-link">Login</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
        </Navbar>
            </div>
        )
    }
}

export default header

