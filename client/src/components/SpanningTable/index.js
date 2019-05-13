
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const EventTable = 0.07;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 7,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    padding:10
  },
});



function Event () {
  return 
}

function createRow(id, Artist, Date, Location, Time, Ticket) {
 
  return { id, Artist, Date, Location, Time, Ticket };
}



const rows = [
  ['Artist1', 100, 1.15],
  ['Artist2', 10, 45.99],
  ['Artist3', 2, 17.99],
].map((row, id) => createRow(id, ...row));




function SpanningTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Artist</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Ticket</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </Paper>
  );
}

SpanningTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpanningTable);