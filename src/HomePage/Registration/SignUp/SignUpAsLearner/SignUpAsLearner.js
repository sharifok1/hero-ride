import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth/useAuth';
import { useNavigate } from 'react-router';

const SignUpAsLearner = () => {
    const {createAccount,user}= useAuth()
    const { register, handleSubmit } = useForm();
    const [error,setError]= useState('')
    const [success,setSuccess]= useState('');
    const navigate =useNavigate()
  const onSubmit = data =>{
    if(data.password !== data.confirmPassword){
        setError("Password not match");
        return SignUpAsLearner;
    }
    if(data.password === data.confirmPassword){
        setSuccess("Password match");
    }
    createAccount(data.email, data.password, data.name, data.photoURL, navigate, false)
    const url='http://localhost:3010/LearnerCollection'
    fetch(url,{
      method:'POST',
      headers:{
          'content-type':'application/JSON'
       },
       body:JSON.stringify(data)
    })
    .then(res=>{
      if(res.status === 200){
          alert('Regitration Successful as learner ')
      }
    })
    console.log(user)
  }
    return (
        <div>
             <div>
            <Container>
            <h1>Regestration as a Driving Lesson Learner</h1> <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='riderformPage'>
                <input className='riderForm' {...register("name")} placeholder='Full Name' required />
                <input className='riderForm' {...register("email")} placeholder='email' required />
                <input className='riderForm' {...register("age")} placeholder='Age' required />
                <input className='riderForm' {...register("address")} placeholder='Address' required />
                <input className='riderForm' {...register("phone")} placeholder='Phone Number' required />
                
                <input className='riderForm' {...register("nid")} placeholder='NID Picture Link' required />
                <input className='riderForm' {...register("photoURL")} placeholder='Your profile Picture Link' required />
                <div className='formOption'>
                <select className='formSelector' {...register("carType")}>
                    <option value="bike">bike</option>
                    <option value="car">car</option>
                </select>
                </div>
                <br />
                <input className='riderForm' type='password' {...register("password")} placeholder='password' required />
                <input className='riderForm' type='password' {...register("confirmPassword")} placeholder='confirm password' required />
                {
                    success? <Box sx={{color:'#0e9'}}>{success}</Box> : <Box sx={{color:'#e00'}}>{error}</Box>
                }
                
                <input className='formSubmit' type="submit" />
            </div>
         </form>
            </Container>
            
        </div>
        </div>
    );
};

export default SignUpAsLearner;