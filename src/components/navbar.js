import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="">
                <nav>
                    <ul>
                        <img className="navLogo" src={logo} />
                        <li className="websiteName"></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default NavBar;