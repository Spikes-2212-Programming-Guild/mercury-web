import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'

class ConfirmationModal extends Component {
  render () {
    console.log('Filled Form:')
    console.log(this.props.answers)
    if (this.props.answers()) {
      const parsedAnswers = []

      Object.keys(this.props.answers()).forEach((key) => {
        console.log('Questions: \n' + (this.props.answers()[key]))
        parsedAnswers.push(<div>
          <p>{`${key} -> ${this.props.answers()[key]}`}</p> <br/>
        </div>)
      })

      console.log('Parsed answers: \n' + (parsedAnswers))
      console.log('Modal Opened')
      return (<div>
        <Modal show={this.props.isOpen} onHide={this.props.close} animation={false}>
          <Modal.Header>
            <Modal.Title>Do you want to submit this form?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {parsedAnswers}
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
