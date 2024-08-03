import { useState } from "react";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setCofirmSenha] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className=" border w-2/5 m-auto pt-5 pb-5 mt-20 rounded-t-md" id='formulario' >
    <form onSubmit={handleSubmit} className=" flex flex-col m-auto  w-96">

      <h1 className="text-4xl font-thin mb-6 ">Cadastro</h1>
      <input className=" mb-10 mt-6 border p-1 text-white bg-slate-900"
        onChange={(e: any) => setEmail(e.target.value)}
        type="email"
        placeholder="Digite seu email"
        required
        value={email}
      />
      <input className="max-w-full mb-10 p-1 text-white bg-slate-900"
        onChange={(e: any) => setSenha(e.target.value)}
        type="password"
        placeholder="Digite a senha"
        required
        value={senha}
      />
      <input className="max-w-full mb-10 p-1 text-white bg-slate-900"
        onChange={(e: any) => setCofirmSenha(e.target.value)}
        type="password"
        placeholder="Corfime a senha"
        required
        value={confirmSenha}
      />

      <button className=" text-white bg-slate-900  px-8 py-1 m-auto rounded-full" >Cadastrar</button>
    </form>
    </div>
  );
};

export default Cadastro;
