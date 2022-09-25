import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'

function Greetings() {

   const [name,setName] = useState({firstName: "", lastName: ""})

  return (
    <div> 
    <form>
    <div className="form-group">
      <label for="exampleInputEmail1">First Name:</label>
      <input value={name.firstName} onChange={(e) => setName({...name,firstName: e.target.value})} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
      
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Last Name:</label>
      <input value={name.lastName} onChange={(e) => setName({...name,lastName: e.target.value})} type="text" className="form-control" id="exampleInputPassword1" placeholder="Last Name"/>
    </div>
    <div>
    <br></br>
    </div>
    <button onClick={(e) => {e.preventDefault();
        setName({firstName: "", lastName: ""})}} className="btn btn-primary">Reset Fields</button>
  </form>
  <div><br></br></div>
  <h1>{name.firstName} {name.lastName} </h1>
    </div>
    
  );
}

export default Greetings;