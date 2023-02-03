import React, { useState } from 'react';
import logo from './mensahe-logo.jpg';
// import imahe from './imahe.jpg';
import './App.css';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="App">
      <header className="App-header">
   
        <img src={logo} className="App-logo" alt="logo" />
  
          <form onSubmit={handleSubmit}>
            <label>
            Email:
              <br />
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <br/>
      
            <label>
            Password:
              <br />
              
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>

            <div className="signUp">
            <p>Sign Up</p>
            <p>Forgot Password</p>
            </div>
            <br />
      
            <button type="submit" className='submitButton'>Sign In</button>
          </form>
      </header>
    </div>
  );
}

export default EmailForm;
