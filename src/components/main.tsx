import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Apresentacao from '../pages/Apresentacao';
import Autores from '../pages/Autores';
import Comites from  '../pages/Comites';
import contatos from '../pages/Contatos';
import EixosTematicos from '../pages/EixosTematicos';
import Trabalhos from '../pages/Trabalhos';

import Navbar from './Navbar';
import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/elements/main.css';

function Main(){
  return (
   <>
   <div className ='body'>
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
        {/*<Navbar/>*/}
        </Router>
      </main>
      </div>
   </>
  )
}

export default Main;