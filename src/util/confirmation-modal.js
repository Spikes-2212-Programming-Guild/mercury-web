import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'

class ConfirmationModal extends Component {
  render() {
    console.log('Filled Form:')
    console.log(this.props.answers)
    if (this.props.answers) {
      const parsedAnswers = {}

      Object.keys(this.props.questions).forEach((res) => {
        console.log('Questions: \n' + JSON.stringify(this.props.questions[res]))
      })

      console.log('Parsed answers: \n' + JSON.stringify(parsedAnswers))
      console.log('Modal Opened')
      return (<div>
        <Modal show={this.props.isOpen} onHide={this.props.close} animation={false}>
          <Modal.Header>
            <Modal.Title>Do you want to submit this form?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Bla</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.submit}>Submit</Button>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
    }

    console.log('Modal can\'t open')
    return null
  }
}

export default ConfirmationModal
