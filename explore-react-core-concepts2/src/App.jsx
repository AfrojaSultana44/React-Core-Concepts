import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Posts from "./Posts";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React Core Concepts Part-2</h1>
      <Friends />
      <Users />
      <Team />
      <Counter />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert("button 3 clicked")}>Click Me 3</button>
      <button onClick={() => addToFive(3)}>Click Me 4</button>
      <hr />
      <h1>React Core Concepts Recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>States</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts/>
    </>
  );
}

export default App;
