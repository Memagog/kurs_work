import React from 'react'
import {Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  textfield: {
    marginTop: 20,
    width: 600,
    // marginBottom: 400
  } 
}));
export default function CreateEventsPage() {
    const classes = useStyles();
    return (
        <div>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
            <Grid item xs={2} sm={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="outlined"
                  className={classes.textfield}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
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
                <TextField
                  id="outlined-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  className={classes.textfield}
                />
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                  className={classes.textfield}
                />
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  variant="outlined"
                  className={classes.textfield}
                />
                {/* <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="outlined"
                  className={classes.textfield}
                /> */}

               
            </Grid>
            <div class="form-outline" className={classes.textfield}>
                  <label class="form-label" for="textAreaExample">Message</label>
                  <textarea class="form-control" id="textAreaExample" rows="4"></textarea>                  
                </div>
          </Grid>        
        </div>
    )
}
