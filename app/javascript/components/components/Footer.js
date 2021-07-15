import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render () {
        return(
        <footer id ="footer">
        <Nav>
            <NavItem>
                <NavLink className="footer-link" to="/">Home Page</NavLink>
            </NavItem>
            <NavItem>
                <h6 className="footer-link">&copy; 2021 Cheese and Hackers</h6>
            </NavItem>
            <NavItem>
              <NavLink className="footer-link" to="aboutus">About Us</NavLink>
            </NavItem>
        </Nav>
        </footer>    
        )    
    }
}

export default Footer
