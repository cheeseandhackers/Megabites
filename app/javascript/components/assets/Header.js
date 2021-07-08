import React, { Component } from 'react'


class Header extends Component{
    render(){
        const {
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props
        return(
            <header id = "header">
                <h1>Welcome to Megabites</h1>
                { logged_in && <a href={ sign_out_route }>Sign Out</a> }
                {!logged_in && <a href={ sign_in_route }>Sign In</a>}
            </header>
        )
    }
}

export default Header