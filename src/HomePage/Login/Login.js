import { Box } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
  const history = useNavigate()
    const { register, handleSubmit } = useForm();
    const { passwordLogin,firebaseError,user}=useAuth();
    const onSubmit = data => {
        passwordLogin(data.email, data.password, history)
      }
    return (
        <Box className='loginBack' sx={{ flexGrow: 1 }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

               <Box className="log-field">  
                <input className="login-filed" {...register("email")} placeholder="email" type="email" required/>
                <input className="login-filed" {...register("password")} placeholder="password" required/>   
                <input className="login-btn" type="submit" value="Login" />
                {
                 user.email? <p style={{color:'#0e5'}}>Successfully Logedin</p>
                 :
                 <p style={{color:'#e50'}}>{firebaseError}</p>
               }
               </Box>
              
                </form>
                <div className='loginPage-bottomTeaxt'>
                <h3 >***I haven't account?***</h3>
                <h2>Please click on <NavLink to="/signUp"> <button className='newAcc'>Create New Account</button></NavLink> </h2>
                </div>
                
      </Box>
    );
};

export default Login;