import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";



const navbar = () => {
  return (
    <div className="text-white">
        <nav className=" list-none flex flex-row justify-between">
            <div>
                <img className="object-cover h-20 w-60" 
                src="../../public/image/logoproject.png" 
                alt="Project Manager" />
            </div>
            <div className="flex space-x-8 mx-auto ">
            <button className="bg-slate-200 text-black h-10">Gerenciador</button>
            <button className="bg-slate-200 text-black h-10">Cadastro</button>
            <button className="bg-slate-200 text-black h-10">Sobre</button>
            </div>
            <div>
              <i className="bi bi-person-circle"></i>
            </div>
        </nav>
    </div>
  )
}

export default navbar