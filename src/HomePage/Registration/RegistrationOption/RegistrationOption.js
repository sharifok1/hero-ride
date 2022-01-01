import { Grid} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './RegistrationOption.css'

const RegistrationOption = () => {
    return (
        <div>
            <h1>Join with us</h1>
          <div  className='signup-card'>
             <div>
             
             </div>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
             <Grid item xs={12} md={6}>
                  <img className='signUp-banar' src="https://www.acematiks.com/blog/wp-content/uploads/2021/02/ride-sharing.jpg" alt="" />
              </Grid>
              <Grid item xs={12} md={6}>
                   <div className='joinUs-Text'>
                        <NavLink to = '/SignUpAsRider'>
                            <button className='joinUs-btn'>Join Us as a Rider</button> <br />
                        </NavLink>
                        <NavLink to = '/SignUpAsLearner'>
                            <button className='joinUs-btn'>Join as a Lesson Learner</button>
                        </NavLink>
                   </div>
              </Grid>
        </Grid>
          </div>
        </div>
    );
};

export default RegistrationOption;