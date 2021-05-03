import { Grid} from '@material-ui/core';
import React from 'react';
import ProfileNavBar from './ProfileNavBar';
const Profile = () => {     

    return (
        <div>
           <Grid container direction="row" justify="center" alignItems="flex-start">
                <Grid item xs={12} sm={10}>
                    <ProfileNavBar></ProfileNavBar>
                </Grid>                 
            </Grid>
          
        </div>
    );
}

export default Profile;
