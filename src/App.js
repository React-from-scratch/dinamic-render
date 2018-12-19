import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    char: 'holi',
    length: Number
  }

  handleChange = (event) => {
    this.setState({
      char: event.target.value,
      length: event.target.value.length
    })
  }

  render () {
    return (
      <div className='App'>
        <input type='text' onChange={this.handleChange} />
        <p hange={this.handleChange}>{this.state.length}</p>
      </div>
    )
  }
}

export default App
