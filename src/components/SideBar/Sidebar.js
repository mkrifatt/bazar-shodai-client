import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    Admin Panel
                </div>
                <ul className="sidebar-navigation">
                    <li>
                        <Link to="/manageProduct" className="sidebar-nav">Manage Product</Link>
                    </li>
                    <li>
                        <Link to="/addProduct">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/editProduct">Edit Product</Link>
                    </li>
                    
                </ul>
            </div>
    );
};

export default Sidebar;