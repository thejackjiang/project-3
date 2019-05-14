
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
    heoght: '100%'
  },
  table: {
    minWidth: 1700,
    padding:50
  },
});



function Event () {
  return 
}

function createRow(id, Artist, Date, Location, Time, Ticket) {
 
  return { id, Artist, Date, Location, Time, Ticket };
}



const rows = [
  ['Arctic Monkeys', '08/19', 'Hollywood Bowl', '9:00PM', 'link2tickets'],
  ['Death Cab for Cutie', '08/11', 'Hollywood Bowl', '7:00PM', 'https://my.hollywoodbowl.com/syos/performance/3889?_ga=2.18352121.1982955710.1557725650-364484445.1557725650'],
  ['Adam Melchor', '06/21', 'The Morrocan', '9:30PM', 'https://www.themoroccan.com/event/1833186-adam-melchor-los-angeles/'],
  ['The Strokes', '05/13','The Western', '7:00 PM','https://concerts1.livenation.com/event/0900567C1'],
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
              <TableCell>{row.Artist}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Location}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
              <TableCell align="right">{row.Ticket}</TableCell>
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