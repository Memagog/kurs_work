import React,{useContext}from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../..';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    color: 'black',
    margin: theme.spacing(0.5),
  },
}));

const Parameters = observer(()=> {
     const {param} = useContext(Context);
     const classes = useStyles();
     const [chipData, setChipData] = React.useState(param._param);
    
     return (
      <Paper component="ul" className={classes.root}>
        {chipData.map((data) => {     

          return (
            <li key={data.id}>
              <Chip                
                label={data.price}
               
                className={classes.chip}
              />
            </li>
          );

        })}
      </Paper>
    );
     
})
export default Parameters






