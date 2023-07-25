import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Maku" />
        <footer>
          This was coded by{" "}
          <a
            href="https://www.linkedin.com/in/shila-rajafi-92a307249/"
            target="_blank"
            rel="noreferrer"
          >
            Shila Rajafi{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/shila-r/ReactWeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}