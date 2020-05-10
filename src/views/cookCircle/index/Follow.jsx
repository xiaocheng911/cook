import React, { Component } from 'react';
import style from "../css/Follow.module.scss";
export default class Follow extends Component {
    render() {
        return (
            <div className={style.follow}>
                <div className={style.noFollow}>暂无关注</div>
            </div>
        )
    }
}
