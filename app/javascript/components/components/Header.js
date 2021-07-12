import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Header extends Component{
    render(){
        const {
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props
        return(
            <header id = "header">
                <h3>Header</h3>
                { logged_in && <a href={ sign_out_route }>Sign Out</a> }
                {!logged_in && <a href={ sign_in_route }>Sign In</a>}
                <br></br>
                {this.props.logged_in && <NavLink to="./userrecipes"> Go to your Recipes Page!</NavLink>}
            </header>
        
        )
    }
}

export default Header