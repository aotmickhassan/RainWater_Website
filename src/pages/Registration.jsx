import React, {useState} from "react";
import {addParticipant} from "../utils/list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reg.css";

const Registration = () => {
    const [form, setForm] = useState({name: "", email: ""});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});

        if (errors[name]) {
            setErrors({...errors, [name]: ""});
        }
    };

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (form.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
        }

        if (!form.email) {
            newErrors.email = "Email is required.";
        } else if (!form.email.includes('@')) {
            newErrors.email = "Email is missing the '@' symbol.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email format (e.g., user@email.com).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);

            await new Promise((resolve) => setTimeout(resolve, 1500));

            addParticipant({name: form.name, email: form.email});

            setIsSubmitting(false);
            setSubmitted(true);
            setForm({name: "", email: ""});
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-card">

                {submitted ? (
                    <div className="success-message">
                        <div style={{fontSize: "4rem", color: "#198754", marginBottom: "1rem"}}>
                            ✓
                        </div>
                        <h2 className="mb-3 fw-bold">Registration Successful!</h2>
                        <p className="lead">
                            Welcome Aboard!
                        </p>
                        <p className="lead">
                            We are very happy to have you with us.
                        </p>

                        <button
                            className="btn btn-outline-primary mt-3"
                            onClick={() => setSubmitted(false)}
                        >
                            Register Another Person
                        </button>
                    </div>
                ) : (
                    <form noValidate onSubmit={handleSubmit}>
                        <h1 className="reg-headline">Join the Movement</h1>

                        <div className="mb-4">
                            <label htmlFor="name" className="gradient-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${
                                    errors.name ? "is-invalid" : form.name.length > 2 ? "is-valid" : ""
                                }`}
                                id="name"
                                name="name"
                                placeholder="e.g. Aotmick Hassan"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="gradient-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className={`form-control ${
                                    errors.email ? "is-invalid" : form.email.includes("@") ? "is-valid" : ""
                                }`}
                                id="email"
                                name="email"
                                placeholder="user@email.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-register text-white"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span>
                                    <span className="spinner-border spinner-border-sm me-2" role="status"
                                          aria-hidden="true"></span>
                                    Processing...
                                </span>
                            ) : (
                                "Complete Registration"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Registration;