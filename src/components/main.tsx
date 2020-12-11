import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Apresentacao from '../pages/Apresentacao';
import Autores from '../pages/Autores';
import Comites from  '../pages/Comites';
import contatos from '../pages/Contatos';
import EixosTematicos from '../pages/EixosTematicos';
import Trabalhos from '../pages/Trabalhos';

import Navbar from './Navbar';
import Header from './header'
import Footer from './footer'
import '../styles/elements/main.css';


function Main() {

  const [changeOFF,setChangeOFF] = useState(false);

  document.body.onload = function() {
      if(((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 1380)){
         return  (setChangeOFF (true))
      }else if(((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 1380)){
         return (setChangeOFF (false))
      }
  }

  document.body.onresize = function() {
      var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (x < 1380) {
         return (setChangeOFF (true))
      }else if(((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 1380)){
         return (setChangeOFF (false))
      }
  }

    return (
      <div className ={changeOFF ? 'body_1' : 'body'}>
        <main>
        <Router>
          <Header/>
              <Switch>
                  <div className="navBar">
                  <Route path='/apresentacao' component ={Apresentacao} />
                  <Route path='/autores' component ={Autores} />
                  <Route path='/comites' component ={Comites} />
                  <Route path='/contatos' component ={contatos} />
                  <Route path='/eixostematicos' component ={EixosTematicos} />
                  <Route path='/contatos' component ={contatos} />
                  <Route path='/trabalhos' component ={Trabalhos} />
                  </div>
              </Switch> 
            <Footer/>
            <Navbar/>
          </Router>
        </main>
      </div>
    )
}

export default Main;