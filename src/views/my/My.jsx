import React, { Component } from 'react'

// 引入样式
import style from "./css/my.module.scss";
// 引入图片
import setting from "../../assets/img/my/setting.jpg";
import head from "../../assets/img/my/head.jpg"

export default class My extends Component {
    render() {
        return (
            <div className={style.big}>
                <header>
                    <img src={setting} alt=""/>
                </header>
                <div className={style.myinfo}>
                    <img src={head} alt=""/>
                    <h1>帅气小程</h1>
                </div>
            </div>
        )
    }
}
