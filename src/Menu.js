import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import {NavLink} from "react-router-dom";

export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="nav-item">
                                <NavLink to="/heroes" className="nav-link">Heroes</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink to="/scoreboard" className="nav-link">Scoreboard</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink to="/product" className="nav-link">Product</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}