import React, { Component } from "react";
import { Container, Col, Row, Image, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import "./style.css";


export default class Portraits extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      query: "",
      search: []
    }
    this.inputSearch = this.inputSearch.bind(this);

  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      query: event.target.value
    })
  }

  inputSearch = (event) => {
    event.preventDefault();

    API.searchArtist(this.state.query)
      .then((response) => {
        this.setState({ search: response.data })
      })
  }

  // on change function 
  // everytime someone clicks, it should update the state

  componentDidMount() {
    API.getIndieArtistEvents()
      .then((results) => {
        this.setState({ artists: results.data })
      })
  }

  render() {
    let pic1 = ''
    let pic2 = ''
    let pic3 = ''
    if (this.state.artists.length) {
      pic1 = this.state.artists[1].image.url
      pic2 = this.state.artists[2].image.url
      pic3 = this.state.artists[4].image.url
    }
    const { query } = this.state
    return (
      <div>
        <Container>
          <Row className="search">
            <Col sm="12">
            <div>
              <form onSubmit={e => this.inputSearch(e)}>
                <FormGroup controlId="formBasicText">
                  <FormControl size="lg" type="text" placeholder="Large text"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Enter Artist Name Here"
                  />
                  <Button size="lg" variant="info" type="submit">Search</Button>
                </FormGroup>
              </form>
              </div>
              {this.state.search.length &&
                <Col>
                  <Image style={{ width: 300, height: '300' }} src={this.state.search[0].image.url} rounded />
                </Col>
              }
            </Col>

          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
            <Link to={{
                pathname: "/singleEvent",
                state: { artist: this.state.artists[0] }
              }}>
              <p className="justify-content-md-center" size="lg" block >WANT ARTIST 1 NAME TO GO HERE</p>
              </Link>
              <Image style={{ width: 300, height: '300' }} src={pic1} rounded />
              <Link to={{
                pathname: "/singleEvent",
                state: { artist: this.state.artists[0] }
              }}>
                <Button variant="outline-primary" size="lg" block >More Info</Button>
              </Link>
            </Col>


            <Col md="auto">
            <p className="justify-content-md-center" size="lg" block >WANT ARTIST 1 NAME TO GO HERE</p>
              <Image style={{ width: 300, height: '300' }} src={pic2} rounded />
              <Link to={{
                pathname: "/singleEvent",
                state: { artist: this.state.artists[1] }
              }}><Button variant="outline-primary" size="lg" block >More Info</Button>
              </Link>
            </Col>
            <Col md="auto">
            <p className="justify-content-md-center" size="lg" block >WANT ARTIST 1 NAME TO GO HERE</p>
              <Image style={{ width: 300, height: '300' }} src={pic3} rounded />
              <Link to={{
                pathname: "/singleEvent",
                state: { artist: this.state.artists[2] }
              }}><Button variant="outline-primary" size="lg" block >More Info</Button></Link>
            </Col>
          </Row>
        </Container >
      </div>
    )
  }
}

