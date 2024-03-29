import React from 'react'
import HighOrderComp from './HighOrderComp'

function Element(props) {
  return (
    <div style={props.style}>
        I'm Button ....
    </div>
  )
}

export default HighOrderComp(Element);