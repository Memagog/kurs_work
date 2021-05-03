import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Image} from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router';
import {getAuthor,getOneEvent } from '../../http/eventApi';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {      
      width: '100%' ,
      height: '100%',
      paddingRight: 20,
  },
  content: {
      marginTop: 40,
  },
  descrip: {
      margin: 10,
      backgroundColor: '#f50057',
      fontFamily: 'Open Sans',
      fontSize: 23,
      borderRadius: 25,
      paddingLeft: 20 
  },
  

}));

export default function EventInfo() {
  const classes = useStyles();
  const [event, setEvent] = useState({});
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [social, setSocial] = useState(false);
  const [show, setShow ] = useState(false);
  const userId = useParams();
  
  useEffect(() => {
        getOneEvent(userId.id).then((data)=>setEvent(data))    
  },[])
  useEffect(()=>{
        getAuthor(userId.id).then((data)=>{
          setAuthor(data.name)
          setEmail(data.email)
        })   
  },[])
  // console.log(event);
  const handleSocial=()=>{
    if(social){
      setSocial(false)
    }
    else setSocial(true)
  }
  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} >
            <Grid  container  spacing={3} direction="row"  justify="center" alignItems="flex-start" className={classes.content}>                 
                   <Grid item xs={4}>
                   <Typography variant="h4" gutterBottom>{event.title}</Typography>
                        <Image className={classes.img} src={event.img}/>                        
                    </Grid >
                    <Grid item xs={4} className={classes.headDescrip}>
                            <Typography variant="h4" gutterBottom>
                                Description
                            </Typography>
                            <Typography variant="body1" gutterBottom >
                               {event.description}
                            </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.headDescrip}>
                            <Typography variant="h4" gutterBottom>
                               Skills and Price
                            </Typography>
                            <Typography variant="body1" gutterBottom >
                               {event.profession}
                            </Typography>
                            <Typography variant="body1" gutterBottom >
                               {event.price}
                            </Typography>
                            <TelegramIcon color={social?'secondary':'disabled'}  cursor='pointer' fontSize='large' onClick={()=>handleSocial()}/>
                            <InstagramIcon color={social?'secondary':'disabled'} cursor='pointer' fontSize='large' onClick={()=>handleSocial()}/>
                            <FacebookIcon color={social?'secondary':'disabled'} cursor='pointer' fontSize='large' onClick={()=>handleSocial()}/>
                            {social?
                              <Typography variant="h5" gutterBottom >
                                {event.social}
                              </Typography>:<p></p>                              
                            }
                            <MailIcon color={show?'secondary':'disabled'} cursor='pointer' fontSize='large' onClick={()=>show?setShow(false):setShow(true)}/>
                            {show?
                              <Typography variant="h5" gutterBottom >
                                {email}
                              </Typography>:<p></p>                              
                            }
                                            
                    </Grid>
                               
            </Grid> 
            
            <Grid item xs={8} className={classes.content}>
                <Typography variant="h5" gutterBottom>Information</Typography>       
                  
                        <Grid className={classes.descrip} color='#f892b3'>
                              Title:{event.title} 
                        </Grid>
                        <Grid className={classes.descrip} color='#f892b3'>                   
                            People:{event.people}
                        </Grid>
                        <Grid className={classes.descrip} color='#f892b3'>                   
                            Location:{event.location}
                        </Grid>
                        <Grid className={classes.descrip} color='#f892b3'>                   
                            Author:{author}
                        </Grid>
                        
                        <Grid className={classes.descrip} color='#f892b3'>                   
                            Phone:{event.phone}
                        </Grid>                      

            </Grid>             
        </Grid>        
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}