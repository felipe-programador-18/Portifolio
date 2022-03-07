import Link from 'next/link'
import React from 'react'


const Projeto = ()=>{
    return <>
    <div className="mx-auto text-center bg-gray-600 text-white" >
       <h1>Projeto Pessoais.</h1>
           <Link href='/'>
             <a>volta para imagem</a>
           </Link>       
    </div>  
    
     
      <div className="grid grid-rows-2 hover:grid-rows-6 justify-center bg-blue-300 ">

      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Restaurante vegano</p> <img id="1" src="vegano.png"></img>
          

      </div>
      
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Página de captura</p> <img id="2"  src="educa.jpg"></img>
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Contador de voltas</p> <img id="3" src="voltas.jpg"></img>
      
      </div>
      <div className=' bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Página de capitura</p> <img id="4" src="work.jpg"></img> 
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...' > <p className='italic capitalize'>Conversor De moeda</p> <img id="5" src="money.jpg"></img>
      
      </div>
      
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Calculadora de Juros</p> <img id="6" src="juros.jpg"></img> 
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Palpite box</p> <img id="7" src="palpi.jpg"></img> 
      
      </div>
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'> <p className='italic capitalize'>Calculadora de imc</p> <img id="8" src="imc.jpg"></img> 
      
      </div>
      
      <div className='bg-green-300 w-40 h-40 m-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>  <p className='italic capitalize'>Churrascometro</p> <img id="9" src="chu.jpg"></img>
      
      </div>
      
      </div>
      
      
                
           
    </>
}


export default Projeto