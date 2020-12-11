import React,{useState} from 'react';
import '../styles/elements/footer.css';
import logo_galoa from '../images/logotipo_galoa.png'

function Footer(){

  const [changeOFF,setChangeOFF] = useState(false);
  
  document.body.onresize = function() {
        
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (x < 1380) {
        setChangeOFF (true);
        //console.log(`${x}`)
       // console.log(`${changeOFF}`)
        return 
        
    }else{
        setChangeOFF (false);
        //console.log(`${x}`);
       // console.log(`${changeOFF}`);
        return
    }
  }




  return (    
      <footer>
        <section className={changeOFF ? "containercenter":"containeright"}>
	       <div className="item">
           <div className="logo" >
              <img src={logo_galoa} alt="logo_galoa" className="logo_Galoa"/>
              <button> Saiba mais </button>
          </div>

         </div>
	       <div className="item">
         <div className="txt">
              <div >
              <span className="txt_1"> 
                <strong className="txt_strong">
                  Preservar a memória do evento e ampliar o acesso ao conhecimento científico 
                  </strong> gerado em eventos é a razão de ser da plataforma Galoá Proceedings.
              </span>
              </div>
              <div>
                <span className="txt_2"> 
                  Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico formentado pelos encontros e aumentando o impacto do evento.
                </span>
              </div>
            </div>
         </div>
       </section>
      </footer>
  )
}
export default Footer;