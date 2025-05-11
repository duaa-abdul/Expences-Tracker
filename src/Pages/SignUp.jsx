import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../Config/Firebase.config';
import { useNavigate } from 'react-router-dom'; 
import '../Pages/Style.css';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            if (user) {
                console.log("User created:", user);
                setFormData({ email: "", password: "", name: "" });
                navigate('/home'); 
            }
        } catch (error) {
            console.log("Error during signup:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup-container">
                <div className="signup-box">
                    <div className="heading">
                        <h1>SIGN UP</h1>
                    </div>
                    <div className="form">
                        <input type="text" name='name' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} />
                        <input type="email" name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} />
                        <input type="password" name='password' placeholder='Enter Your Password' value={formData.password} onChange={handleChange} />
                        <p>Already Have An Account? <a href="/Login">Login</a></p>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
