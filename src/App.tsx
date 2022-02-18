import React, {useState} from 'react';
import {useStoreActions, useStoreState} from "./store/hooks";


function App() {
  const { name, course } = useStoreState((store) => store);
  const { setName, updateDataThunk } = useStoreActions(store =>store);

  const [inputName, setInputName] = useState("");
  const [inputCourse, setInputCourse] = useState("");

  const handleSubmitBtn = () => {
    updateDataThunk({
      name: inputName,
      course: inputCourse,
    });
  }

  return <div className="App">
    <h1>Hello {name}</h1>
    <h2>This course {course}</h2>
    <h4>{inputName}</h4>
    <h4>{inputCourse}</h4>

    <input type="text" placeholder={name} value={inputName} onChange={(e)=>setInputName(e.target.value)} /> <br />
    <input type="text" placeholder={course} value={inputCourse} onChange={(e)=>setInputCourse(e.target.value)} /> <br />
    <button onClick={handleSubmitBtn}>Submit</button>
  </div>;
}

export default App;
