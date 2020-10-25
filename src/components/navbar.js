import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import '../css/index.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navbar">
                <nav>
                    <ul>
                        <li><img className="navLogo" src={logo} /></li>
                        <li className="websiteName">Bubble Hub</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default NavBar;