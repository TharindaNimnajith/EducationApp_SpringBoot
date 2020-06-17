import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EditUser from './components/user-components/user-form-edit-component'
import AddUser from './components/user-components/user-form-component'
import UserList from './components/user-components/user-table-component'
import EditLecture from './components/lecture-components/lecture-form-edit-component'
import AddLecture from './components/lecture-components/lecture-form-component'
import LectureList from './components/lecture-components/lecture-table-component'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/addUser' exact component={AddUser}/>
          <Route path='/editUser/:id' exact component={EditUser}/>
          <Route path='/userList' exact component={UserList}/>
          <Route path='/addLecture' exact component={AddLecture}/>
          <Route path='/editLecture/:id' exact component={EditLecture}/>
          <Route path='/lectureList' exact component={LectureList}/>
        </Router>
      </div>
    )
  }
}

export default App
