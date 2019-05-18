import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

export default function EventCard(props) {
    // console.log(props)
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top mt-4" src={props.event.image.url} />
            <Card.Body>
                <Card.Title style={{ width: '18rem' }}>{props.event.name}</Card.Title>
                <Card.Subtitle>{props.event.venue}</Card.Subtitle>
                    <Card.Text>{props.event.name}
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                <Button variant="primary mr-2"><a href="{props.event.url}" target="_blank">Ticket Info</a></Button>
                <Button variant="primary mr-2">Dates</Button>
                <Button variant="primary" onClick={() => props.handleSave(props.event)}>Save this Artist</Button>

            </Card.Body>
        </Card>
    )
}

