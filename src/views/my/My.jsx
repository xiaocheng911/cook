import React, { Component } from 'react'

// 引入样式
import style from "./css/my.module.scss";
// 引入图片
import setting from "../../assets/img/my/setting.jpg";
import head from "../../assets/img/my/head.jpg";
import sex1 from "../../assets/img/my/sex1.jpg";
import shield from "../../assets/img/my/shield.jpg";
import go from "../../assets/img/cookStudy/go.jpg";
import work from "../../assets/img/my/work.jpg";
import recipe from "../../assets/img/my/recipe.jpg";
import collect from "../../assets/img/my/collect.jpg";
import qa from "../../assets/img/my/qa.jpg";
import my1 from "../../assets/img/my/my1.jpg";
import my2 from "../../assets/img/my/my2.jpg";
import my3 from "../../assets/img/my/my3.jpg";
import my4 from "../../assets/img/my/my4.jpg";
import my5 from "../../assets/img/my/my5.jpg";
import my6 from "../../assets/img/my/my6.jpg";
import my7 from "../../assets/img/my/my7.jpg";
// 引入插件
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';   
function offline() {
    Toast.offline('小窝功能还在开发中...', 2);
}

export default class My extends Component {
    render() {
        return (
            <div onClick={offline} className={style.big}>

                {/* 头部 */}
                <header>
                    <img src={setting} alt="" />
                </header>

                {/* 个人信息 */}
                <div className={style.myinfo}>
                    <img className={style.head} src={head} alt="" />
                    <div className={style.headright}>
                        <h1>
                            帅气小程
                            <img className={style.sex} src={sex1} alt="" />
                            <img className={style.shield} src={shield} alt="" />
                        </h1>
                        <h2>
                            ID：8r8220200420115731441
                            <img src={go} alt="" />
                        </h2>
                        <h3>
                            经验值: 30/100
                            <div><span></span></div>
                        </h3>
                    </div>
                </div>
                {/* 个人数据 */}
                <div className={style.data}>
                    <section>
                        <div>0</div>
                        关注
                    </section>
                    <section>
                        <div>0</div>
                        粉丝
                    </section>
                    <section className={style.noborder}>
                        <div>0</div>
                        帮贡
                    </section>
                </div>

                {/* 个人选项 */}
                <div className={style.option}>
                    <section>
                        <img src={work} alt="" />
                        作品
                    </section>
                    <section>
                        <img src={recipe} alt="" />
                        食谱
                    </section>
                    <section>
                        <img src={collect} alt="" />
                        收藏
                    </section>
                    <section>
                        <img src={qa} alt="" />
                        问答
                    </section>
                </div>

                {/* 功能 1 */}
                <ul>
                    <li>
                        <img src={my1} alt=""/>
                        勋章库
                        <img className={style.go} src={go} alt=""/>
                    </li>
                    <li>
                        <img src={my2} alt=""/>
                        精彩活动
                        <img className={style.go} src={go} alt=""/>
                    </li>
                    <li>
                        <img src={my3} alt=""/>
                        每日签到
                        <img className={style.go} src={go} alt=""/>
                    </li>
                    <li className={style.noborder}>
                        <img src={my4} alt=""/>
                        我的课程
                        <img className={style.go} src={go} alt=""/>
                    </li>
                </ul>

                {/* 功能 2 */}
                <ul className={style.last}>
                    <li>
                        <img src={my5} alt=""/>
                        浏览记录
                        <img className={style.go} src={go} alt=""/>
                    </li>
                    <li>
                        <img src={my6} alt=""/>
                        达人申请
                        <img className={style.go} src={go} alt=""/>
                    </li>
                    <li className={style.noborder}>
                        <img src={my7} alt=""/>
                        帮贡兑换
                        <img className={style.go} src={go} alt=""/>
                    </li>
                </ul>

                {/* 空白 */}
                <div className={style.white}></div>
            </div>
        )
    }
}
