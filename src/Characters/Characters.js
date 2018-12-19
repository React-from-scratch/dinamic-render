import React from 'react'
import './Characters.css'

const chars = (props) => {
  return (
    <div className='char'>
      <p onClick={props.click}>{props.singleChar}</p>
    </div>
  )
}

export default chars
