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

const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="am-icon am-icon-lg">
        <path fillRule="evenodd" d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" />
    </svg>
);

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
