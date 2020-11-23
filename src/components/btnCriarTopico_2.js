import React from 'react'

import Bt_CriarTopico from './btnCriarTopicoStyle_2'
export default class BtnCriarTopico extends React.Component{

    render(){
        
        return(
                <Bt_CriarTopico onClick={this.props.onPress}> {this.props.text} </Bt_CriarTopico >
        )
    }
}
