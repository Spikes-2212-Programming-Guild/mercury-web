import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'

class ConfirmationModal extends Component {
  render() {
    console.log('Filled Form:')
    console.log(this.props.form)
    if (this.props.form) {
      const answers = {}
      const elements = Array.from(this.props.form.elements)
      elements.forEach(function (element) {
        if (element.type === 'radio') {
          if (element.checked) {
            answers[element.name] = element.value
          }
        } else if (element.type !== 'label' && element.type !== 'button' && element.type !== 'submit') {
          answers[element.name] = element.value
        }
      })
      console.log('Answers:')
      console.log(answers)

      const parsedAnswers = {
        'metadata': [
          {
            question: 'Team number',
            answer: answers['teamnumber'],
            gameStage: 'metadata'
          },
          {
            question: 'Match number',
            answer: answers['matchnumber'],
            gameStage: 'metadata'
          }
        ]
      }

      Object.keys(this.props.questions).forEach((stage) => {
        const stageQuestions = this.props.questions[stage]
        console.log('Questions in ' + stage + ': \n' + JSON.stringify(stageQuestions))
        const gameStage = []
        stageQuestions.forEach((question) => {
          console.log(question)
          const query = {}
          query.question = question.name
          query.answer = answers[question.name.split(' ').join('').toLowerCase()]
          query.gameStage = stage
          gameStage.push(query)
          console.log('Parsed data for current question:')
          console.log(query)
        })
        parsedAnswers[stage] = gameStage
      })

      // console.log('Parsed answers: \n' + JSON.stringify(parsedAnswers))
      console.log('Modal Opened')

      const answerSets = []

      return (<div className="Modal">
        <Modal show={this.props.isOpen} onHide={this.props.close} animation={false}>
          <Modal.Header>
            <Modal.Title>Do you want to submit this form?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Answers</h1>
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
