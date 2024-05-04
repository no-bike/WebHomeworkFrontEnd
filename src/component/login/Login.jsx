import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[mode, setMode] = useState('student');  // Add this line to the existing code
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = '后端api'

    const response = await fetch('后端api', {  // Replace '后端api' with the actual backend API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, mode}),
    });

    const data = await response.json();

    if(data.success) {
      navigate('/home');  // Redirect to dashboard if login is successful
    }else {
      alert('登录失败');  // Alert the user if login fails
    }
  };
    return (
        <>
        
        <div className="login-part" >
            <div className="login-logo">
              <img src='/picture/welcome.png' alt='欢迎使用'/><br/>
              <img src='/picture/student.png' alt='学生管理系统' />
            </div>
            <div className="login-form">
                <div className='login-mode'>
                  <label className='labelText'>您是:</label>
                  <button 
                    onClick={() => setMode('student')}
                    className={mode === 'student' ? 'active' : ''}>
                    学生
                    </button>
                  <button 
                    onClick={() => setMode('teacher')}
                    className={mode === 'teacher' ? 'active' : ''}>
                    教师
                    </button>
                </div>
                <div className="login-name">
                  <label className='labelText'>用户名:</label>
                  <input type="text" 
                          placeholder="Username"
                          onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="login-passwd">
                  <label className='labelText'>密码:</label>
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