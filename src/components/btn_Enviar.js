import React from 'react'

import  Bt_Enviar from './btn_Enviar_Style.js'

export default class BtnEnviar extends React.Component{

    render(){
        
        return(
                <Bt_Enviar>{this.props.text}</Bt_Enviar>
        )
    }
}