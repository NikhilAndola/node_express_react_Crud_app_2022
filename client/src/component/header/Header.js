import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {

    const [activeTab, setActiveTab] = useState("Home");
    
    const location = useLocation();
    // console.log("🚀 ~ file: Header.js ~ line 8 ~ Header ~ activeTab", location)
    
    useEffect(() => {
        if(location.pathname === '/') setActiveTab("Home")
        if(location.pathname === '/add') setActiveTab("Adduser")
        if(location.pathname === '/about') setActiveTab("About")
    }, [location])

  return (
    <div className="header">
        <p className="logo">User Management System</p>
        <div className="header-right">
            <Link to="/">
                <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Home</p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab === "Adduser" ? "active" : ""}`} onClick={() => setActiveTab("Adduser")}>Add User </p>
            </Link>
            <Link to="/about">
                <p className={`${activeTab === "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}>About</p>
            </Link>
        </div>
    </div>
  )
}

export default Header;