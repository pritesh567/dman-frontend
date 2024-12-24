import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../redux/actions/userActions';
import { mobileRegex } from '../Helpers/commonFunctions';
// import { registerRequest } from '../redux/actions/userActions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleRegister = (e) => {
    e.preventDefault(); 
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid mobile number (10 digits).');
      return;
    }
    const form ={
      email,
      name,
      password,
      mobile
    }
    dispatch(signUpRequest(form,response => {
      console.log("loginnnnnnneee", response.status);
    }));
  };
  
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="phone"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control mb-3"
          required
         maxLength={10}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default Register;
