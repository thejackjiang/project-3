import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function GlobalCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Indie Events in LA
          </Typography>
          <Typography component="p">
           Swipe through upcoming Indie Events in LA. Sign up to Buy tickets to events and view your favorites.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Sign in
        </Button>
        <Button size="small" color="primary">
          Discover Events
        </Button>
      </CardActions>
    </Card>
  );
}

GlobalCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlobalCard);