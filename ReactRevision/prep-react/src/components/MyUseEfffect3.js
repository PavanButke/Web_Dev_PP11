import React,{useState , useEffect} from 'react'

export default function MyUseEfffect3() {
    const [count , setCount] = useState(0);
    const [text , setText] = useState({msg : ''});
    useEffect(()=>{
        console.log("useEffect : componentDidMount");
        document.title = `Button clicked ${count} times. : ComponentDidUpdate`
    }, [count])
    let changeText=(e)=>{
        text.msg = e.target.value;
        console.log(text)
        setText(...text) // if you don't spread operator, address will not change because of that you won't see though you enter keys
    }

    console.log("render")
  return (
    <div>
    <h1>Current Count{count}</h1>
    <button onClick={()=> setCount(count+1)}>+1</button>
    <input type="text" value={text.msg} onChange={(e)=> changeText(e)}>+1</input>
    </div>
  )
}
