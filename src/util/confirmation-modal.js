import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import AnswerSet from '../components/answer/answer-set'

class ConfirmationModal extends Component {
  render () {
    const getOptimizedName = function (name, stage) {
      return (name + stage).split(' ').join('').toLowerCase()
    }

    if (this.props.answers()) {
      const parsedAnswers = {
        'metadata': [
          {
            question: 'Team number',
            answer: this.props.answers()['teamnumber'],
            gameStage: 'metadata'
          },
          {
            question: 'Match number',
            answer: this.props.answers()['matchnumber'],
            gameStage: 'metadata'
          }
        ]
      }

      Object.keys(this.props.questions).forEach((stage) => {
        const stageQuestions = this.props.questions[stage]
        const gameStage = []
        stageQuestions.forEach((question) => {
          const query = {}
          query.question = question.name
          query.answer = this.props.answers()[getOptimizedName(question.name, stage)]
          query.gameStage = stage
          gameStage.push(query)
        })
        parsedAnswers[stage] = gameStage
      })

      console.log('Parsed answers: \n' + JSON.stringify(parsedAnswers))

      const answerSets = []

      Object.keys(parsedAnswers).forEach((stage) => {
        answerSets.push(<AnswerSet questions={parsedAnswers[stage]} gameStage={stage}/>)
      })

      return (<div className="Modal">
        <Modal show={this.props.isOpen} onHide={this.props.close} animation={false}>
          <Modal.Header>
            <Modal.Title>Do you want to submit this form?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {answerSets}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.submit}>Submit</Button>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
    }

    return null
  }
}

export default ConfirmationModal
