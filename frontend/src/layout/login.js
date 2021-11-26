import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createUser } from '../action/UserAction';
import './login.css';

export function Login() {
  const [userName, setUser] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  function handleCurrentData(e) {
    setUser(e.target.value);
  }

  function handleCurrentEmail(e) {
    setEmail(e.target.value);
  }

  function handleCurrentPassword(e) {
    setPassword(e.target.value);
  }

  function submit1(e) {
    e.preventDefault()
    const username = userName;
    const email = userEmail;
    const Password = userPassword;
    dispatch(createUser({ username, email, Password }))
  }

  return (
    <div className="login1">
      <hr />
      <h1 id="heading">Log in SnOOpy ShOOPer</h1>
      <hr />
      <div>
        <form className="form1">
          <label className="email1" htmlFor="email">Username::</label>
          <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="Enter Username here..." required /><br /><br />
          <hr />
          <label className="email1" htmlFor="email">Email::</label>
          <input type="email" id="email" value={userEmail} onChange={handleCurrentEmail} name="email" placeholder="Enter Email here...." required /><br /><br />
          <hr />
          <label className="email1" htmlFor="password">Password::</label>
          <input type="password" id="email" value={userPassword} onChange={handleCurrentPassword} name="password" placeholder="Enter Password here...." required /><br /><br />
          <hr />
          <input type="checkbox" name="Remember" defaultValue="Remember me" defaultChecked />

          <label className="email1" htmlFor="Remember">Remember me</label><br /><br />

          <input className="signin" onClick={submit1} type="submit" defaultValue="Sign in" />
          <p><a href="#">Create Acccount </a></p>
          <p><a href="#">Forgot Password </a></p>
          <hr/>
        </form>
      </div>
    </div>
  )
}