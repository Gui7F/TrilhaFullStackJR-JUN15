import logo from './logo.svg';
import './App.css';

import {BrowserRoute, Router, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRoute>
       <Routes>
         <Router path ="/" elemente={<Home/>}/>
       </Routes>
      </BrowserRoute>
    </div>
  );
}

export default App;
