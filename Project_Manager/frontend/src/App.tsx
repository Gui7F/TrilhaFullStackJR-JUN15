import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
//bootstrapicons
import 'bootstrap-icons/font/bootstrap-icons.css';

//components
import Navbar from "@/components/Navbar"
//pages
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Dashboard from './pages/Dashboard';



function App() {

  return (
    <>
    <div className='bg-black h-screen p-5 max-w-px:1080'>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cadastro' element={<Cadastro/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='dashboard' element ={<Dashboard/>}/>
          <Route path= 'sobre' element ={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App