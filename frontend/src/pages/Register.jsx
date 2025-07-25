import React, { useState } from 'react';
import api from '../utils/api';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', form);
      alert('Registered successfully');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div style={{ padding: '0px' }}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '-70px' }}>
        <input type='text'  style={{
    width: '400px',   // Increase width
    height: '40px',   // Increase height
    fontSize: '18px', // Increase text size
    padding: '8px',    // Space inside the box
  }} placeholder='Username' onChange={e => setForm({ ...form, username: e.target.value })} /><br />
        <input type='email'  style={{
    width: '400px',   // Increase width
    height: '40px',   // Increase height
    fontSize: '18px', // Increase text size
    padding: '8px'    // Space inside the box
  }} placeholder='Email' onChange={e => setForm({ ...form, email: e.target.value })} /><br />
        <input type='password'  style={{
    width: '400px',   // Increase width
    height: '40px',   // Increase height
    fontSize: '18px', // Increase text size
    padding: '8px'    // Space inside the box
  }} placeholder='Password' onChange={e => setForm({ ...form, password: e.target.value })} /><br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
