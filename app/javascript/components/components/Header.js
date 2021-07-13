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

  //class Header extends Component {
  // render() {
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
              <NavLink to="/components/pages/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/components/pages/RecipeIndex">
                Diet Specific Recipes
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
//}commented out for bug fixing.

//       <header id="header">
//         <h3>Header</h3>

//         {logged_in && <a href={sign_out_route}>Sign Out</a>}
//         {!logged_in && <a href={sign_in_route}>Sign In</a>}
//         <br></br>
//         {this.props.logged_in && (
//           <NavLink to="/userrecipes"> Go to your Recipes Page!</NavLink>
//         )}
//       </header>
//     );
//   }
// }
