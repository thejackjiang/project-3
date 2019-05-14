import React, { Component } from "react";
import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import SpanningTable from "../components/SpanningTable";
import Grid from '@material-ui/core/Grid';

import Alert from "../components/Alert";
import GlobalCard from "../components/GlobalCard";
import Container from "../components/Container";
import FavCard from "../components/FavCard";
import Wrapper from "../components/Wrapper";
// import FavoriteResult from "../components/FavoriteResult";
import FavoriteResult from "../components/FavoriteResult";
import RegContainer from "../components/RegContainer";


class DiscoverArtist extends Component {
  state = {
    indieArtists: []
  };

  // When the component mounts, load the next artist to be displayed
  componentDidMount() {
    this.loadNextIndieEvent();
  }

  loadNextIndieEvent = () => {
    API.getIndieArtistEvents()
      .then(res =>
        this.setState({
          indieArtists: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state)
    return (
      <div>
     
          <Wrapper>
        <h1>Events Happening in LA</h1>

        

<SpanningTable artists={this.state.indieArtists}/>
<Grid container wrap="wrap" spacing={12}>
<Grid item>
 <Modal />
</Grid>
 </Grid>

      </Wrapper>
      </div>
    )
  }
}
export default DiscoverArtist;
