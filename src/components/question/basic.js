import React, {Component} from 'react'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : props.data,
            gameStage : props.gameStage
        }
    }

    getOptimizedName() {
        return this.optimizeName(this.state.data.name + this.state.gameStage);
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

