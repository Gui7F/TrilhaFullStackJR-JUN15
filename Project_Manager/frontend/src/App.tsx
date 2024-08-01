import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "@/components/Navbar"
import Home from './pages/Home';

function App() {

  return (
    <>
    <div className='bg-black h-screen'>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App