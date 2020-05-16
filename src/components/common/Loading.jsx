import React, { Component } from 'react'
import img from "../../assets/img/loading.gif"
import style from "../../assets/style/loading.module.scss"

export default class Loading extends Component {
    render() {
        
        return (            
            <div>
                <img className={style.img} src={img} alt=""></img>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}
