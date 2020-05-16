import React, { Component } from 'react'
import img from "../../assets/img/loading.gif"
import style from "./loading.module.css"

export default class Loading extends Component {
    render() {
        
        return (            
            <div>
                <img className={style.img} src={img} ></img>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}
