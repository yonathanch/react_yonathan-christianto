import React, { useState } from 'react';
import './Formlogin.css'
import { Link } from 'react-router-dom';


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


        const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        if (!emailIsValid(email)) {
          setEmailError('Invalid email');
          valid = false;
        }
        if (password.length < 8) {
          setPasswordError('Password must be at least 8 characters long');
          valid = false;
        }
        if (valid) {
          alert('Successful login')
        }
      };
   

      const handleEmail = (event) => {
        setEmail(event.target.value);
        setEmailError('');
      };

      const handlePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
        setPasswordError('');
    }
    
      const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
    



    return(
        
        <form onSubmit={handleSubmit} className="col-md-6 mx-auto" id='form'>
            <div className="mb-3">
                <label  className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    onChange={handleEmail}
                  
                />
                  {emailError && <span className="error">{emailError}</span>}
            </div>

              <br />
            <div className="mb-3">
                <label className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    onChange={handlePassword}
                />
                {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <p>Don't have an account? <Link to="/">Register here</Link></p>
        </form>

    )
}

export default FormLogin