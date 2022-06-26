import React from 'react';
import { Heading, Nav } from 'grommet'
import { NavLink } from "react-router-dom"
import '../index.css';

function NavBar() {
    return (<div>
        <Heading  align="center">Unofficial AN:NH Guide</Heading>
        <Nav pad="small" justify="center" direction="row">
            <div><NavLink style={{ textDecoration: 'none', color: 'inherit'}} to="/"><h3 className="linkText">Home</h3></NavLink></div>
            <div><NavLink style={{ textDecoration: 'none', color: 'inherit'}} to="/villagers"><h3 className="linkText">Villagers</h3></NavLink></div>
            <div><NavLink style={{ textDecoration: 'none', color: 'inherit'}} to="/critterpedia"><h3 className="linkText">Critterpedia</h3></NavLink></div>
        </Nav>
    </div>
    );
}

export default NavBar;