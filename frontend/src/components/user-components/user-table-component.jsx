import React, {Component} from 'react'
import axios from 'axios'
import {proxy} from '../../conf'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      firstName: '',
      lastName: '',
      position: '',
      contactNo: '',
      nic: '',
      email: '',
      password: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get(`${proxy}users`)
      .then(res => {
        this.setState({
          users: res.data
        })
      }).catch(error => {
      console.log(error)
    })
  }

  deleteUser = userId => {
    axios.delete(`${proxy}users/${userId}`)
      .then(res => {
        console.log(res.data)
      }).catch(error => {
      console.log(error)
    })
    this.setState({
      users: this.state.users.filter(user => user.userId !== userId)
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
                href={'/addUser'}
        >
          Add User
        </Button>
        <Table responsive striped bordered hover variant='dark'>
          <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Contact No</th>
            <th>NIC</th>
            <th>Email</th>
            <th>Password</th>
            <th/>
            <th/>
          </tr>
          </thead>
          <tbody>
          {
            this.state.users.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.position}</td>
                <td>{user.contactNo}</td>
                <td>{user.nic}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <Button variant={'primary'}
                          href={'/editUser/' + user.userId}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant={'danger'}
                          onClick={() => this.deleteUser(user.userId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UserList
