import React, {Component} from 'react'
import axios from 'axios'
import {proxy} from '../../conf'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class EditLecture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      nic: ''
    }
  }

  componentDidMount() {
    axios.get(`${proxy}user/${this.props.match.params.id}`).then(res =>
      this.setState({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        phoneNo: res.data.phoneNo,
        email: res.data.email,
        nic: res.data.nic
      })).catch(error =>
      console.log(error)
    );
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

  onChangePhoneNo = event => {
    this.setState({
      phoneNo: event.target.value
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  onChangeNIC = event => {
    this.setState({
      nic: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      nic: this.state.nic
    }
    axios.put(`${proxy}user/${this.props.match.params.id}`, user).then(res => {
      window.location = '/userList'
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Enter First Name' type='text' value={this.state.firstName}
                            onChange={this.onChangeFirstName} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Enter Last Name' type='text' value={this.state.lastName}
                            onChange={this.onChangeLastName} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridPhoneNo'>
              <Form.Label>Phone No</Form.Label>
              <Form.Control placeholder='Enter Phone No' type='text' value={this.state.phoneNo}
                            onChange={this.onChangePhoneNo} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email' type='email' value={this.state.email}
                            onChange={this.onChangeEmail} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridNIC'>
              <Form.Label>NIC</Form.Label>
              <Form.Control placeholder='Enter NIC' type='text' value={this.state.nic}
                            onChange={this.onChangeNIC} required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary' type='submit'>
            Edit
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditLecture
