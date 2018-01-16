import React from 'react'
import Question from './basic'

class TextQuestion extends Question {

    render() {
        return (
            <div className={this.state.gameStage}>
                <b>{this.state.data.name}</b> <br/>
                <input name={this.optimizeName(this.state.data.name)} />
            </div>
        )
    }

}

export default TextQuestion