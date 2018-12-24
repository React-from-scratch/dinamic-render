import React, { Component } from 'react'
import './App.css'
import Validation from './Validator/Validator';
import Chars from './Characters/Characters'

class App extends Component {

  state = {
    char: '',
  }

  handleChange = (event) => {
    this.setState({
      char: event.target.value,
    })
  }

  deleteCharHandler = (charIndex) => {
    const newChar = this.state.char.split('')
    newChar.splice(charIndex, 1)
    const charUpdate = newChar.join('')
    this.setState({char: charUpdate})
  }
  
  render () {
    let singleCharacter = this.state.char.split('').map((e, index) => {
      return <Chars 
        click={() => this.deleteCharHandler(index)}
        key={index}
        singleChar={e} />
    });

    return (
      <div className='App'>
        <input type='text' onChange={this.handleChange} value={this.state.char}/>
        <Validation char={this.state.char} />
        {singleCharacter}
      </div>
    )
  }
}

export default App
