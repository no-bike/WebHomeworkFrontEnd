import './login.css';

export default function Login() {
    return (
        <>
        <div className="login-part">
            <div className="login-logo">
                <h1>Login</h1>
            </div>
            <div className="login-form">
                <div className="login-name">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="login-passwd">
                  <input type="password" placeholder="Password" />
                </div>
                <div className='login-icon'>
                    <button type="submit">Login</button>
                </div>
            </div>
        </div>
        </>
    );
}