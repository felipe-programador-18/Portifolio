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
        <p className="italic">Eu sou desenvolvedor fullstack, tenho 27 anos e natural de Porto Alegre estado de Rio Grande do sul.</p>
        
        <p className="italic"> Sou um pessoa bastante focada e ambiciosa na vida, acredito que tenho que lutar sempre pelos meus objetivos de vida.</p>
        <p className="italic">Atualmente curso analise e desenvolvimento de sistemas, onde estou no 4 sementre. Busco ser um ótimo profissional e ótimo ser humano também.
        Atualmente, me considero Intermediário na lingua inglesa e estou em busca da fluencia.</p>
        <p className="italic">Meus objetivos no ramo são: Contribuir no mundo da tecnologia sendo um ótimo profissional e aprendendo com pessoas incriveis e claro fluente no ingles.</p>
        
        <h1>Minhas experiencias: Atualmente Minhas, experiencias são realizadas no desenvolvimento de todos projetos pessoais.</h1>
        </div>
        


      
       
        </>)
}



export default Home