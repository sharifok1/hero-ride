import { Container, Grid } from '@mui/material';
import React from 'react';
import './Course.css'

const Course = () => {
    return (
        <div className='drivingCard'>
            <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                   <div className='lessionCard'>
                       <img className='learnDriveImg' src="https://i.ibb.co/9Wmm3SP/bike-Driving.png" alt="" />
                       <h3>Learn Bike driving Lession</h3>
                       <h4>Start Driving with 100$</h4>
                        <button>Pay Now</button>
                   </div>
                </Grid>
                <Grid item xs={12} md={6}>
                   <div className='lessionCard'>
                       <img className='learnDriveImg' src="https://i.ibb.co/fX5WZLf/Compact-hatchback-car-with-a-young-afro-american-woman-driving-on-a-background-of-abstract-cityscape.jpg" alt="" />
                       <h3>Learn car driving Lession</h3>
                        <h4>Start Driving with $200</h4>
                        <button>Pay Now</button>
                   </div>
                </Grid>
                </Grid>
                </Container>
        </div>
    );
};

export default Course;