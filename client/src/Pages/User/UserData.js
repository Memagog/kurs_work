import React, { useContext } from 'react'
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Context} from '../../'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  textfield: {
    marginTop: 20,
    width: '100%',
    // marginBottom: 400
  } 
}));
export default function UserData() {
    const classes = useStyles();
    const {types} = useContext(Context);
    return (
        <div>          
          <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
            <Grid item xs={4} sm={4}>
                <Typography variant="h2" gutterBottom>
                  CreateResume
                </Typography>                
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="outlined"
                  className={classes.textfield}
                />              
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  className={classes.textfield}
                />                 
                <select class="custom-select custom-select-lg mb-3" style={{marginTop: 30}}>
                  <option selected>Open this select menu</option>
                      {types._types.map((type)=>
                              <option value={type.id}>{type.skills}</option>
                      )}                
                </select>
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  variant="outlined"
                  className={classes.textfield}
                />     
                <div class="form-outline" className={classes.textfield}>
                    <label class="form-label" for="textAreaExample">Message</label>
                    <textarea class="form-control" id="textAreaExample" rows="4"></textarea>                  
                </div>
              <Button
                    variant="contained"
                    color="default"
                    className={classes.textfield}
                    startIcon={<CloudUploadIcon />}
                  >
                    Create
              </Button>                                
            </Grid>
                           
          </Grid>        
        </div>
    )
}
