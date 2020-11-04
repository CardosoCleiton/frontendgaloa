import React from 'react'
import '../../src/styles/pages/trabalhos.css'

import MidiaVideo from '../components/video/MidiaVideo'
import Btns_scrool from '../components/btns_scrool'
import Resumo from '../components/resumo'

function Trabalhos(){
    return (
      <section>

        <section className="sectionFather">

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

            
           
            

         </section>

         

       </section>
    )
}

export default Trabalhos

