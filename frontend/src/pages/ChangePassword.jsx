import React, { useState } from 'react';
import api from '../utils/api';

const ChangePassword = () => {
  const [form, setForm] = useState({ username: '', newPassword: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put('/change-password', form);
      alert('Password updated');
    } catch (err) {
      alert('Failed to update');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Change Password</h2>
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
  }} placeholder='New Password' onChange={e => setForm({ ...form, newPassword: e.target.value })} /><br />
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default ChangePassword;
