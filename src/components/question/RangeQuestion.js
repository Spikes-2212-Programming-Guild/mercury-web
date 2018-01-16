import React from 'react'
import Question from './Question'

class RangeQuestion extends Question{
    render() {
        return (
            <div className={this.state.gameStage}>
                <b>{this.state.data.name}</b> <br/>
                {this.state.data.params.min}
                <input  name={this.optimizeName(this.state.data.name)}

                        type="range"
                        min={this.state.data.params.min}
                        max={this.state.data.params.max} />
                {this.state.data.params.max}
        </div>
        )
    }
}

export default RangeQuestion;