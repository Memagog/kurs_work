import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState,useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { HOME_ROUTES } from '../utils/config-routs';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = observer(() => {
  const classes = useStyles();  
  const {user} = useContext(Context)
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");  
  const [message, setMessage] = useState("")
  const  log = async () => {   
    try {
      const data = await login(email,password);    
      user.setUser(data);
      user.setIsAuth(true);
      history.push(HOME_ROUTES)
    } catch (error) {
      setMessage(error.response.data.message)
    }
  
  }

  const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email)
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
      setPassword(password)
  }
  const handleLogin = (e) => { 
    e.preventDefault();    
    try {
      log();
         
    } catch (error) {     
      console.log(`login Component error + ${error}`);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />  
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >         
            Sign In
          </Button>
       
           {message && (
            <div className="form-group">
              <div className={"alert alert-danger"} role="alert">
                {message}
              </div>
            </div>
          )}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/registration" variant="body2"> Haven't you an account? Sign UP</Link>             
            </Grid>
          </Grid>
        </form>
      </div>      
    </Container>
  );
})

export default Login