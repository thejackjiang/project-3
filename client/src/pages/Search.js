import React from "react";
import API from '../utils/API'
import EventCard from '../components/EventCard/EventCard';
import Wrapper from "../components/Wrapper";
import axios from "axios";
export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        };
        this.handleSave = this.handleSave.bind(this) 
    }

    componentDidMount() {
        API.getIndieArtistEvents()
            .then((results) => {
                this.setState({ artists: results })
            })
    }

    handleSave(event) {
        console.log(event)
     axios.post("/api/events/save", event).then(results=>{console.log(results)
     })   
    }

    render() {
        console.log(this.state)
        return (
            <Wrapper>
            <div>
               
                <h1>IndieEvents</h1>
                {this.state.artists.data && this.state.artists.data.map((event, i) => {
                    return <EventCard key={i} event={event} handleSave={this.handleSave}/>
                })}

            </div>
            </Wrapper>
        )
    }
}