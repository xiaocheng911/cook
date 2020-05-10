import React, { Component } from 'react'
import GoBack from './GoBack';

import style from "../../assets/style/message2.module.scss"
// 引入图片

export default class Message extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        // const spanList = [
        //     <span>评论、作业</span>,
        //     <span>点赞、收藏</span>,
        //     <span>打赏</span>,
        //     <span>问答消息</span>,
        //     <span>官方消息</span>
        // ]

        return (
            <div className={style.big}>
                <GoBack props={this.props}></GoBack>
                <span>消息</span>
                aaa
            </div>
        )
    }

    componentDidMount(){
        console.log(111);
        console.log(this.props);
    }
}
