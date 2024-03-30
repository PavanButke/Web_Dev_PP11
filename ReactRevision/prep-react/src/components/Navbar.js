import React,{useContext} from 'react'
import context from './context'

function Navbar() {
    const theme = useContext(context)
    console.log("Navbar called" , theme)
  return (
    
    <div className={theme?"dark":"light"}>
        Navbar
    </div>
  )
}

export default Navbar