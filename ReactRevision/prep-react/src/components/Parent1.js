import React,{useContext} from 'react'
import context from './context'
function Parent1() {
    const theme = useContext(context)
    console.log("Parent2 called" , theme)
  return (
    <div className={theme ? "dark" : "light"} >
        Parent1
    </div>
  )
}

export default Parent1