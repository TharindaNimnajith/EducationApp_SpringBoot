import React, {Component} from 'react'
import axios from 'axios'
import {proxy} from '../../conf'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddLecture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lessonName: '',
      lessonDescription: '',
      subjectCode: '',
      lecturerId: '',
      locationCode: '',
      date: null,
      startTime: null,
      endTime: null
    }
  }

  onChangeLessonName = event => {
    this.setState({
      lessonName: event.target.value
    })
  }

  onChangeLessonDescription = event => {
    this.setState({
      lessonDescription: event.target.value
    })
  }

  onChangeSubjectCode = event => {
    this.setState({
      subjectCode: event.target.value
    })
  }

  onChangeLecturerId = event => {
    this.setState({
      lecturerId: event.target.value
    })
  }

  onChangeLocationCode = event => {
    this.setState({
      locationCode: event.target.value
    })
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value
    })
  }

  onChangeStartTime = event => {
    this.setState({
      startTime: event.target.value
    })
  }

  onChangeEndTime = event => {
    this.setState({
      endTime: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const lecture = {
      lessonName: this.state.lessonName,
      lessonDescription: this.state.lessonDescription,
      subjectCode: this.state.subjectCode,
      lecturerId: this.state.lecturerId,
      locationCode: this.state.locationCode,
      date: this.state.date,
      startTime: this.state.startTime,
      endTime: this.state.endTime
    }
    axios.post(`${proxy}lectures`, lecture)
      .then(() => {
        window.location = '/lectureList'
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
                href={'/lectureList'}
        >
          Lecture List
        </Button>
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLessonName'>
              <Form.Label>Lesson Name</Form.Label>
              <Form.Control placeholder='Enter Lesson Name'
                            type='text'
                            value={this.state.lessonName}
                            onChange={this.onChangeLessonName}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLessonDescription'>
              <Form.Label>Lesson Description</Form.Label>
              <Form.Control placeholder='Enter Lesson Description'
                            type='text'
                            value={this.state.lessonDescription}
                            onChange={this.onChangeLessonDescription}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridSubjectCode'>
              <Form.Label>Subject Code</Form.Label>
              <Form.Control placeholder='Enter Subject Code'
                            type='text'
                            value={this.state.subjectCode}
                            onChange={this.onChangeSubjectCode}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLecturerId'>
              <Form.Label>Lecturer ID</Form.Label>
              <Form.Control placeholder='Enter Lecturer ID'
                            type='text'
                            value={this.state.lecturerId}
                            onChange={this.onChangeLecturerId}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLocationCode'>
              <Form.Label>Location Code</Form.Label>
              <Form.Control placeholder='Enter Location Code'
                            type='text'
                            value={this.state.locationCode}
                            onChange={this.onChangeLocationCode}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridDate'>
              <Form.Label>Date</Form.Label>
              <Form.Control placeholder='Enter Date'
                            type='date'
                            value={this.state.date}
                            onChange={this.onChangeDate}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridStartTime'>
              <Form.Label>Start Time</Form.Label>
              <Form.Control placeholder='Enter Start Time'
                            type='time'
                            value={this.state.startTime}
                            onChange={this.onChangeStartTime}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridEndTime'>
              <Form.Label>End Time</Form.Label>
              <Form.Control placeholder='Enter End Time'
                            type='time'
                            value={this.state.endTime}
                            onChange={this.onChangeEndTime}
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

export default AddLecture
