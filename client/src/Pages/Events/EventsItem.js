import { observer } from 'mobx-react-lite';
import React,{useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import box from '../../resources/images/box.jpg'
import { useHistory } from 'react-router';
import {EVENTS_LIST } from '../../utils/config-routs';
const useStyles = makeStyles({
    root: {        
      maxWidth: 300      
    },
    media: {
      height: 160,     
    },
  });  
const EventsItem = observer(({event}) => {
    
    const classes = useStyles();
    const history = useHistory();
    // const v = history.push(EVENTSINFO+'/'+ event.id);
    return (
        <Card className={classes.root} onClick={()=>history.push(EVENTS_LIST+'/'+ event.id)}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={box}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {event.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {event.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
})

export default EventsItem;



