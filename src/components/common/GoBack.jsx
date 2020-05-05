import React, { Component } from 'react'
import style from "../../assets/style/goBack.module.scss"
export default class GoBack extends Component {
    
    render() {
        return (
            <img className={style.img} onClick={()=>{
                this.props.props.history.go(-1);
            }} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
        )
    }

    componentDidMount(){
        console.log(this.props.props);
    }
}
