import React from "react";
import "../LoginPage/LoginPage.css"
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css"

export default function SignUpPage() {

        const navigate = useNavigate();

        const navigateToContacts = () => {
                // 👇️ navigate to /contacts
                navigate('/LoginPage');
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
                <div className="signup--card" >

                        <form className="form"
                                onSubmit={handleSubmit} >
                                <input name="email"
                                        type="text"
                                        className="email-filed"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                />
                                <input name="password"
                                        type="text"
                                        className="password-filed"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                />


                                <  button className="form--submit"
                                        onSubmit={handleSubmit} > Sign up </button>
                                <h5 className="have-acounts">alredy have account  <button className="login" onClick={navigateToContacts}> Login ?</button></h5>
                        </form>
                </div>
        )
}