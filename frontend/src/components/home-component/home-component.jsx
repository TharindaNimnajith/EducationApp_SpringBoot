import React, {Component} from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

class Home extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card border='primary'
                style={{
                  width: '18rem'
                }}
          >
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Text>
                <a href={'/userList'}>Manage Users</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='danger'
                style={{
                  width: '18rem'
                }}
          >
            <Card.Body>
              <Card.Title>Lectures</Card.Title>
              <Card.Text>
                <a href={'/lectureList'}>Manage Lectures</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    )
  }
}

export default Home
