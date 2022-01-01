import { Container, Grid } from '@mui/material';

import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Profile.css'
// import { useNavigate } from 'react-router';

const Profile = () => {
    const [profile, setProfile]=useState([]);
    const {user}=useAuth()
    useEffect(()=>{
        const url = 'https://obscure-escarpment-46323.herokuapp.com/RiderCollection'
        fetch(url)
        .then(res => res.json())
        .then(data=> setProfile(data))
    },[])
    console.log(profile)
    console.log(user.email)
    const myProfile = profile.filter(myinfo => myinfo.email ===user.email)
    console.log(myProfile)
    return (
        <div>
            {
              myProfile.map(myData=><div
              key={myData._id}>
                 <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                   <div className='avater'>
                       <img className='profilePhoto' src={myData.photoURL} alt="" />
                       <h2>{myData.name}</h2>
                      
                   </div>
                </Grid>
                <Grid item xs={12} md={6}>
                   <div className='lessionCard'>
                      <h1>Rider Information</h1> <hr />
                      <ul className='informationList'>
                          <li>Full Name: {myData.name}</li>
                          <li>email: {myData.email}</li>
                          <li>Phone Number: {myData.phone}</li>
                          <li>NID: {myData.nid}</li>
                          <li>Address: {myData.address}</li>
                          <li>Ride Share Area: {myData.area}</li>
                          <li>Age: {myData.age}</li>
                      </ul>
                      <h1>Vehicle Information</h1>
                      <ul className='informationList'>
                          <li>Car Type: {myData.carType}</li>
                          <li>Car Name: {myData.carName}</li>
                          <li>Car Model: {myData.model}</li>
                          <li>Number Palate No: {myData.namePalate}</li>
                      </ul>
                   </div>
                </Grid>
                </Grid>
                </Container>  
              </div>)  
            }
        </div>
    );
};

export default Profile;