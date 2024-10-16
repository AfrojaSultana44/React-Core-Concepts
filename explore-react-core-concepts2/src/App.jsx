import "./App.css";

function App() {
  function handleClick(){
    alert("button clicked")
  }

  const handleClick2 = ()=>{
    alert("button 2 clicked")
  }

  const addToFive = (num)=>{
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts Part-2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>alert("button 3 clicked")}>Click Me 3</button>
      <button onClick={()=>addToFive(3)}>Click Me 4</button>
    </>
  );
}

export default App;
