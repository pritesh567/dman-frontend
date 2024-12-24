import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/actions/userActions';
import { useNavigate, useNavigation } from 'react-router';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    // e.preventDefault();
    // dispatch(loginRequest({ email, password }));
  };

  const handleSignupRedirect = () => {
    navigate('/register'); // Navigate to the signup page
  };



  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
   
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
      <p className="mt-3">
        Don't have an account?{' '}
        <button onClick={handleSignupRedirect} className="btn btn-link p-0">
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
