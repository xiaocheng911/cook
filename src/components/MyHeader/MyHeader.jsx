import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import style from "./MyHeader.module.scss"
export default class MyHeader extends Component {
    render() {
        return (
            <div className={style.po}>
                <nav>
                    <NavLink className={style.bg} exact activeClassName={style.active1} to="/">
                        <div className={style.pic1}></div>
                        <div>学烘焙</div>
                    </NavLink>
                    <NavLink className={style.bg} activeClassName={style.active2} to="/cookCircle">
                        <div className={style.pic2}></div>
                        <div>烘焙圈</div>
                    </NavLink>
                    <NavLink className={style.bg} activeClassName={style.active3} to="/questionAnswers">
                        <div className={style.pic3}></div>
                        <div>问答</div>
                    </NavLink>
                    <NavLink className={style.bg} activeClassName={style.active4} to="/my">
                        <div className={style.pic4}></div>
                        <div>小窝</div>
                    </NavLink>
                </nav>
            </div>
        )
    }
}


