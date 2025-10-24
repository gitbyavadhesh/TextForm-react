

import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
 import TextForm from './TextForm';
import Alert from './Alert';
import About from './About';
import { 
  BrowserRouter as Router,
   Routes, 
   Route
   } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState("light"); // whether darkmode enable or not
  const [alert, setAlert] = useState(null);

   // 🔥 Added for theme palette
  const [themeColor, setThemeColor] = useState({
    background: 'white',
    text: 'black'
  });


  const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#072c51';
      // document.title = 'TextFrom - Dark Mode';
      showAlert("Dark mode has been enabled", "success")
      setInterval(() => {
        // document.title = 'TextFrom is good soft';
      }, 2000);
      setInterval(() => {
        // document.title = 'install TextFrom ';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextFrom - Light Mode';
      showAlert("Light mode has been enabled", "success")
    }
  }

  // 🔥 Added for theme palette
  const handleThemeChange = (color) => {
    setThemeColor(color);
    document.body.style.backgroundColor = color.background;
    document.body.style.color = color.text;
     // 🔥 Fix: Reset mode to 'custom' so TextForm doesn't force white/black
  setMode('custom');


    showAlert("Theme updated!", "success");
  };

  return (
   <>
   <Router>
<Navbar title="Textform" aboutText="About Us" mode={mode} toggleMode={toggleMode} onThemeChange={handleThemeChange} />

<Alert alert={alert}/>

  <div className="container my-3">
   <Routes>
        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils for text analyze" mode={mode}/>} />
   </Routes>
   

  </div>
  </Router>
</>
  );
}

export default App;
