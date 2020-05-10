import React, { Component } from 'react'
import style from "./css/cookStudy.module.scss"
import { NavLink } from 'react-router-dom';
import add from "../../assets/img/cookStudy/add.jpg"
import message from "../../assets/img/cookStudy/message.jpg"

import skill from "../../assets/img/cookStudy/skill.jpg"
import video from "../../assets/img/cookStudy/video.jpg"
import course from "../../assets/img/cookStudy/course.jpg"
import recipeClass from "../../assets/img/cookStudy/recipeClass.jpg"
import CookClass from '../../components/cookStudy/CookClass';

export default class Index extends Component {
    
    render() {
        return (
            <div>
                {/* 头部 */}
                <header >
                    <div id={style.bigsearch}>
                        <div className={style.search}>
                            <div>
                                <NavLink to="/add">
                                    <img width="27" src={add} alt="" />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/search">
                                    <i>搜索食谱/食材</i>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/message">
                                    <img width="27" src={message} alt="" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </header>
                {/* 导航栏 */}
                <div className={style.nav}>
                    <NavLink to="/skill">
                        <img src={skill} alt="" />
                        <span>技巧百科</span>
                    </NavLink>
                    <NavLink to="/video">
                        <img src={video} alt="" />
                        <span>视频学堂</span>
                    </NavLink>
                    <NavLink to="/course">
                        <img src={course} alt="" />
                        <span>新手教程</span>
                    </NavLink>
                    <NavLink to="/recipeClass">
                        <img src={recipeClass} alt="" />
                        <span>食谱分类</span>
                    </NavLink>
                </div>
                {/* 推荐部分 */}
                <CookClass props={this.props}></CookClass>

            </div>
        )
    }
    

}
