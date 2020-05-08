import React, { Component } from 'react'
import {
    NavLink,
    withRouter
} from "react-router-dom";
import style from "./CookCircleHeader.module.css";
class CookCircleHeader extends Component {
    render() {
        return (
            <div>
                <div className={style.bigHeader}>
                    <span  onClick={()=>{
                        console.log(this.props);
                        this.props.history.push("/add")
                    }}><img width="27" src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" /></span>
                    <nav className={style.smallHeader}>
                        <NavLink className={style.nav} activeClassName={style.active} to="/cookCircle/follow">
                            <span>关注</span>
                            <div></div>
                        </NavLink>
                        <NavLink className={style.nav} activeClassName={style.active} to="/cookCircle" exact>
                            <span>最新</span>
                            <div></div>
                        </NavLink>
                        <NavLink className={style.nav} activeClassName={style.active} to="/cookCircle/master">
                            <span>达人</span>
                            <div></div>
                        </NavLink>
                    </nav>
                    <span onClick={()=>{
                        console.log(this.props);
                        this.props.history.push("/message")
                    }}><img  width="27" src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" /></span>
                </div>
            </div>
        )
    }
}

export default withRouter(CookCircleHeader);