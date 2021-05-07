import { observer } from 'mobx-react-lite';
import React,{useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Button, IconButton, Link } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
const useStyles = makeStyles({
    root: {        
      maxWidth: 600,
      alignItems: 'center',      
    },
    media: {
      height:360
       
    },
  });  
const Resume = observer(({resume}) => {
    
    const classes = useStyles();
    
   
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(true)   
    // const v = history.push(EVENTSINFO+'/'+ event.id);
    return (
        <Card className={classes.root}>
             <Typography variant="h3" color="textSecondary" >
                   Your Resume
             </Typography>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                РФ
                </Avatar>
                }
                action={
                <IconButton aria-label="settings"  onClick={()=>setUpdate(!update)} color={update?'secondary':'disabled'}>
                    <CreateIcon />
                </IconButton>         
                }
                // title={resume.profession}
                // subheader={time}
            />     
            <CardMedia
                className={classes.media}
                image={resume.img}       
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" >
                    Profession: {resume.profession}
                </Typography>
                <Typography variant="body2" color="textSecondary" >
                    Experience: {resume.experience}
                </Typography>
                <Typography variant="body2" color="textSecondary" >
                    Location: {resume.location}
                </Typography>
                <Typography variant="body2" color="textSecondary" >
                    Phone: {resume.phone}
                </Typography>
                <Typography variant="body2" color="textSecondary" >
                    Social: {resume.social}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={()=>setShow(!show)} color={show?'secondary':'disabled'}>
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share"  color={'secondary'}>
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="settings" color={'secondary'}>
                    <DeleteOutlineIcon />
                </IconButton>              
               
               
            </CardActions>
            
            
        </Card>
    );
})

export default Resume;



