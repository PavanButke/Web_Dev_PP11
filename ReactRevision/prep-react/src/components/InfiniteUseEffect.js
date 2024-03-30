import React,{useState , useEffect} from 'react'

export default function InfiniteUseEffect() {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect : componentDidMount");
        document.title = `Button clicked ${count} times. : ComponentDidUpdate`

        // setCount(100) // will not go in infinite loop as static state ; not changing
        //but now if we are updating value , it will go infinite
        setCount(Math.random)
    })
    console.log("render")
  return (
    <div>
    <h1>Current Count{count}</h1>
    <button onClick={()=> setCount(count+1)}>+1</button>
    </div>
  )
}
