import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link,useHistory } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { EVENTS_LIST, HOME_ROUTES, LOGIN_ROUTE, PROFILE } from '../utils/config-routs';
import { Button, Menu, MenuItem } from '@material-ui/core';
import {FiGift} from 'react-icons/fi';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkColor: {
    color: "inherit"
  }
}));

const Navbar = observer(() => {
  const classes = useStyles();
  const {user} = useContext(Context)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfile = () => {
    history.push(PROFILE);
  }
  const handleLogin = () => {
    history.push(LOGIN_ROUTE);
  }
  const handleLogout = () => {
      user.setIsAuth(false);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>      
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <FiGift/>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
                <Link to={EVENTS_LIST} className={classes.linkColor}>Events</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
                <Link to={HOME_ROUTES} className={classes.linkColor}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
                <Link to={PROFILE} className={classes.linkColor}>My Profile</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
                <Link to={EVENTS_LIST} className={classes.linkColor}>Find jobs</Link>
          </Typography>   
                   
           <div>
              <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"               
                        color="inherit"
                        onClick={handleClick}
                    >          
                  Menu
                </IconButton>            
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {
                user.isAuth ? <MenuItem onClick={handleClose}><Button onClick={handleLogout}>Logout</Button></MenuItem>:
                              <MenuItem onClick={handleClose}><Button onClick={handleLogin}>Login</Button></MenuItem>
                             
                } 
                <MenuItem onClick={handleClose}><Button onClick={handleProfile}>My Profile</Button></MenuItem>
                {/* <MenuItem onClick={handleClose}><Button onClick={handleLogin}>My account</Button></MenuItem>*/}
                
              </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default Navbar