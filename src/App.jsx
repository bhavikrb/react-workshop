import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";



function App() {
 const [counter,addCounter] = useState(0)
  

const onClickHandler = () => {
  addCounter(counter + 1)
}
  return (
    <div>
    <br></br>
    <h1>{counter}</h1>
    <br></br>
    <button type="button" onClick={onClickHandler} className="btn btn-secondary">Increase</button>
    <br></br>
    <button type="button" onClick={() => {addCounter(counter - 1)}} className="btn btn-secondary">Decrease</button>
    <br></br>
    <button type="button" onClick={() => {addCounter(0)}} className="btn btn-primary">Reset</button>
    </div>
  );
}

export default App;
