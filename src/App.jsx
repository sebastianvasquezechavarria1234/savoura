import { useState } from 'react';
import './App.css'
import { SecHero } from'./componentes/SecHero.jsx'
import { Header } from'./componentes/Header.jsx'
import { MnResponsive } from'./componentes/MnResponsive.jsx'
import { Sec2 } from'./componentes/Sec2.jsx'
import { Sec3 } from'./componentes/Sec3.jsx'
import { Sec4 } from'./componentes/Sec4.jsx'
import { Sec5 } from'./componentes/Sec5.jsx'
import { Footer } from'./componentes/Footer.jsx'





function App() {

  return (
    <>

  

    <Header/>
    

    <SecHero/>

 
    <section className="sec__max__width">
       <Sec2/>
       
       <Sec3/>

       <Sec4/>

       <Sec5/>
    </section>

       <Footer/>

   
    </>
  )
}

var header = document.querySelector("header");

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;

    if(scroll  > 10){
        header.classList.add("headerActive");
    }
    else if(scroll  < 10){
        header.classList.remove("headerActive");
    }
}

export default App
