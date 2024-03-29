import React from 'react'

const styles= {
   dark: {
    background: 'black',
    color: 'white'
   } 
}

function HighOrderComp(WrappedComponent) {
  return function (args){
    let temp ={}
    if(args.dark)
    {
        temp = {...styles.dark}
    }
    let obj = {...args, style: temp}
    return <WrappedComponent {...obj}/>  
  }
}

export default HighOrderComp