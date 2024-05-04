import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('后端api', {  // Replace '后端api' with the actual backend API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if(data.success) {
      window.location.href = '跳转页面';  // Redirect to dashboard if login is successful
    }else {
      alert('登录失败');  // Alert the user if login fails
    }
  };
    return (
        <>
        <div className="login-part">
            <div className="login-logo">
                <h1>Login</h1>
            </div>
            <div className="login-form">
                <div className="login-name">
                  <input type="text" 
                          placeholder="Username"
                          onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="login-passwd">
                  <input type="password" 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='login-icon'>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
        </>
    );
}