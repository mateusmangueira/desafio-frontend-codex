import React, { useState } from 'react';

import sighUpImg from '../../signup2.svg';

import '../Login/styles.css';

const SignUp = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const signUpUser = (event) => {
        event.preventDefault();
        console.log(enteredName, enteredEmail, enteredPassword);
    }

    const changeNameHandle = event => {
        setEnteredName(event.target.value);
    }

    const changeEmailHandle = event => {
        setEnteredEmail(event.target.value);
    }

    const changePasswordHandle = event => {
        setEnteredPassword(event.target.value);
    }

    return (
        <div className="base-container">
            <div className="header">Sign Up</div>
            <div className="content">
                <div className="image">
                    <img src={sighUpImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="text">Name</label>
                        <input type="text" name="text" placeholder="name" value={enteredName} onChange={changeNameHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" value={enteredEmail} onChange={changeEmailHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={enteredPassword} onChange={changePasswordHandle} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn" onClick={signUpUser}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default SignUp;