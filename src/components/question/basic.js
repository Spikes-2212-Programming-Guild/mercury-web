import React, {Component} from 'react'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : props.data,
            gameStage : props.gameStage
        }
    }

    optimizeName(name) {
        return name.split(' ').join('').toLowerCase();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Question;

