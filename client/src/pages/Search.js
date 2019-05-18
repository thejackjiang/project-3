
import React from "react";
import API from '../utils/API'
import EventCard from '../components/EventCard/EventCard';
import Wrapper from "../components/Wrapper";
import List from "../components/List";
import { Col, Row, Container } from "../components/Grid";
export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        };
    }

    componentDidMount() {
        API.getIndieArtistEvents()
            .then((results) => {
                this.setState({ artists: results })
            })
    }

    render() {
        console.log(this.state)
        return (
         
               
         
                <Wrapper>
                     
              <Row>
          <Col size="md-12">
           
              <h1 className="text-center">
                <strong>Explore IndieEvents</strong>
              </h1>
              <h2 className="text-center">Search and save upcoming indie events</h2>
     </Col>
              </Row>
              <Container>
              <Row>
           
              <Col size="md-6">
                {this.state.artists.data && this.state.artists.data.map(event => {
                    return <EventCard event={event}/>
                })}
 
       
   </Col>
   </Row>
 
   </Container>          
            </Wrapper>
  
        )
    }
}
