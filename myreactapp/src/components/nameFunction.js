import React from 'react'

//props r the properties of the function
//make sure that the function u r returning no matter what file name,starts with Cap letter
const NameFunction = (props) => {
  return (
    <div>
      Hello {props.passedName} and also {props.anotherWay}
    </div>
  )
}

export default NameFunction
