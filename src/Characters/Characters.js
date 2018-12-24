import React from 'react'
import './Characters.css'

const chars = (props) => {
  return (
    <div className='char' onClick={props.click}>
      <p>{props.singleChar}</p>
    </div>
  )
}

export default chars
