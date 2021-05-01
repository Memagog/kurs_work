import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Image} from 'react-bootstrap';
import { Typography } from '@material-ui/core';

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
  headDescrip: {
      marginTop: 80,
  }

}));

export default function EventInfo() {
  const classes = useStyles();
  const event =   {id: 1, title: "EventsTitle", description: "Event DESCRIPTIONgdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfgfgfdgdfsgfdsgfdsgdfgsdfgfdgd", author: "author.id", img: "https://w7.pngwing.com/pngs/415/850/png-transparent-chocolate-and-strawberry-cake-illustration-birthday-cake-chocolate-cake-torte-birthday-cake-cream-baked-goods-food.png"};
  const description = [
      {id: 1 , title: "Количество Людей", description: 100 },
      {id: 2 , title: "Оплата", description: 2500 },
      {id: 3 , title: "Должность", description: "Photograph" },
      {id: 4 , title: "Время", description: "20 до 23" },
      {id: 5 , title: "Опыт работы", description: "Не меньше 5 мероприятий"}
  ]
  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} >         
  
            <Grid  container  spacing={3} direction="row"  justify="center" alignItems="flex-start" className={classes.content}>                 
                   <Grid item xs={4}>
                        <h2>{event.title}</h2>
                        <Image className={classes.img} src={event.img}/>                        
                    </Grid >
                    <Grid item xs={4} className={classes.headDescrip}>
                            <Typography variant="h5" gutterBottom>
                                Description
                            </Typography>
                            <Typography variant="body1" gutterBottom >
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                               
            </Grid> 
            
            <Grid className={classes.content}>
            <Typography variant="h5" gutterBottom>Information</Typography>       
                {description.map((info, index)=>
                    <Grid key={info.id} className={classes.descrip} style={{background: index%2===1?'#f892b3':'#f50057'}}>
                        {info.title}:{info.description} 
                    </Grid>
                )}
            </Grid>             
        </Grid>        
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}