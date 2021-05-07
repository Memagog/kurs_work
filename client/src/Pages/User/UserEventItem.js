import React, {useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { observer } from "mobx-react-lite";
import dateFormat  from 'dateformat';
import { Link } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#f42d55",    
  }
}));

const UserEventItem  = observer (({event}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [time, setTime] = useState("");  
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(true)
  useEffect(() => {
    const time = event.time
    const d = dateFormat(time)    
    setTime(d)
  })
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
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
        title={event.title}
        subheader={time}
      />     
      <CardMedia
        className={classes.media}
        image={event.img}       
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="р" >
            {event.description}
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph  variant="h5" gutterBottom>
           {event.location}
          </Typography>
          <Typography paragraph>
           People Count: {event.people}
          </Typography>
          <Typography paragraph>
           Price:  {event.price}
          </Typography>
          <Typography paragraph>
           Professionals:  {event.profession}
          </Typography>
          <Typography paragraph>
           <Link href="https://www.instagram.com/">{event.social}</Link>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
})

export default UserEventItem;