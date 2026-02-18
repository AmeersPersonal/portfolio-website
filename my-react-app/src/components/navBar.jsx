import React, {useState} from "react";
import {Menu, X} from 'lucide-react';
import "./navbar.css"

function NavBar(){
    const [menuOpen, setMenuopen] = useState(false);

    const navItems = [
        {id:"home", label:"Home"},
        {id:"projects", label:"Projects"},
        {id:"certifcations", label:"Certifcations"},
        {id:"work", label:"Work Expeerince"},
        {id:"forms", label:"Forms"},
        {id:"contact", label:"Contact"}

    ];

    return (
    <>

    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <div className="logo-icon">P</div>
                <div className="logo-text"> test</div>

            </div>
            <div className="navbar-menu">
                <a href="#home" className="nav-item"> Home</a>
                <a href="#projects" className="nav-item"> Projects</a>
                <a href="#certifcations" className="nav-item"> Certifications</a>
                <a href="#work" className="nav-item"> Work Experince</a>
                <a href="#form" className="nav-item"> Forms</a>
                <a href="#contact" className="nav-item"> Contact</a>

            </div>
            
            <div className="hambuger" id="hambuger">
                <span className="hambuger-line"></span>
                <span className="hambuger-line"></span>
                <span className="hambuger-line"></span>
            </div>

            <div className="mobile-menu" id="mobileMenu">
                <a href="#home" className="mobile-nav-item"> Home</a>
                <a href="#projects" className="mobile-nav-item"> Projects</a>
                <a href="#certifcations" className="mobile-nav-item"> Certifications</a>
                <a href="#work" className="mobile-nav-item"> Work Experince</a>
                <a href="#form" className="mobile-nav-item"> Forms</a>
                <a href="#contact" className="mobile-nav-item"> Contact</a>

            </div>
            
        </div>

    </nav>

    
    
    </>)


    
}


// ===========================
// NAVBAR FUNCTIONALITY
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar-container')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
});

export default NavBar;