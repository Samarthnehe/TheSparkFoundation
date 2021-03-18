import React from 'react';
import './Signin.css'

function Signin() {
    return (
        <div className="signin">
            <div className="signin__form">
                <h2>SIGN-IN</h2>
                <form>
                    <div className="input">
                        <h5>Email</h5>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <h5>Password</h5>
                        <input type="password" />
                    </div>
                    
                    <button>Sign In</button>
                    <span>Already have an account? <a>Login</a></span>
                </form>
            </div>
        </div>
    )
}

export default Signin
