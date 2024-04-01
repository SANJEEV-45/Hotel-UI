import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const logIn = (e)=>{
    e.preventDefault();
  }

  return (
    <div className='login-signup-form animated fadeinDown'>
        <div className='form'>
            <h2 className='title'>Login to your Account</h2>
          <form>
             <input type="text" placeholder='Enter your name'/>
             <input type="password" placeholder="Enter your password"/>
             <button onClick={logIn} className='btn  btn-block'>Login</button>
             <p className='message'>Not registered? &nbsp;
                <Link to={'/register'}>Create New</Link>
             </p>
          </form>
        </div>
    </div>
  )
}

export default Login
