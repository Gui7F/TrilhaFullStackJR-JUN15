import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navbar = () => {
  return (
    <div className="text-white">
      <nav className=" list-none flex flex-row justify-between">
        <div>
          <img className="object-cover h-20 w-60"
            src="/image/logoproject.png"
            alt="Project Manager" />
        </div>
        <div className="size-16 mr-20 flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger><i className="bi bi-list-task text-3xl"></i></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link to="cadastro">Cadastro</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="login">Login</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="dashboard">Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="sobre">Sobre</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/">Sair <i className="bi bi-box-arrow-right"></i></Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </nav>
    </div>
  )
}

export default navbar