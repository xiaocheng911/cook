import React, { Component } from 'react'
import style from "../css/add.module.scss"
import GoBack from '../../../components/common/GoBack';
import addRecipe from "../../../assets/img/cookStudy/addRecipe.jpg"
import addWork from "../../../assets/img/cookStudy/addWork.jpg"
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';   
function offline() {
    Toast.offline('功能还在开发中...', 2);
}

export default class Add extends Component {

    render() {
        return (
            <div className={style.add}>
                <GoBack props={this.props}></GoBack>
                <div onClick={offline}>
                    <img className={style.one} src={addRecipe} alt="" />
                    <img className={style.two} src={addWork} alt="" />
                    <span className={style.s1}>上传食谱</span>
                    <span className={style.s2}>上传作品</span>
                    <div className={style.box}>草稿箱</div>
                </div>

            </div>
        )
    }
}
