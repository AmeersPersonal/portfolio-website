import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import "./navbar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home", path: "/" },
        { id: "experience", label: "Experience", path: "/experience" },
        { id: "forms", label: "Forms", path: "/forms" },
        { id: "contact", label: "Contact", path: "/contact" }
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <div className="logo-icon">AT</div>
                    <div className="logo-text">Ameer Tayeh</div>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    {navItems.map((item) => (
                        <Link key={item.id} to={item.path} className="nav-item"> {/* 👈 Link + to= */}
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}          // 👈 Link + to=
                            className="mobile-nav-item"
                            onClick={closeMenu}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;