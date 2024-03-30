import './App.css';

import MyUseEffect2 from './components/MyUseEffect2';
import InfiniteUseEffect from './components/InfiniteUseEffect';
import MyUseEfffect3 from './components/MyUseEfffect3';
import context from './components/context';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import Parent1 from './components/Parent1';


function App() {
  const [theme , setTheme] = useState(false);

  return (
      // <>
      // {/* <MyFuncComp/> */} 
      // {/* < MyUseEffect2 /> */}
      // {/* < InfiniteUseEffect/> */}
      //   <MyUseEfffect3/>
      // </>
      // /* doc.title will not update here */
      <context.Provider value={theme}>
        <button onClick={()=> setTheme(!theme)}>Change Theme</button>
        <Navbar />
        <Parent/>
        <Parent1/>

      </context.Provider>
     );
}

export default App;
