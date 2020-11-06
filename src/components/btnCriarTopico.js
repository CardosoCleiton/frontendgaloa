import React from 'react'

import  Bt_CriarTopico from './btnCriarTopicoStyle'
import plus_plus from '../images/plus_plus_.svg'

export default class BtnCriarTopico extends React.Component{

    render(){
        
        return(
                <Bt_CriarTopico><img src={plus_plus} className ="imgBtnTopico"></img> {this.props.text} </Bt_CriarTopico >
        )
    }
}
