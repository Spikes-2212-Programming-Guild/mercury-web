import React, { Component } from 'react';
import QuestionSet from './QuestionSet';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: null
        };

        axios.get("/scoutingForm/getCurrentForm").then(res => {
            alert(JSON.stringify(res.data));
            this.setState({form: res.data});
            this.forceUpdate();
        });

    }

    render() {

        if (this.state.form) {
            const questionSets = [];

            Object.keys(this.state.form).forEach((res) => {
                questionSets.push(<QuestionSet questions={this.state.form[res]} gameStage={res}/>);
            });

            return (<div>{questionSets}</div>)
        }

        return (<div></div>);
    }
}

export default App;
