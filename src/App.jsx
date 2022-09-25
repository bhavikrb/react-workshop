import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible ? (
        <div className="alert alert-primary" role="alert">
          Gulab Jamun - Samosa
        </div>
      ) : (
        <div style={{'opacity':0}}>
        </div>
      )}
      <button
        className="btn btn-warning"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? 'Toggle - Hide' : 'Toggle - Show'}
      </button>
    </div>
  );
}

export default App;
