import { Grid} from '@material-ui/core';
import React from 'react';
import ProfileNavBar from './ProfileNavBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Profile = () => {
    const classes = useStyles();    

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
