import React, { Component } from 'react';

import {
    // BrowserRouter as Router,
    Link,
    NavLink
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                {/* start-menu */}
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                    <NavLink to="/" className="nav-link js-scroll-trigger">Test React Router</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                                <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                               
                                <li className="nav-item">
                                    <NavLink to="/tin" className="nav-link js-scroll-trigger" >Tin tức</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/tin-chi-tiet" className="nav-link js-scroll-trigger">Tin chi tiết</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/lien-he" className="nav-link js-scroll-trigger">Contact</NavLink>
                                </li>
                                

                            </ul>

                            <ul>
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/tin">Tin tức</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav;