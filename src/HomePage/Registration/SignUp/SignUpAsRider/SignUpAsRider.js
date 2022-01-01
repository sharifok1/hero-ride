import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth/useAuth';
import './SignUpAsRider.css'

const SignUpAsRider = () => {
    const {createAccount}=useAuth();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [error,setError]= useState('')
    const [success,setSuccess]= useState('')

  const onSubmit = data =>{
    if(data.password !== data.confirmPassword){
        setError("Password not match");
        return SignUpAsRider;
    }
    if(data.password === data.confirmPassword){
        setSuccess("Password match");
    }   
    createAccount(data.email, data.password, data.name, data.photoURL, navigate, true)

    const url='http://localhost:3010/RiderCollection'
      fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/JSON'
         },
         body:JSON.stringify(data)
      })
      .then(res=>{
        if(res.status === 200){
            alert('Regitration Successful as Rider ')
        }
      })
  }
 
    return (
        <div>
            <Container>
            <h1>Regestration as Rider</h1> <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='riderformPage'>
                <input className='riderForm' {...register("name")} placeholder='Full Name' required />
                <input className='riderForm' {...register("email")} placeholder='email' required />
                <input className='riderForm' {...register("age")} placeholder='Age' required />
                <input className='riderForm' {...register("address")} placeholder='Address' required />
                <input className='riderForm' {...register("phone")} placeholder='Phone Number' required />
                <input className='riderForm' {...register("drivingLicence")} placeholder='Driving Licence Picture Link' required />
                <input className='riderForm' {...register("nid")} placeholder='NID Picture Link' required />
                <input className='riderForm' {...register("photoURL")} placeholder='Your profile Picture Link' required />
                <input className='riderForm' {...register("area")} placeholder='Your Area' required />
                <h3>Car Information</h3>
                <div className='formOption'>
                <select className='formSelector' {...register("carType")}>
                    <option value="bike">bike</option>
                    <option value="car">car</option>
                </select>
                </div>
                <input className='riderForm' {...register("carName")} placeholder='Car Name:Toyota Aqua' required />
                <input className='riderForm' {...register("model")} placeholder='Model' required />
                <input className='riderForm' {...register("namePalate")} placeholder='Name palate' required />
                <br />
                <input className='riderForm' type='password' {...register("password")} placeholder='password' required />
                <input className='riderForm' type='password' {...register("confirmPassword")} placeholder='confirm password' required />
                {
                    success? <Box sx={{color:'#0e9'}}>{success}</Box> : <Box sx={{color:'#0e9'}}>{error}</Box>
                }
                
                <input className='formSubmit' type="submit" />
            </div>
         </form>
            </Container>
            
        </div>
    );
};

export default SignUpAsRider;