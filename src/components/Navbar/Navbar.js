import React, { Component } from "react"
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import logo from "./logo.png"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="Navbar">
                    <img className="navbar-logo" width="150" src={logo} />
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li><a key={index} className={item.cName} href={item.url}>{item.icon ? <i className={item.icon}></i> : ''} {item.title}</a></li>
                            )
                        })}

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar