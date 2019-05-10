import React from "react";
import "./style.css";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import "../../Styles/app.css";
function RegContainer(props) {
  return (
    <Paper className="paper">
    <Grid container wrap="nowrap" spacing={16}>
    <Grid item>
            <div className="regContainer" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
              {props.children}
           
            </div>
            </Grid>
        </Grid>
            </Paper>
          );
        }
    
    export default RegContainer;