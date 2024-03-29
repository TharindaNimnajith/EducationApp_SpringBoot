import React, {Component} from 'react'
import axios from 'axios'
import {proxy} from '../../conf'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      contactNo: '',
      nic: '',
      email: '',
      password: ''
    }
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  onChangePosition = event => {
    this.setState({
      position: event.target.value
    })
  }

  onChangeContactNo = event => {
    this.setState({
      contactNo: event.target.value
    })
  }

  onChangeNIC = event => {
    this.setState({
      nic: event.target.value
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: this.state.position,
      contactNo: this.state.contactNo,
      nic: this.state.nic,
      email: this.state.email,
      password: this.state.password
    }
    axios.post(`${proxy}users`, user)
      .then(() => {
        window.location = '/userList'
      }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <Button variant={'primary'}
                href={'/'}
        >
          Home
        </Button>
        <Button variant={'primary'}
                href={'/userList'}
        >
          User List
        </Button>
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Enter First Name'
                            type='text'
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Enter Last Name'
                            type='text'
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridPosition'>
              <Form.Label>Position</Form.Label>
              <Form.Control placeholder='Enter Position'
                            type='text'
                            value={this.state.position}
                            onChange={this.onChangePosition}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridContactNo'>
              <Form.Label>Contact No</Form.Label>
              <Form.Control placeholder='Enter Contact No'
                            type='text'
                            value={this.state.contactNo}
                            onChange={this.onChangeContactNo}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridNIC'>
              <Form.Label>NIC</Form.Label>
              <Form.Control placeholder='Enter NIC'
                            type='text'
                            value={this.state.nic}
                            onChange={this.onChangeNIC}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email'
                            type='email'
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder='Enter Password'
                            type='password'
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary'
                  type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddUser
