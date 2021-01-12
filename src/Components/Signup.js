import React from 'react';

const Signup = () => {
    return (
        <>
            <h1 className="header">Sign Up Page</h1>
            <form>
                <div className="center">
                    <div>
                        <div>Enter your email to get started</div>
                        <div><input type="text" className="form-input" placeholder="Email Address"/></div>
                        <div>Enter your full name</div>
                        <div><input type="text" className="form-input" placeholder="Email Address"/></div>
                        <div>Choose a password with atleast 8 characters</div>
                        <div><input type="password" className="form-input" placeholder="Password"/></div>
                        <div>Confirm password</div>
                        <div><input type="password" className="form-input" placeholder="Enter password again"/></div>
                        <div><input type="submit" className="form-submit" value="Continue" /></div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Signup;