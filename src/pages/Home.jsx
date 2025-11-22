import React from "react";
import {NavLink} from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="content-wrapper">
                <h1 className="main-headline">Rainwater Convention 2025</h1>

                <p className="intro-text">
                    Welcome to the Rainwater Convention! Join us as we bring together experts,
                    enthusiasts, and communities to explore sustainable solutions for rainwater
                    harvesting, management, and conservation.
                </p>

                <section>
                    <h2 className="section-headline">About the Convention</h2>

                    <div className="container">
                        <ul className="custom-list">
                            <li className="list-item-styled">
                                The event features keynotes from sustainability leaders.
                            </li>
                            <li className="list-item-styled">
                                Live workshops on rainwater solutions for homes and communities.
                            </li>
                            <li className="list-item-styled">
                                Opportunities to network with professionals, innovators, and activists.
                            </li>
                        </ul>

                        <div className="mt-5">
                            <p className="lead mb-3">
                                Registration for participants and volunteers is open now!
                            </p>

                            <NavLink
                                to="/registration"
                                className="btn btn-primary btn-lg shadow-sm"
                            >
                                Register Now
                            </NavLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;