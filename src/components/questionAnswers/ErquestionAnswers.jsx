import React, { Component } from 'react'
import style from "./ErQuestionAnswers.module.scss"
import {
    NavLink,
    withRouter
} from "react-router-dom"
class questionAnswers extends Component {

    componentDidMount(){

        console.log(this.props)
    }
    render() {
        return (
            <div className={style.po}>   
                <div className={style.bigsearch}>
                    <div className={style.search}>
                        <div>
                            <span>提问</span>
                        </div>
                        <div onClick={()=>this.props.history.push("/search")}>
                            <i>搜索问题</i>
                        </div>
                        <div  onClick={()=>this.props.history.push("/message")}>
                            <img width="27" src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                    </div>
                </div>
                <nav className={style.nav}>
                    <NavLink to="/questionAnswers/jhQuest" activeClassName={style.active}  className={style.smallnav} >
                        <span>精华提问</span>
                        <div></div>
                    </NavLink>
                    <NavLink  to="/questionAnswers" exact activeClassName={style.active} className={style.smallnav}>
                        <span>最新问题</span>
                        <div></div>
                    </NavLink>
                    <NavLink to="/questionAnswers/zrQuest"  activeClassName={style.active} className={style.smallnav}>
                        <span>最热问题</span>
                        <div></div>
                    </NavLink>
                </nav>                  
            </div>
        )
    }
}

export default withRouter(questionAnswers)
