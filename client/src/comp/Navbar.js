import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { EVENTS_LIST, LOGIN_ROUTE, PROFILE } from '../utils/config-routs';
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

  return (
    <div className={classes.root}>
      
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
                <Link to={EVENTS_LIST} className={classes.linkColor}>Events</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
                <Link to={PROFILE} className={classes.linkColor}>MyProfile</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
                <Link to="/login" className={classes.linkColor}>DDDD </Link>
          </Typography>
          {user.isAuth ?
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"               
                color="inherit"
              >
                
                <AccountCircle onClick={()=>user.setIsAuth(false)}/>
              </IconButton>
              <Link to={PROFILE} className={classes.linkColor}>My Profile</Link>
            </div>
            :           
                <div>                       
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"               
                        color="inherit"
                    >
                    
                    <VpnKeyIcon onClick={()=>user.setIsAuth(true)}/>
                    </IconButton>
                    <Link to={LOGIN_ROUTE} className={classes.linkColor}>Register</Link>
                </div>
            
          }
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default Navbar