import React, {Component} from 'react'

/**
 * this class defines basic methods for all types of questions.
 */
class Answer extends Component {
  render () {
    return (
      <div className={this.props.gameStage}>
        <p><b>{this.props.data.name}:</b> {this.props.data.answer}</p>
      </div>
    )
  }
}

export default Answer
