import { useState } from "react"

const Login = () => {

  const [emailLogin, setEmailLogin ] = useState("")
  const [senhaLogin, setSenhaLogin] = useState("")

  const handleSubmit = (e: any) =>{
    e.preventDefault()

  }


  return (
    <div className=" border w-2/5 m-auto pt-5 pb-5 mt-20 rounded-t-md" id='formulario' >
    <form onSubmit={handleSubmit} className=" flex flex-col m-auto  w-96">

      <h1 className="text-4xl font-thin mb-6 ">Login</h1>
      <input className=" mb-10 mt-6 border p-1 text-white bg-slate-900"
        onChange={(e: any) => setEmailLogin(e.target.value)}
        type="email"
        placeholder="Digite seu email"
        required
        value={emailLogin}
      />
      <input className="max-w-full mb-10 p-1 text-white bg-slate-900"
        onChange={(e: any) => setSenhaLogin(e.target.value)}
        type="password"
        placeholder="Digite a senha"
        required
        value={senhaLogin}
      />
    
      <button className=" text-white bg-slate-900  px-8 py-1 m-auto rounded-full" >Entrar</button>
    </form>
    </div>
  )
}

export default Login
