import React, {useEffect, useState,useContext} from 'react'
import {Button, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jwt from 'jwt-decode';
import { Context } from '../..';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { createEvent } from '../../http/eventApi';


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
export default function CreateEventsPage() {
    const classes = useStyles();
    const {types} = useContext(Context);
    const [data, setData] = useState({});
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState({})    
    const [state, setState] = useState({
          title: "",
          description: "",
          price: "",
          profession: "",
          location: "",
          people: "",        
          phone: "",
          social: "",
          img: "",
      })
    const newEvent = async () => {
        try{
          const event = await createEvent(state.title,state.description,state.price,state.profession,state.location,state.people,author,state.phone,state.social,state.img)
          console.log(event);     
        } catch (error) {
          setMessage(error.response.data.message)
        }
    }
    const handleChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
      }       
    useEffect(() => {
      try {
        const token = localStorage.getItem('token')
        const user_token = jwt(token)
        if(user_token){
          setData(user_token)
          console.log(user_token)
          const author = data.id;
          setAuthor(author)                 
        }
        
      } catch (error) {
        console.log("Error in the check")
      }
    },[])
    const handleEvent = (e) => {
      e.preventDefault();
      newEvent();
      console.log(state);
      console.log(author)
    }
    
    return (
        <div>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
          <form noValidate onSubmit={handleEvent}>
            <Grid item xs={2} sm={2}>

                <TextField
                  required
                  id="title"
                  name="title"
                  value={state.title}
                  label="Title"                  
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
                  id="description"
                  label="Description field"
                  type="search"
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  className={classes.textfield}
                /> 
                <TextField
                  id="people"
                  label="People Count"
                  type="search"
                  name="people"
                  value={state.people}
                  onChange={handleChange}                 
                  variant="outlined"
                  className={classes.textfield}
                />   
               <TextField
                  id="price"
                  label="Price"
                  type="search"
                  name="price"
                  value={state.price}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.textfield}
                />               
                <select 
                    class="custom-select custom-select-lg mb-3" 
                    style={{marginTop: 15, width: 400}}  
                    name="profession"                  
                    onChange={handleChange}
                >
                  <option selected>Open this select menu</option>
                      {types._types.map((type)=>
                        <option value={type.skills}>{type.skills}</option>
                      )}                
                </select> 
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
