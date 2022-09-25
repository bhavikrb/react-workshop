import "./App.css";


function App({className, userName}) {

  return (
    <div className={className}>
    <h2>Hello {userName}</h2>
    </div>
  );
}

export default App;
