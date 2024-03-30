import React,{useContext} from 'react'
import Child from './Child'
import context from './context'

function Parent() {
    const theme = useContext(context)
    console.log("Parent called" , theme)
  return (
    
    <div className={theme ? "dark" : "light"} >Parent

        <Child/>
    </div>
  )
}

export default Parent