import React, {Component} from 'react'
import SwitchQuestion from './question/SwitchQuestion'
import SelectQuestion from './question/SelectQuestion'
import RangeQuestion from './question/RangeQuestion'
import NumericQuestion from './question/NumericQuestion'
import TextQuestion from './question/TextQuestion'

class QuestionSet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: props.questions,
            gameStage : props.gameStage
        };

        this.questionConstructors = {};
        this.questionConstructors['text'] =
            (data, gameStage) => {return <TextQuestion data={data} gameStage={gameStage}/>};
        this.questionConstructors['range'] =
            (data, gameStage) => {return <RangeQuestion data={data} gameStage={gameStage}/>};
        this.questionConstructors['numeric'] =
            (data, gameStage) => {return <NumericQuestion data={data} gameStage={gameStage}/>};
        this.questionConstructors['select'] =
            (data, gameStage) => {return <SelectQuestion data={data} gameStage={gameStage}/>};
        this.questionConstructors['switch'] =
            (data, gameStage) => {return <SwitchQuestion data={data} gameStage={gameStage}/>};
    }

    render() {

        const renderedQuestions = [];
        const gameStage = this.state.gameStage;
        this.state.questions.forEach((question) => {
            renderedQuestions.push(this.questionConstructors[question.type](question, gameStage));
        });

        return (
            <div>
                <h1>{this.state.gameStage}</h1>
                {renderedQuestions}
            </div>
        )

    }
}

export default QuestionSet;