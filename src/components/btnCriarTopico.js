import React from 'react'

import  Bt_CriarTopico from './btnCriarTopicoStyle'

export default class BtnCriarTopico extends React.Component{

    render(){
        
        return(
                <Bt_CriarTopico> {this.props.text} </Bt_CriarTopico >
        )
    }
}
