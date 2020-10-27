import React from 'react'
import '../../src/styles/pages/trabalhos.css'

import MidiaVideo from '../components/video/MidiaVideo'
import Btns_scrool from '../components/btns_scrool'

function Trabalhos(){
    return (
        <section className="sectionFather">
            <section className="sectionSon1"> 
             <div className="win_video_scroll">
             <div className = "broken">
               <MidiaVideo/>
               <Btns_scrool/>
               </div>
            </div>
            </section>
         </section>
    )
}

export default Trabalhos

