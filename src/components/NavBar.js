import React from 'react';
import { Heading, Nav } from 'grommet'
import { NavLink } from "react-router-dom"

function NavBar() {
    return (<div>
        <Heading level='3' margin='center'>Navigation</Heading>
        <Nav direction="row">
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/villagers">Villagers</NavLink></div>
            <div><NavLink to="/critterpedia">Critterpedia</NavLink></div>
        </Nav>
    </div>
    );
}

export default NavBar;