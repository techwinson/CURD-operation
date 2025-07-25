import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/login', form);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  const style = { padding: '0px' };
  return (
    <div style={style}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type='text'  style={{
    width: '400px',   // Increase width
    height: '40px',   // Increase height
    fontSize: '18px', // Increase text size
    padding: '8px'    // Space inside the box
  }} placeholder='Username' onChange={e => setForm({ ...form, username: e.target.value })} /><br />
        <input type='password'  style={{
    width: '400px',   // Increase width
    height: '40px',   // Increase height
    fontSize: '18px', // Increase text size
    padding: '8px'    // Space inside the box
  }} placeholder='Password' onChange={e => setForm({ ...form, password: e.target.value })} /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
