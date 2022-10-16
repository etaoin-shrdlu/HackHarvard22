import React, {useState} from 'react';
import "./LoginForm.css";

function LoginForm() {
    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup");
        setTimeout(() => showPopup("hide"), 3000);
    }

    return (
        <div className="page">
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <div className='login-btn'>Login</div>

                <p className='text'>Or login using</p>

                <div className='alt-login'>
                    <div className='facebook'></div>
                    <div className='google'></div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;