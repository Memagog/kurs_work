import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TypeBar from "../Types/TypeBar";
import Parameters from "../ParametrsBar/Parameters";
import EventsList from "./EventsList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  event: {
    marginTop: 100,
  }
}));

export default function Events() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1} className={classes.root}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={3}>
            <TypeBar></TypeBar>
          </Grid>
          <Grid  item xs={9}>
          <Parameters></Parameters>  
            <div className={classes.event}>
              <EventsList></EventsList>
            </div>       
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
