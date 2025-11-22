import React from "react";
import "./Rainwater.css";

const Rainwater = () => {
    return (
        <div className="clean-water-container">
            <div className="content-wrapper">
                <h1 className="main-headline">
                    Good Hygiene is Only Possible with Clean Water
                </h1>

                <p className="intro-text">
                    We all need clean water to survive; it's vital for keeping clean and healthy.
                    But many people are going without, impacting their health, education, and livelihoods.
                </p>

                <section>
                    <h2 className="section-headline">The Reality in Bangladesh</h2>
                    <p className="subText">
                        We have come a long way in improving access to water, sanitation, and hygiene in Bangladesh.
                        However, we still have a long way to go.
                    </p>

                    <ul className="impact-list">
                        <li>
                            <span className="highlight-text">Health:</span> preventing disease through better hygiene.
                        </li>
                        <li>
                            <span className="highlight-text">Education:</span> ensuring students stay healthy and attend
                            school.
                        </li>
                        <li>
                            <span className="highlight-text">Livelihoods:</span> supporting economic stability through
                            health.
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default Rainwater;