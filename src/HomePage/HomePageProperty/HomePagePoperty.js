import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './HomePagePoperty.css'

const HomePagePoperty = () => {
    const {user}=useAuth()
    return (
        <div className='homePagebody'>
            <div className='servicesCard'>
             <div className='left'>
                <img className='ride-img' src="https://i.ibb.co/nzmHtTL/Man-with-map-on-smartphone-renting-car-Driver-using-car-sharing-app-on-phone-and-searching-vehicle-V.jpg" alt="" />
                <Box sx={{ textAlign: 'left', m: 1 }}>
                <Typography sx={{ml:10,fontSize:25,fontWeight:600, color:'#ff8f00'}}>Ride Share</Typography>
                    <ul className='services-point'>
                        <li>Join with our team and earn</li>
                        <li>Earn by share your ride</li>
                        <li>Earn daily up to TK3000</li>
                        <li>We are serve the best oppourtuanity</li>
                        
                    </ul>
                    </Box>
            </div>
            <div className='right'>
                <Box sx={{ textAlign: 'left', m: 1 }}>
                <Typography sx={{ml:10,fontSize:25,fontWeight:600, color:'#4a148c'}}>Learn Driving</Typography>
                <ul className='services-point'>
                    <li> Basic theoretical knowledge of driving rules.</li>
                    <li> Theoretical knowledge of traffic rules.</li>
                    <li>  Safe driving.</li>
                    <li>  And all basic practical training.</li>
                </ul>
                <img className='ride-img' src="https://i.ibb.co/smjrfJ4/drive.jpg" alt="" />
                </Box>
            </div>
            </div>
            {
                user.displayName? <div> <br /> <br /> <br /></div>:
                <NavLink to ="/signUp">
                 <button className='signUp-btn'>SignUp Now</button> 
             </NavLink>
            }
            
        </div>
    );
};

export default HomePagePoperty;