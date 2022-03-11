// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,typ)=>{
    setAlert({
      message : msg,
      type : typ
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const switchMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("DarkMode has enabled","success");
      // setInterval(() => {
      //   document.title = 'Dark Mode';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Alert'
      // }, 1000);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode has enabled","success")
      // document.title = 'Umaid - Home';
    }
  }
  
  return (
    <div>
      {/* <Router> */}
        {/* <Navbar title="News Blog" secondTitle="Live War Updates" mode={mode} switchMode={switchMode} Link={Link} /> */}
        <Navbar title="News Blog" secondTitle="Live War Updates" mode={mode} switchMode={switchMode} />
        <Alert alert={alert}/>
        <div className="container my-2">
          {/* <Routes> */}
              {/* <Route path="/about" element={<About/>}/> */}
              {/* <Route path="/" element={<TextForm heading="Enter Text here" mode={mode} showAlertFunction={showAlert} />} /> */}
              <TextForm heading="Enter Text here" mode={mode} showAlertFunction={showAlert} />
          {/* </Routes> */}
        </div>


    {/* <div className="App">
      <header className="App-header">
        <h1>good morning</h1>
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
          Learn React "good morning"
        </a>
      </header>
    </div> */}
    {/* </Router> */}
  </div>
  );
}

export default App;