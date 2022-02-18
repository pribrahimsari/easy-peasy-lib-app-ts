import React from 'react';
import {useStoreState} from "./store/hooks";


function App() {
  const { name, course }= useStoreState((store) => store);
  return <div className="App">
    <h1>Hello {name}</h1>
    <h2>This course {course}</h2>
  </div>;
}

export default App;
