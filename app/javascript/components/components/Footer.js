import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render () {
        return(
        <footer id ="footer">
        <Nav>
            <NavItem>
                <NavLink to="/">Home Page</NavLink>
            </NavItem>
            <NavItem>
                <h6 id ="copyright">&copy; 2021 Cheese and Hackers</h6>
            </NavItem>
            <NavItem>
              <NavLink to="aboutus">About Us</NavLink>
            </NavItem>
        </Nav>
        </footer>    
        )    
    }
}

export default Footer