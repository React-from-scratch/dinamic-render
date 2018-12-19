import React from 'react'

const Validation = (props) => {
  let isLong = ''
  props.char.length < 5 ? isLong = 'Text too short' : isLong = 'Text long enough'
  return (
    <div >
      <p>{isLong}</p>
    </div>
  )
}

export default Validation
