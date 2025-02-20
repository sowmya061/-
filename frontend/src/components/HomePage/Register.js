import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import './Login.css'

const Register = () => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[phoneNo , setPhoneNo]= useState('')
    const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:4000/signup', {username, email, password, phoneNo})
    //     .then(res => {
    //         navigate('/login')
    //     })
    //     .catch(err => console.log(err))
    // }
  return (
    <div>
   
    <div class="main-content-login">
        <div class="form-container-login">
            <h1>Welcome!</h1>
            <h3>Create a new account</h3>
            <form action="/login" className='form-login' >
            {/* onSubmit={handleSubmit} */}
                <div class="form-group-login">
                    <Icon icon="mdi:user" width="24" height="24" className='user-icon'/>
                    {/* <label for="name" className='input-label'>Name:</label> */}
                    <input type="text"
                     id="name" 
                     name="username" 
                     placeholder="Enter your Name" 
                     required autocomplete="off" 
                     className='input-box-login'  
                     onChange={(e) => setName(e.target.value)}
                     autoComplete="off"
                     >
                     </input>
                </div>
                <div class="form-group-login">
                <Icon icon="mdi:email" width="24" height="24"  className='lock-icon' />
                    {/* <label for="name" className='input-label'>Name:</label> */}
                    <input type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your Email" 
                    required 
                    autocomplete="off" 
                    className='input-box-login'   
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                     ></input>
                </div>
                <div class="form-group-login">
                <Icon icon="mingcute:lock-fill" width="24" height="24" className='lock-icon'/>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                    required 
                    autoComplete="off" 
                    className='input-box-login'
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div class="form-group-login">
                <Icon icon="ic:round-phone" width="24" height="24"  className='lock-icon' />        
                    <input type="tel" 
                    id="phone_no" 
                    name="phone_no" 
                    placeholder="Enter Mobile No." 
                    required 
                    autoComplete="off" 
                    className='input-box-login'
                    onChange={(e) => setPhoneNo(e.target.value)}></input>
                </div>
                <button type="submit" class="login-btn">SIGN UP</button>
            </form>
            <p className='login-end'>Already have an account? <Link to="/user/login">Login</Link></p>
        </div>
    </div>


    </div>

  )
}

export default Register


