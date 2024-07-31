import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";



const navbar = () => {
  return (
    <div className="flex ">
        <nav>
            <div>
                <img className="object-cover h-20 w-60" 
                src="../../public/image/logoproject.png" 
                alt="Project Manager" />
            </div>
            <li>Gerenciador</li>
            <li>Cadastro</li>
            <li>Sobre</li>
        </nav>
    </div>
  )
}

export default navbar