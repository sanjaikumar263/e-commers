import React from 'react'
import "../Pages/CSS/Loginsignup.css"
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_container">
        <h1>Sign up</h1>
        <div className="loginsigeup_field">
          <input type="text " placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">
          Already Have a accout <span>Login here</span>
          </p>
          <div className="loginsigeup-agree">
            <input type="checkbox" />
            <p>By Continuing, i agree to the term and Continue</p>
          </div>
        
      </div>
    </div>
  )
}

export default LoginSignUp
