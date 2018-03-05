import React, {Component} from 'react'
import MainMenu from './main-menu'
import {pickScheme, colorSchemes, getColorScheme} from '../components/charts/chart-utils'
import scoutingFormManager from '../util/scouting-form-manager'

class SettingsMenu extends Component {
  constructor (props) {
    super(props)
    let currentScheme = getColorScheme(localStorage.schemeNum)
    const options = []
    let count = 0
    Object.keys(colorSchemes).forEach((scheme) => {
      options.push(<option value={count}>{colorSchemes[scheme].name}</option>)
      count++
    })

    const colorBlocks = () => {
      const blocks = []
      currentScheme.colors.forEach((c) => {
        blocks.push(<b style={{
          color: c
        }}>█</b>)
      })

      return <div>Current theme ({JSON.stringify(currentScheme.name)}): {blocks}</div>
    }

    const updateHTML = () => {
      this.toRender = <div><h1>{'Options'}</h1>
        <MainMenu view="settings-menu"/>
        <form ref={(ci) => this.setState({formRef: ci})} onSubmit={(event) => {
          event.preventDefault()
          const form = this.state.formRef
          const elements = Array.from(form.elements)
          elements.forEach((element) => {
            if (element.name === 'chooseColors') {
              currentScheme = pickScheme(element.value)
              updateHTML()
              this.forceUpdate()
            }
          })
        }}>
          <div className="btn btn-group">
            <select name='chooseColors' class='btn btn-info'>
              {options}
            </select>
            <input type='submit' value='Change colors' class='btn btn-warning'/>
          </div>
        </form>
        {colorBlocks()}
      </div>
    }

    updateHTML()
  }

  render () {
    return (<div className="text-center">
      {this.toRender}
      <hr/>
      <button className="btn btn-secondary" onClick={() => {
        scoutingFormManager.getFromServer()
          .then(() => alert('Loaded Form Successfully'))
          .catch(err => alert('Error While Updating Scouting Form ' + JSON.stringify(err)))
      }}>Update Scouting Form</button>
    </div>)
  }
}

export default SettingsMenu
