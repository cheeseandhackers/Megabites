import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { logged_in, sign_in_route, sign_out_route } = props;
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="header-menu">
          Header
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="hamburger-menu" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              {logged_in && <a href={sign_out_route}>Sign Out</a>}
              {!logged_in && <a href={sign_in_route}>Sign In</a>}
            </NavItem>
            <NavItem>
              <NavLink to="./pages/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="./pages/RecipeIndex">Diet Specific Recipes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
