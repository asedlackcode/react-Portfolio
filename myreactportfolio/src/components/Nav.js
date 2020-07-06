import React from 'react';

const style = {
    color: "white"
}

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h2 style={style}>Austin Sedlack</h2>
        <a className="right nav-item nav-link" style={style} href="/about">Home</a>
        <a className="right nav-item nav-link" style={style} href="/projects" >Projects</a>
        <a className="nav-item nav-link" style={style} href="/contact" >Contact</a>
    </nav>
    )
}

export default Nav;