import { useEffect, useState } from "react";

let App = () => {
  let [count, setCount] = useState(0);
  

  console.log("render was called");

  // // useEffect(()=>{
  // //     console.log("use effect was")
  // //   }, []);

  // // useEffect(()=>{
  // //         console.log("case2 was called");
  // // })

  // useEffect(()=>{
  //   let arr = process.split("i");
  //   console.log(arr);

  // } , [process])
  useEffect(()=>{
  console.log("case 1 useEffect was called");

  return () => {
    console.log("clean up function");
  };
},[]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    

    </div>
  );
};

export default App;