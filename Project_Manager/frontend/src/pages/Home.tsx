import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

//components
import {LayoutGrid} from "../components/ui/layout-grid"
import { CardData } from "@/components/CardData";




const Home = () => {
  const tituloRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const titulo = tituloRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
    const tl = gsap.timeline({duration:1})

    tl.from(titulo, { opacity: 0, y: -100  })
    .from(description,{opacity:0, y:100})
    .from(button, {opacity:0, y:200, rotate: 360});
  });

  return (
    <main className="mt-60">
      <h1 ref={tituloRef} className="text-6xl font-extrabold mb-5" id="titulo">
        Gerenciador de Projetos
      </h1>
      <p ref={descriptionRef} className="text-sl m-auto w-1/2 font-extralight">
        Gerencie seus projetos em um só lugar de forma centralizada, faça
        autenticação com Github para facilitar, você pode utilizar este
        gerenciador como seu portifolio caso queira, pode ver seus ultimos
        commits em cada projeto e mais.
      </p>
      <button
        ref={buttonRef}
        className="bg-white px-4 p-1 text-black rounded-full mt-3"
      >
        <Link to={"cadastro"}>Criar Conta</Link>
      </button>
      <section>
        <LayoutGrid cards={CardData}/>
      </section>
    </main>
  );
};

export default Home;
