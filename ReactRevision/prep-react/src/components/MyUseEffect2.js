import React,{useState , useEffect} from 'react'

export default function MyUseEffect2() {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect : componentDidMount");
        document.title = `Button clicked ${count} times. : ComponentDidUpdate`
    }, [])
    console.log("render")
  return (
    <div>
    <h1>Current Count{count}</h1>
    <button onClick={()=> setCount(count+1)}>+1</button>
    </div>
  )
}
