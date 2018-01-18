import Question from './basic'
import React, {Component} from 'react'



class SelectionOption extends Component {
    render() {
        return (
            <div>
                <input type="radio" name={this.props.questionName}
                       value={this.props.name}/> {this.props.name}
            </div>
        )
    }
}

class SelectQuestion extends Question {

    render() {
        const inputs = [];
        const optimizedName = this.getOptimizedName();
        this.state.data.params.options.forEach(function(option, index) {
            inputs.push(<SelectionOption name={option}
                                         questionName={optimizedName} key={index}/>);
        });

        return (
            <div className={this.state.gameStage}>
                <b>{this.state.data.name}</b>
                {inputs}
            </div>
        )

    }
}

export default SelectQuestion;