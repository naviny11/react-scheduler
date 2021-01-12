import React from 'react';

const ResetPassword = () => {
    return (
        <>
            <h1 className="header">Reset Password</h1>
            <form>
                <div className="center">
                    <div>
                        <div>Enter your email to get started</div>
                        <div><input type="text" className="form-input" placeholder="Email Address"/></div>
                        <div>New password</div>
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

export default ResetPassword;