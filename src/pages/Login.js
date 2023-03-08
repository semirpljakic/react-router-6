import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email);
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };
  return (
    <section className='section '>
      <form className='form' onSubmit={handleSubmit}>
        <h5>Login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='text'
            id='email'
            className='form-input'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};

export default Login;
