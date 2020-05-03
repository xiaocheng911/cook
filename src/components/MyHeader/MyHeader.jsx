import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import style from "./MyHeader.module.scss"
export default class MyHeader extends Component {
    render() {
        return (
            <div className={style.po}>
                <nav>
                    <NavLink className={style.bg} to="/">
                        <div><img width="25" src="https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50" alt=""/></div>
                        <div>学烘焙</div>
                    </NavLink>
                    <NavLink className={style.bg} to="/cookCircle">
                        <div><img width="25" src="https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50" alt=""/></div>
                        <div>烘焙圈</div>
                    </NavLink>
                    <NavLink className={style.bg} to="/questionAnswers">
                        <div><img width="25" src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50" alt=""/></div>
                        <div>问答</div>
                    </NavLink>
                    <NavLink className={style.bg} to="/my"> 
                        <div><img width="25" src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50" alt=""/></div>
                        <div>小窝</div>
                    </NavLink>
                </nav>                
            </div>
        )
    }
}


