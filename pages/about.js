import Link from "next/link"
import React from "react"


const About = ()=>{
    return <>
    <div className="mx-auto text-center bg-gray-900 text-white">
    <img id="icone" className="text-center inline" src="perfil.jpg"></img>
    <h1 className="font-bold text-center">Felipe Martins</h1>
    <Link href='/'>
    <a>Home</a>
    </Link>
    </div>

    <div className="mx-auto bg-yellow-300 text-center capitalize">
    <h1 className="italic"> Who is Felipe? </h1>
    <p className="italic">
    I am a Fullstack Developer, I am 27 years old and I was born in Porto Alegre, State of Rio Grande do Sul. I am a very focused and ambitious person in life, I believe I have to always fight for my life goals. Currently I am studying Systems Analysis and Development, where I am in the 4th semester. I seek to be a great professional and great human being too. Currently, I consider myself intermediate in the English language and I am in search of fluency. My goals in the field are: Contribute in the world of technology being a great professional and learning from amazing people and of course fluent in English. My Experiences: Currently mine, experiences are carried out in the development of all personal projects.
    
    My Experiences: Currently, my experiences are carried out in the development of all personal projects.</p>
    
    <h1>
    My experiences: Currently mine, experiences are carried out in the development of all personal projects.</h1>
    </div>
        
    <h1 className="text-center font-bold mt-20 capitalize"> skills and knowledge </h1>
    <img src="tec.jpg"></img>
    
    <div id="fop" className="mx-auto text-center bg-white">
    <footer className="text-center mt-40">
    
        <a href="https://github.com/felipe-programador-18?tab=overview&from=2022-03-01&to=2022-03-07"> <img id="hub" src="github.jpg"></img> </a>  
        <a href="https://www.linkedin.com/in/felipe-martins-programador/"> <img id="link" src="link.jpg"></img>  </a>       
    
    </footer>
   </div>
        
      
    </>
}


export default About