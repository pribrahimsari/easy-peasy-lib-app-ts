import React, {useState} from 'react';
import {useStoreActions, useStoreState} from "./store/hooks";


function App() {
  const { name, course } = useStoreState((store) => store);
  const { setName } = useStoreActions(store =>store);
  const [inputName, setInputName] = useState("");

  return <div className="App">
    <h1>Hello {name}</h1>
    <h2>This course {course}</h2>
    <h3>{inputName}</h3>
    <input type="text" placeholder={name} value={inputName} onChange={(e)=>setInputName(e.target.value)} />
    <button onClick={()=>setName(inputName)}>Submit</button>
  </div>;
}

export default App;
