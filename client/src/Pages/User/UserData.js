import React, {useEffect, useState,useContext} from 'react'
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jwt_decode from 'jwt-decode';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {createJob} from '../../http/jobsApi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  textfield: {
    marginTop: 13,
    width: 600,
    // marginBottom: 400
  } 
}));
export default function Profile() {
    const classes = useStyles();  
    const [data, setData] = useState({});
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState({})    
    const [state, setState] = useState({
          profession: "",
          experience: "",
          salary: "",
          profession: "",
          author: "",
          location: "",        
          phone: "",
          social: "",
          img: "",
      })
   
    const handleChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
      }       
    useEffect(() => {
      try {
        const token = localStorage.getItem('token')
        const user_token = jwt_decode(token)              
        console.log(user_token.id)
        setAuthor(user_token.id) 
        setData(user_token.username)
      } catch (error) {
        console.log("Error in the check")
      }
    },[])
    const handleEvent = (e) => {
      e.preventDefault();
      newJob();
      console.log(state);
      console.log(author)
    }
    const newJob = async () => {
      try{
         const event = await createJob(state.profession,state.experience,state.salary,state.location,author,state.phone,state.social,state.img)
         console.log(event);     
      } catch (error) {
        setMessage(error.response.data.message)
      }
    }
    return (
        <div>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
          <form noValidate onSubmit={handleEvent}>
            <Grid item xs={2} sm={2}>
                <Typography variant="h3" gutterBottom>
                    Create Resume
                </Typography>
                <TextField
                  required
                  id="profession"
                  name="profession"
                  value={state.profession}
                  label="Profession"                  
                  variant="outlined"
                  type="search"
                  onChange={handleChange}
                  className={classes.textfield}
                />
                <TextField
                  disabled
                  id="author"
                  label= {`Author `}
                  name="author"
                  value={data.username}
                  variant="outlined"
                  
                  className={classes.textfield}
                />                   
             
                <TextField
                  id="experience"
                  label="Experience"
                  type="search"
                  name="experience"
                  value={state.experience}
                  onChange={handleChange}                 
                  variant="outlined"
                  className={classes.textfield}
                />   
               <TextField
                  id="salary"
                  label="Salary"
                  type="search"
                  name="salary"
                  value={state.salary}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                />            
               
                <TextField
                  id="location"
                  label="Location"
                  type="search"
                  name="location"
                  value={state.location}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                />
                 <TextField
                    id="phone"
                    label="Phone"
                    type="search"
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.textfield}
                />
               <TextField
                    id="social"
                    label="Social"
                    type="search"
                    name="social"
                    value={state.social}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.textfield}
                />
                <TextField
                    id="img"
                    label="Input Image Url"
                    type="search"
                    name="img"
                    value={state.img}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.textfield}
                />
                 <Button
                    variant="contained"
                    color="default"
                    type="submit"
                    className={classes.textfield}
                    startIcon={<CloudUploadIcon />}
                  >
                    Create
                </Button>
            </Grid>
            </form>
                     
          </Grid>        
        </div>
    )
}
