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
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cadastro</DropdownMenuItem>
              <DropdownMenuItem>Login</DropdownMenuItem>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Sobre</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </nav>
    </div>
  )
}

export default navbar