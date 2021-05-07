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
import moduleName from '../../resources/images/zaika.jpg';
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
 fone: {
    backgroundImage: `url(https://a.allegroimg.com/original/119957/224782944da1baf01ad2c1f8e57b/Naklejka-scienna-KROLICZKI-balony-chmurki-XXXL)`,
    backgroundSize: 300,                 
    width: "100%",
    height: "100%",
    backgroundRepeat: 'repeat-y',
    borderRadius: ' 0% 0% 10% 0%',
    boxShadow: "-5px -5px 5px -5px  rgba(244, 66, 137, 0.32) inset"
 },
 fone1: {
  backgroundImage: `url(https://a.allegroimg.com/original/119957/224782944da1baf01ad2c1f8e57b/Naklejka-scienna-KROLICZKI-balony-chmurki-XXXL)`,
  backgroundSize: 300,                 
  width: "100%",
  height: "100%",
  backgroundRepeat: 'repeat-y',
  borderRadius: ' 0% 0% 0% 20%',
  boxShadow: "-5px 5px 5px -5px rgba(244, 66, 137, 0.6)"
}
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
          console.log(data)
          setAuthor(data.name)
          setEmail(data.email)
        })   
  },[])
  // console.log(event);
  const handleSocial=()=>{   
      setSocial(!social)   
  }
  return (
    
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={2}>
          <div className={classes.fone}>
            
          </div>
        </Grid>
        <Grid item xs={8} >
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
          <div className={classes.fone1}>
            
          </div>
        </Grid>
      </Grid>
    </div>
  );
}