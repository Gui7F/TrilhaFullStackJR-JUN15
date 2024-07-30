import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const navbar = () => {
  return (
    <div>
        <nav>
            <div>
                <img src="../assets/logoproject" alt="Project Manager" />
            </div>
            <li>Gerenciador</li>
            <li>Cadastro</li>
            <li>Sobre</li>
        </nav>
    </div>
  )
}

export default navbar