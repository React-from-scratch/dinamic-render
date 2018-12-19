import React from 'react'

const Validation = (props) => {
  let isLong = 'Text too short'
  if (props.length >= 5) {
    isLong = 'Text long enough'
    return isLong
  }
  return (
    <div>
      {isLong}
    </div>
  )
}

export default Validation
