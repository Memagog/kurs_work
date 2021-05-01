
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import EventsItem from './EventsItem';
import {Row} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
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

const EventsList = observer(() => {
    const {events} = useContext(Context);
    const classes = useStyles();
    return (
        <Row className = {classes.root}>
            {events._events.map((event)=> 
                <div>
                  <EventsItem key={event.id} event={event}></EventsItem>
                </div>
            )}
            
        </Row>
    );
})

export default EventsList;
