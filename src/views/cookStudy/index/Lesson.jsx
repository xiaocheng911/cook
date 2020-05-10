import React, { Component } from 'react'
// import { Player } from 'video-react';
// import "video-react/dist/video-react.css";
// 引入样式
import style from "../css/lesson.module.scss"

// 引入图片
import men from "../../../assets/img/cookStudy/men.jpg"
import onSmall from "../../../assets/img/cookStudy/v_on_small.jpg"
import go from "../../../assets/img/cookStudy/go.jpg"
import x from "../../../assets/img/cookStudy/x.jpg";
import loading from "../../../assets/img/loading.gif"

export default class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            introduces: [],
            str: "",
            serOpen: false
        }
    }
    render() {
        const dl = (
            <dl>
                <dt>
                    服务
                    <img onClick={() => {
                        this.setState({
                            serOpen: false
                        })
                    }} src={x} alt="" />
                </dt>
                <dd>
                    <h4>永久无限次回看</h4>
                    <h5>课程视频支持永久回看，不限次数。</h5>
                </dd>
                <dd>
                    <h4>购买后即看</h4>
                    <h5>报名后即刻观看视频，随时随地即学即做。</h5>
                </dd>
                <dd>
                    <h4>烘焙帮自营课程</h4>
                    <h5>课程/视频/课件均为烘焙帮原创自制，品质保证。</h5>
                </dd>
                <dd>
                    <h4>高效的学习体验</h4>
                    <h5>课程精心录制、剪辑，剔除无效内容，让学习更高效。</h5>
                </dd>
                <dd>
                    <h4>分步骤学习</h4>
                    <h5>课程视频分步骤学习，成功率更高。</h5>
                </dd>
                <dd>
                    <h4>专注打造唯一品类</h4>
                    <h5>每个品类只有一个课程，为你提供更好的配方与做法，持续优化迭代。</h5>
                </dd>
                <dd>
                    <h4>图片素材下载</h4>
                    <h5>提供高清图片素材，方便私房及商用宣传。</h5>
                </dd>
                <dd>
                    <h4>工具材料参考</h4>
                    <h5>提供工具/材料采购参考链接，让学习更便捷。</h5>
                </dd>
            </dl>
        )
        return (
            this.state.info === {} ? 
            <img className={style.loading} src={loading} alt="" /> :
            (
                <div className={style.big}>

                    {/* 视频部分 */}
                    <div className={style.video}>
                        {
                            this.state.str === "" ? <div></div> : (
                                <video poster={this.state.info.image} controls
                                    autoPlay>
                                    <source
                                        src={this.state.info.playURL2}
                                        type="video/mp4" />
                                </video>
                            )
                        }

                        <div>
                            <h1>
                                {this.state.info.shareTitle}
                            </h1>
                            <h2>
                                <img src={men} alt="" />
                                <span>{this.state.info.buyNum}</span>
                                人在学
                                <b>
                                    <img src={onSmall} alt="" />
                                    试看课程
                                </b>
                            </h2>

                        </div>

                    </div>

                    {/* 服务部分 */}
                    <ul onClick={() => {
                        this.setState({
                            serOpen: true
                        })
                    }}>
                        <li> <i></i> <span>永久回看</span></li>
                        <li> <i></i> <span>报名即学</span></li>
                        <li> <i></i> <span>自营课程</span></li>
                        <li> <i></i> <span>高效学习体验</span></li>
                        <li> <i></i> <span>分步骤学</span></li>
                        <li> <i></i> <span>唯一品类</span></li>
                        <li> <i></i> <span>图片下载</span></li>
                        <li> <i></i> <span>工具材料参考</span></li>
                        <img src={go} alt="" />
                    </ul>

                    {/* 服务详情部分 */}
                    {
                        this.state.serOpen ? dl : ""
                    }

                    <div className={style.three}>
                        {
                            this.state.info === {} ? "" : this.state.introduces.map(v => (
                                <div key={v.educationCourseSummaryExtendId}>
                                    <h2>{v.title}</h2>
                                    <div>
                                        {/* {v.introduce} */}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            )
        )


    }



    async componentDidMount() {
        console.log(this.props.match.params.id);
        const { data } = await this.$axios.get(`/hbb/education/getCourse?_t=1588688352996&educationCourseId=${this.props.match.params.id}`);
        console.log(data);
        console.log((data.introduces[0].introduce));
        const str = data.playURL2;
        this.setState({
            info: data,
            introduces: data.introduces,
            str
        })

    }
}
