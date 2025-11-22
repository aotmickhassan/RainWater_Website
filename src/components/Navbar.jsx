
import React from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 brand-glow" to="/">
                    🌧️ Rainwater Convention
                </NavLink>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 py-2 rounded-pill nav-link-custom"
                                to="/home"
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 py-2 rounded-pill nav-link-custom"
                                to="/faqs"
                            >
                                FAQs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 py-2 rounded-pill nav-link-custom"
                                to="/registration"
                            >
                                Registration
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 py-2 rounded-pill nav-link-custom"
                                to="/admin"
                            >
                                Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


