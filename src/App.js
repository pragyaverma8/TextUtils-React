import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [BtnText, setBtnText] = useState("Switch to Dark Mode");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c1933';
      showAlert("Dark mode has been enabled", "success");
      setBtnText("Switch to Light Mode");
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setBtnText("Switch to Dark Mode");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>

      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} BtnText={BtnText} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

      {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
      
        <Routes>
          <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter" mode={mode} showAlert={showAlert} />} />
          <Route path="about" element={<About mode={mode}/>} />
        </Routes>
      </div>
      </BrowserRouter>

    </>

  );
}

export default App;
