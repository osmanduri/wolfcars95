import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation_inside">
                <div className="menu_gauche">
                    <img src={ require('../images/wolf_cars_95_B.jpeg').default} alt="logo"/>
                </div>
                <div className="menu_droite">
                    <ul>
                        <div className="trait"/>
                        <NavLink to="/"  activeClassName="nav-active" className="hover">
                            <li>Accueil</li>
                        </NavLink>
                        <div className="trait"/>
                        <NavLink to="/services"  activeClassName="nav-active" className="hover">
                            <li>Services</li>
                        </NavLink>
                        <div className="trait"/>
                        <NavLink to="/contact"  activeClassName="nav-active" className="hover">
                            <li>Contact</li>
                        </NavLink>
                        <div className="trait"/>
                        <NavLink to="/galerie"  activeClassName="nav-active" className="hover" >
                            <li>Galerie</li>
                        </NavLink>
                        <div className="trait"/>

                    </ul>

                </div>
            </div>

        </div>

    )
}
