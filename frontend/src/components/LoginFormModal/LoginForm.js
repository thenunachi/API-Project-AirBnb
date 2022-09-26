// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './loginForm.css'
import DemoUser from "../Demo";


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="Login-form-container" onSubmit={handleSubmit}>
      <div className="login-Title-SignUp">Log in </div>
      <hr className="break" />
      <div className="welcomeT">Welcome to T-bnb</div>
      <ul id="errorLogin">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}

      </ul>
      <label >

        <input
          id="userfeild"
          className="field"
          type="text"
          placeholder=" Username or Email"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label >

        <input
          id="passwordfeild"
          className="field"
          type="password"
          placeholder=" Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="loginButton" type="submit">Log In</button>
      <DemoUser />


    </form>
  );
}

export default LoginForm;