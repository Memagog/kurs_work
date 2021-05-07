import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TypeBar from "../Types/TypeBar";
import Parameters from "../ParametrsBar/Parameters";
import EventsList from "./EventsList";
import SearchBar from './SearchBar';
import TimeComponent from './TimeComponet';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  event: {
    marginTop: 20,
  },
  search: {
   paddingTop: 100,
  }
}));

export default function Events() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1} className={classes.root}>
       
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={2} >
              <div style={{boxShadow: "4px 1px 10px 2px rgba(244, 66, 137, 0.2)"}}>
              <TypeBar></TypeBar>
            </div>
              
            </Grid>
            <Grid  container item xs={9}>
              <Grid  item xs={9}>
                <div className={classes.event}>
                  <SearchBar ></SearchBar>
                 
                </div>
              </Grid>
              {/* <TimeComponent></TimeComponent> */}
                <div className={classes.event}>
                  <EventsList></EventsList>
                </div>       
              </Grid>
            </Grid>
        </Grid>
    </div>
  );
}
