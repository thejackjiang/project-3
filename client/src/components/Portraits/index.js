import React, { Component } from "react";
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import { Input, InputGroup, InputGroupAddon } from 'reactstrap'
import API from '../../utils/API'
import { Link } from 'react-router-dom';
export default class Portraits extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: []
    }
  }

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
    console.log(this.state.artists)
    if (this.state.artists.length) {
      pic1 = this.state.artists[0].image.url
      pic2 = this.state.artists[1].image.url
      pic3 = this.state.artists[2].image.url
    }
    return (
      <Container>

    <Row className="search">
                    <Col sm="12">
                        <InputGroup>
                            <Input placeholder="Find an artist"/>
                            <InputGroupAddon addonType="prepend">
                                <Button color="success" 
                                        className="search-button">
                                    Search Artist
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
              </Col>
      </Row>
        <Row>
          <Col>
            <Image style={{ width: 300, height: '300' }} src={pic1} rounded />
            <Link to={{
              pathname: "/singleEvent",
              state: { artist: this.state.artists[0] }
            }}>
            <Button variant="info">info</Button>
            </Link>
          </Col>
          <Col>
            <Image style={{ width: 300, height: '300' }} src={pic2} rounded />
            <Link to={{
              pathname: "/singleEvent",
              state: { artist: this.state.artists[1] }
            }}><Button variant="info">info</Button></Link>
          </Col>
          <Col>
            <Image style={{ width: 300, height: '300' }} src={pic3} rounded />
            <Link to={{
              pathname: "/singleEvent",
              state: { artist: this.state.artists[2] }
            }}><Button variant="info">info</Button></Link>
          </Col>
        </Row>
  

      </Container>
    )
  }
}

