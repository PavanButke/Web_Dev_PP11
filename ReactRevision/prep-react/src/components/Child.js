import React from 'react'

function Child() {
 console.log("Child called" )
  return (
    <div >
        Child
    </div>
  )
}

export default React.memo(Child)    