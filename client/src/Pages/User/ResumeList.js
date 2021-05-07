import React,{useState, useEffect, useContext} from 'react';
import {myEvents } from '../../http/eventApi';
import jwt_decode from 'jwt-decode';
import {getResume} from '../../http/jobsApi';
import { Typography } from '@material-ui/core';
import { Context } from '../..';
import { Row } from 'react-bootstrap';
import Resume from './Resume';
const ResumeList = () => {   
    const {resume} = useContext(Context);
    useEffect(() => {
        try {      
          const token = localStorage.getItem('token')
          const user_token = jwt_decode(token)    
            // setToken(user_token)       
            const id = user_token.id;        
            console.log(id)
            getResume(id).then(data=> {
              const res = data.data.resume 
              resume.setResume(res)    
              console.log(res)                     
             }) 
            //  console.log(resume)     
        } catch (error) {
          console.log("Error in the token")
        } 
      }, []); 
    return (
        <div>          
             <Row>
              {resume._resume.map((resume)=> 
                  <div>
                    <Resume key={resume._id} resume={resume}></Resume>
                  </div>
                
              )}
           
            </Row>
        </div>
    );
}

export default ResumeList;
