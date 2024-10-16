import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="laptop" price="55"/>
      <Device name="mobile" price="17"/>
      <Device name="watch" price="3"/>
      <Person />
      <Student grade="7" score="99"/>
      <Student grade={12} score="80"/>
      <Student/>
      <Developer />
    </>
  );
}

function Device(props){
  // console.log(props)
  return(
    <div>
      <h2>This device: {props.name} price: {props.price}</h2>
    </div>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Moni", age: "25" };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

const{grade, score}={grade: "7", score: "99"}
function Student({grade=1, score=0}) {
  // console.log(props)
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    // <div style={{
    //   margin: "20px",
    //   padding: "20px",
    //   border: "2px solid purple",
    //   borderRadius: "20px"
    // }}>
    <div style={developerStyle}>
      <h5>Dev Dev</h5>
    </div>
  );
}

export default App;
