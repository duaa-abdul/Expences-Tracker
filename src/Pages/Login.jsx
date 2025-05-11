import React, { useState } from 'react';
import '../Pages/Style.css';
import { useNavigate } from 'react-router-dom'; 
import { auth, signInWithEmailAndPassword } from '../Config/Firebase.config';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      setFormData({ email: "", password: "" });
      navigate('/home'); 
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert("Invalid email or password");
      } else {
        console.log(error);
      }
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="login-box">
            <div className="heading">
              <h1>LOGIN </h1>
            </div>
            <div className="form">
              <input type="email" name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} />
              <input type="text" name='password' placeholder='Enter Your Password' value={formData.password} onChange={handleChange} />
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
