import React from 'react'

import  Bt_Enviar from './btn_Enviar_Style.js'

export default class BtnEnviar extends React.Component{
    //onClick={this.props.onPress}
    //onClick={this.props.onPress} 

    render(){
        
        return(
                <Bt_Enviar onClick={this.props.onPress}  > {this.props.text} </Bt_Enviar>
        )
    }
}