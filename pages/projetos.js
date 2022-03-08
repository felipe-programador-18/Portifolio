import Link from 'next/link'
import React from 'react'


const Projeto = ()=>{
    return <>
    <div className="mx-auto text-center bg-gray-600 text-white" >
       <h1 className='italic'>Projeto Pessoais.</h1>
           <Link href='/'>
             <a>Home</a>
           </Link>       
    </div>  
    
     
      <div className="grid grid-rows-2 hover:grid-rows-6 justify-center bg-white ">

      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Restaurante vegano</p> 
       <a href='https://github.com/felipe-programador-18/Vegano'>  <img id="1" src="vegano.png"></img> </a>
          

      </div>
      
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Página de captura</p> 
       <a href='https://github.com/felipe-programador-18/Projetinho'> <img id="2"  src="educa.jpg"></img> </a>
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Contador de voltas</p>
        <a href='https://github.com/felipe-programador-18/Contador-de-volta-react.js'> <img id="3" src="voltas.jpg"></img> </a>      
      </div>
      <div className=' bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Página de capitura</p> 
       <a href='https://github.com/felipe-programador-18/P-gina-de-captura'> <img id="4" src="work.jpg"></img> </a>
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...' > <p className='italic capitalize'>Conversor De moeda</p>
       <a href='https://github.com/felipe-programador-18/Conversos-de-Moedas'>  <img id="5" src="money.jpg"></img> </a>
      
      </div>
      
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Calculadora de Juros</p>
       <a href='https://github.com/felipe-programador-18/Composto-project'>  <img id="6" src="juros.jpg"></img> </a> 
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Palpite box</p> 
       <a href='https://github.com/felipe-programador-18/Palpitebox'> <img id="7" src="palpi.jpg"></img> </a>
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Calculadora de imc</p>
      <a href='https://github.com/felipe-programador-18/Imc'> <img id="8" src="imc.jpg"></img> </a> 
      
      </div>
      
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>  <p className='italic capitalize'>Churrascometro</p> 
       <a href='https://github.com/felipe-programador-18/Project.1.2'> <img id="9" src="chu.jpg"></img> </a>
      
      </div>
      
      </div>
      
      
                
           
    </>
}


export default Projeto