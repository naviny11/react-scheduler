import React from 'react';

const ForgotPassword = () => {
    return (
        <>
            <h1 className="header">Forgot Password?</h1>
            <form>
                <div className="center">
                    <div>
                        <div>Enter your email to get started</div>
                        <div><input type="text" className="form-input" placeholder="Email Address"/></div>
                        <div><input type="submit" className="form-submit" value="Send reset link" /></div>
                    </div>
                </div>
            </form>

        </>
    );
}

export default ForgotPassword;