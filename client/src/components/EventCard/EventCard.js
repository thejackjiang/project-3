import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

export default function EventCard(props) {
    console.log(props)
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top mt-4" src={props.event.image.url} />
            <Card.Body>
<<<<<<< HEAD
                <Card.Title>{props.event.name}</Card.Title>
                <Card.Text>
                    {props.event.name}
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
=======
                <Card.Title style={{ width: '18rem' }}>{props.event.name}</Card.Title>
                <Card.Subtitle>{props.event.venue}</Card.Subtitle>
                    <Card.Text>{props.event.name}
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                <Button variant="primary mr-2" >Ticket Info</Button>
                <Button variant="primary mr-2">Dates</Button>
                <Button variant="primary">Save this Artist</Button>

>>>>>>> sr-backend
            </Card.Body>
        </Card>
    )
}

