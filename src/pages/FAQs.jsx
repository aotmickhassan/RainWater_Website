import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQs.css";

const FAQs = () => {
    return (
        <div className="faq-container">
            <div className="faq-content-wrapper">

                <h1 className="faq-headline">Frequently Asked Questions</h1>

                <div className="accordion" id="faqAccordion">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Who can attend?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Anyone interested in rainwater management and sustainability is welcome!
                                Whether you are a student, a professional engineer, or just a curious citizen.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                How do I register?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                It's simple! Visit the <strong>Registration</strong> page using the navigation bar
                                and fill out the participant sign-up form. It takes less than 2 minutes.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Is there a registration fee?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <strong>No.</strong> Attendance is completely free for all participants thanks
                                to our generous sponsors and the government's clean water initiative.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Where does the event take place?
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                The event will be held at the <strong>National Convention Center</strong>.
                                Exact coordinates and hall numbers will be emailed to you upon successful registration.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQs;