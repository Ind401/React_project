import React, { useState } from 'react';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: 'rishiganguly9@gmail.com',
    password: '12345',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]:   
 e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle   login logic here
    console.log(formData);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input id='output' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input id='output' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button id='button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default   
 Login;