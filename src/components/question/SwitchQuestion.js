import SelectQuestion from './SelectQuestion'
import React, {Component} from 'react'

class SwitchQuestion extends SelectQuestion {

    render() {
        this.state.data.params = {};
        this.state.data.params.options = [
            "Yes",
            "No"
        ];
        return super.render();
    }
}

export default SwitchQuestion