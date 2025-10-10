
//import About from './About';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
 import TextForm from './TextForm';
import Alert from './Alert';


function App() {
  const [mode, setMode] = useState("light"); // whether darkmode enable or not
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
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#072c51';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
   <>
<Navbar title="Textform" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode}/>
 {/* <div className="container my-3">
 <About/> 
</div>  */}

</>
  );
}

export default App;
