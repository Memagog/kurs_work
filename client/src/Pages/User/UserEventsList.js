import { observer } from 'mobx-react-lite';
import React, {useEffect, useState, useContext} from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../..';
import UserEventItem from './UserEventItem';
import { makeStyles } from '@material-ui/core/styles';
import {myEvents } from '../../http/eventApi';
import jwt_decode from 'jwt-decode';


const useStyles = makeStyles((theme) => ({
  root: {          
    display: 'flex',
    cursor: 'pointer' ,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(4),     
    },
  },
}));
const UserEventsList = observer(() => {
  const {events} = useContext(Context);  
  const classes = useStyles();
  
    
  useEffect(() => {
    try {      
      const token = localStorage.getItem('token')
      const user_token = jwt_decode(token)    
        // setToken(user_token)       
        const id = user_token.id;        
        console.log(id)
        myEvents(id).then(data=> {
          const event = data.data.myevents
            console.log(event)
            events.setEvents(event)            
         })      
    } catch (error) {
      console.log("Error in the token")
    } 
  }, []);  
 
  return (
    <Row className = {classes.root}>
        {events._events.map((event)=> 
            <div>
              <UserEventItem key={event._id} event={event}></UserEventItem>
            </div>           
        )}       
    </Row>
) ;
  
})

export default UserEventsList;
