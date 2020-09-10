import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const testFunc = () => {
    //1. 세팅
    const setStr = "1S2D*3T";

    //2. 3개로 나눈다.
    let count = setStr.length - 1;
    console.log("현재 위치", count);
    while (count !== -1) {
      console.log("현재 값", setStr[count]);
      count--;
    }
  };

  testFunc();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
