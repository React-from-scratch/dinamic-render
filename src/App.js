import React, { Component } from 'react'
import './App.css'
import Validation from './Validator/Validator';
import Chars from './Characters/Characters'

class App extends Component {

  state = {
    char: String,
    length: Number
  }

  handleChange = (event) => {
    this.setState({
      char: event.target.value,
      length: event.target.value.length,
    })
  }

  deleteCharHandler = (charIndex) => {
    const newChar = [...this.state.char]
    newChar.splice(charIndex, 1)
    this.setState({char: newChar.join('')})
  }
  
  render () {

    let singleCharacter = 'a';
    console.log(this.state.length)
    if(this.state.length >= 0) {
      singleCharacter = (
        <div>
          {this.state.char.split('').forEach((e, index) => {
            return <Chars 
            click={() => this.deleteCharHandler(index)}
            singleChar={e} /> 
          })}
        </div>
      )
    }
    console.log(singleCharacter)
    return (
      <div className='App'>
        <input type='text' onChange={this.handleChange} />
        <p>{this.state.length}</p>
        <Validation char={this.state.char} />
        {/* {singleCharacter} */}
        <Chars singleChar={this.state.char}/>
      </div>
    )
  }
}

export default App
