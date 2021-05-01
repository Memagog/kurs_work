import React,{useContext, useState}from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 200,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TypeBar = observer(() => {    
    const {types} = useContext(Context);
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

        const handleToggle = (value) => () => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];
            types.setSelectedType(value);
            if (currentIndex === -1) {
            newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
                types.setSelectedType({});
            }
            setChecked(newChecked);
        }; 
    return (
        <div>            
            <List className={classes.root}>
                {types._types.map((type) => {
                    const labelId = `checkbox-list-label-${type.id}`;

                    return (
                    <ListItem 
                        key={type.id}                       
                        role={undefined} dense button
                        onClick={handleToggle(type)}
                     >
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={type.id === types._selectedType.id}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={type.skills} />
                      
                    </ListItem>
                    );
                })}
            </List>
        </div>    
        
    );
})

export default TypeBar
