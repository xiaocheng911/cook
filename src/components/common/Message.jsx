import React, { Component } from 'react'
import GoBack from './GoBack';

import style from "../../assets/style/message.module.scss"
// 引入图片
import go from "../../assets/img/cookStudy/go.jpg"
import mes1 from "../../assets/img/cookStudy/mes1.jpg"
import mes2 from "../../assets/img/cookStudy/mes2.jpg"
import mes3 from "../../assets/img/cookStudy/mes3.jpg"
import mes4 from "../../assets/img/cookStudy/mes4.jpg"
import mes5 from "../../assets/img/cookStudy/mes5.jpg"

export default class Message extends Component {
    render() {
        return (
            <div className={style.big}>
                <GoBack props={this.props}></GoBack>
                <span>消息</span>
                <ul>
                    <li>
                        <img src={mes1} alt="" />
                        <div>
                            <img src={go} alt=""/>
                            <h1>评论、作业</h1>
                            <h2>回复帮友评论能获得更高人气</h2>
                        </div>
                    </li>
                    <li>
                        <img src={mes2} alt="" />
                        <div>
                            <img src={go} alt=""/>
                            <h1>点赞、收藏</h1>
                            <h2>来自你的作品、食谱</h2>
                        </div>
                    </li>
                    <li>
                        <img src={mes3} alt="" />
                        <div>
                            <img src={go} alt=""/>
                            <h1>打赏</h1>
                            <h2>有人【打赏/答谢】了你，快看看吧</h2>
                        </div>
                    </li>
                    <li>
                        <img src={mes4} alt="" />
                        <div>
                            <img src={go} alt=""/>
                            <h1>问答</h1>
                            <h2>有人回答了你的问题or评论了你</h2>
                        </div>

                    </li>
                    <li>
                        <img src={mes5} alt="" />
                        <div>
                            <img src={go} alt=""/>
                            <h1>官方消息 <span>官方</span></h1>
                            <h2>系统消息 ｜22小时前</h2>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
