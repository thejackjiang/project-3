import React from "react";
import API from '../utils/API'
import EventCard from '../components/EventCard/EventCard';
import Wrapper from "../components/Wrapper";
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
            <div>
               
                <h1>IndieEvents</h1>
                {this.state.artists.data && this.state.artists.data.map(event => {
                    return <EventCard event={event}/>
                })}

            </div>
            </Wrapper>
        )
    }
}