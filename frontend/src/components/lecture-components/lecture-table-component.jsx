import React, {Component} from 'react'
import axios from 'axios'
import {proxy} from '../../conf'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class LectureList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lectureId: '',
      lessonName: '',
      lessonDescription: '',
      subjectCode: '',
      lecturerId: '',
      locationCode: '',
      date: null,
      startTime: null,
      endTime: null,
      lectures: []
    }
  }

  componentDidMount() {
    axios.get(`${proxy}lectures`)
      .then(res => {
        this.setState({
          lectures: res.data
        })
      }).catch(error => {
      console.log(error)
    })
  }

  deleteLecture = lectureId => {
    axios.delete(`${proxy}lectures/${lectureId}`)
      .then(res => {
        console.log(res.data)
      }).catch(error => {
      console.log(error)
    })
    this.setState({
      lectures: this.state.lectures.filter(lecture => lecture.lectureId !== lectureId)
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
                href={'/addLecture'}
        >
          Add Lecture
        </Button>
        <Table responsive striped bordered hover variant='dark'>
          <thead>
          <tr>
            <th>Lecture ID</th>
            <th>Lesson Name</th>
            <th>Lesson Description</th>
            <th>Subject Code</th>
            <th>Lecturer ID</th>
            <th>Location Code</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th/>
            <th/>
          </tr>
          </thead>
          <tbody>
          {
            this.state.lectures.map(lecture => (
              <tr key={lecture.lectureId}>
                <td>{lecture.lectureId}</td>
                <td>{lecture.lessonName}</td>
                <td>{lecture.lessonDescription}</td>
                <td>{lecture.subjectCode}</td>
                <td>{lecture.lecturerId}</td>
                <td>{lecture.locationCode}</td>
                <td>{lecture.date}</td>
                <td>{lecture.startTime}</td>
                <td>{lecture.endTime}</td>
                <td>
                  <Button variant={'primary'}
                          href={'/editLecture/' + lecture.lectureId}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant={'danger'}
                          onClick={() => this.deleteLecture(lecture.lectureId)}
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

export default LectureList
