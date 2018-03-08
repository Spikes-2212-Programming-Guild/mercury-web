import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class GeneralInfoForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toRender: <div>
        <button className="btn btn-secondary" onClick={() => {
          this.setState({
            toRender: <Redirect to="/info/all" push={true}/>
          })
        }}>General Info</button>
      </div>
    }
  }
  render () {
    return this.state.toRender
  }
}
export default GeneralInfoForm
