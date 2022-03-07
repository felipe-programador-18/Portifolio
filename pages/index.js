import React from "react"
import Link from "next/link"

const Home = () =>{
    return(<>
        <div className="mx-auto text-center bg-gray-900 text-white">
         
           <div>
             <img id="icone" className="text-center inline" src="perfil.jpg"></img>
             <h1 className="font-bold text-center">Felipe Martins</h1>
             
             <Link href='/sobre'>
             <a className="font-bold">Sobre</a>
             </Link>
             
             <Link href='/about'>
             <a className="font-bold m-2">About</a>
             </Link>

             <Link href='/projetos'>
             <a className="font-bold m-2">Projetos</a>
             </Link>
             
          </div>

       </div>
         
        
        <div className="mx-auto bg-red-100 text-center capitalize">
        <h1 className="font-bold"> Quem é o Felipe ?</h1>
        <p className="italic">Eu Sou Desenvolvedor Fullstack, Tenho 27 Anos E Natural De Porto Alegre Estado Do Rio Grande Do Sul.

        Sou Um Pessoa Bastante Focada E Ambiciosa Na Vida, Acredito Que Tenho Que Lutar Sempre Pelos Meus Objetivos De Vida.
        
        Atualmente Curso Analise E Desenvolvimento De Sistemas, Onde Estou No 4 Sementre. Busco Ser Um Ótimo Profissional E Ótimo Ser Humano Também. Atualmente, Me Considero Intermediário Na Língua Inglesa E Estou Em Busca Da Fluência.
        
        Meus Objetivos No Ramo São: Contribuir No Mundo Da Tecnologia Sendo Um Ótimo Profissional E Aprendendo Com Pessoas Incríveis E Claro Fluente No Ingles.
        
        Minhas Experiências: Atualmente Minhas, Experiências São Realizadas No Desenvolvimento De Todos os Projetos Pessoais.</p>
        
        <h1>Minhas experiencias: Atualmente Minhas, experiencias são realizadas no desenvolvimento de todos projetos pessoais.</h1>
        </div>
        


      
       
        </>)
}



export default Home