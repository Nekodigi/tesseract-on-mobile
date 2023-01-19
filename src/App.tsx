import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createWorker } from "tesseract.js";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const worker = await createWorker({
        logger: (m) => console.log(m), // Add logger here
      });
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text },
      } = await worker.recognize(
        "https://tesseract.projectnaptha.com/img/eng_bw.png"
      );
      console.log(text);
      await worker.terminate();
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
