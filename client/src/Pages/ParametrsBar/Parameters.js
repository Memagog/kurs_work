import React,{useContext}from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../..';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
     root: {          
       display: 'flex',
       cursor: 'pointer' ,
       flexWrap: 'wrap',
       '& > *': {
         margin: theme.spacing(3),
         width: theme.spacing(10),
         height: theme.spacing(8),
       },
     },
   }));
const Parameters = observer(()=> {
     const {param} = useContext(Context);
     const classes = useStyles();
    
     return(
      <div className={classes.root}>           
          {param._param.map((value)=>
            <Paper key={value.id} onClick={()=> param.setSelectedParam(value)} elevation={value.id === param._selectedParam.id? 8 : 1}>
                 {value.price}
            </Paper>                  
          )}
             
      </div>
       
     )
     
})
export default Parameters




