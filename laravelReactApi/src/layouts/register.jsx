import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axiosClient';
import { useStateContext } from '../contexts/contextProvider';

const Register = () => {
    const {setUser,setToken} = useStateContext();

    const nameRef = useRef();
    const emailRef = useRef(); 
    const passRef = useRef();

    const signUp = (e)=>{
        e.preventDefault();
        const payload = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passRef.current.value
        }
        axiosClient.get('/regsiter',payload).then(({data})=>{
            setUser(data.name);
            setToken(data.token);
        }).catch(err=>{
            const response = err.response;
            if(response && response.status == 422){
                console.log(response.data.errors);
            }
        });
    }


  return (
    <div className='login-signup-form animated fadeinDown'>
        <div className='form'>
            <h2 className='title'>Register your details</h2>
          <form>
             <input ref={nameRef}  type="text" placeholder='Enter your name'/>
             <input ref={emailRef} type="email" placeholder='Enter your email'/>
             <input ref={passRef} type="password" placeholder="Enter your password"/>
             <button onClick={signUp} className='btn  btn-block'>Sign Up</button>
             <p className='message'>Already have an account? &nbsp;
                <Link to={'/login'}>Login</Link>
             </p>
          </form>
        </div>
    </div>
  )
}

export default Register
