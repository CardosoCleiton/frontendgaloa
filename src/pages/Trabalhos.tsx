import React,{useState}from 'react'
import '../../src/styles/pages/trabalhos.css'

import MidiaVideo from '../components/video/MidiaVideo'
import Btns_scrool from '../components/btns_scrool'
import Resumo from '../components/resumo'
import Discussoes from '../components/discussoes'


function Trabalhos(){

  const [changeOFF,setChangeOFF] = useState(false);
  
  document.body.onresize = function() {
        
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (x < 1380) {
        setChangeOFF (true);
        console.log(`${x}`)
       // console.log(`${changeOFF}`)
        return 
        
    }else{
        setChangeOFF (false);
        console.log(`${x}`);
       // console.log(`${changeOFF}`);
        return
    }
  }


    return (
      <section>
        <section className= {changeOFF ? "sectionFatheright": "sectionFathercenter"}>

            <section className="sectionSon1"> 
             <div className="win_video_scroll">
             <div className = "broken">
               <MidiaVideo/>
               <Btns_scrool/>
               </div>
            </div>
            </section>

            <section className="sectionSon2" >  
            <Resumo/>
            </section>

            <section className="sectionSon3" >  
            <Discussoes/>
            </section>
            
         </section>
       </section>
    )
}

export default Trabalhos

