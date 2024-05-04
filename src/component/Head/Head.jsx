import React from 'react';
import './Head.css';
import { useNavigate } from 'react-router-dom';

function Head({ username }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }

    return (
    <div className='header'>
      <div className='header=left'>
      <img src="/picture/student.png" alt="Logo" style={{ height: '30px' }} />
      </div>
      <div className='header-right'>
        <span>{username}</span>
        <button 
            onClick={handleLogout}
            className='button-logout'
            >
            退出
        </button>
      </div>
    </div>
  );
}

export default Head;