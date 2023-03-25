import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

export default function LoginPage() {

        const navigate = useNavigate();

        const navigateToSignUp = () => {

                navigate("./signupPage");
        };

        const [formData, setFormData] = React.useState({
                email: "",
                password: "",
                passwordConfirm: "",
                joinedNewsletter: true

        })

        function handleChange(event) {
                const { name, value, type } = event.target
                setFormData(prevFormData => ({
                        ...prevFormData,
                        [name]: type === value
                }))
        }

        function handleSubmit(event) {
                event.preventDefault()
                if (formData.password === formData.passwordConfirm) {
                        console.log("Successfully signed up")
                } else {
                        console.log("Passwords do not match")

                }
        }

        return (
                <div className="login--card" >

                        <form className="form-login"
                                onSubmit={handleSubmit} >
                                <input name="email"
                                        type="text"
                                        className="email-filed-login"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                />
                                <input name="password"
                                        type="text"
                                        className="password-filed-login"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                />


                                <  button className="form--submit"
                                        onSubmit={handleSubmit} >  Login </button>
                                <h5 className="have-acounts-login">
                                        Don't have account
                                        <button className="login-login" onClick={navigateToSignUp}>
                                                Sign up ?</button></h5>
                        </form>
                </div>
        )
}