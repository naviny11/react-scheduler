import React from 'react';
import '../scheduler.css';

const Login = () => {
    return (
        <>
            <h1 className="header">Login Page</h1>
            <form>
                <div className="center">
                    <div>
                        <div>Enter your email to get started</div>
                        <div><input type="text" className="form-input" placeholder="Email Address"/></div>
                        <div>Password</div>
                        <div><input type="password" className="form-input" placeholder="Password"/></div>
                        <div>
                            <input type="submit" className="form-submit" value="Continue" />
                            <a href="/forgotpassword" className="form-link">Forgot Password</a>
                        </div>
                        <div>New User? <a href="/signup">Sign Up</a></div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;