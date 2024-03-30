import React,{useState} from 'react'

function MyFuncComp() {
    const [count , setCount]= useState(0);

  return (
    <div>
        <h1>Current Count {count}</h1>
        <button onClick={()=> setCount(count+1)}>Add +1 </button>
        <button onClick={() => count > 0 ? setCount(count - 1) : 0}>Substract -1 </button>
        <button onClick={()=> setCount(0)}>reset </button>
    </div>
  )
}
export default MyFuncComp