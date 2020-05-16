import React, { Component } from 'react'
// 引入样式
import style from "../css/course.module.scss"

// 引入图片
import men from "../../../assets/img/cookStudy/men.jpg"
import onSmall from "../../../assets/img/cookStudy/v_on_small.jpg"
import go from "../../../assets/img/cookStudy/go.jpg"
import x from "../../../assets/img/cookStudy/x.jpg";
// import loading from "../../../assets/img/loading.gif";
import ccc from "../../../assets/img/cookStudy/course1.jpg"
import more from "../../../assets/img/cookStudy/moreLesson.jpg"
import qqq from "../../../assets/img/cookStudy/qqqq.jpg"

// 引入插件
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';
function offline() {
    Toast.offline('功能还在开发中...', 2);
}

export default class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            introduces: [],
            str: "",
            serOpen: false,
            re: /<[^<>]+>/ig
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
            <div className={style.big}>

                {/* 视频部分 */}
                <div className={style.video}>
                    <img src={ccc} alt="" />
                    <div>
                        <h1>
                            {this.state.info.shareTitle}
                        </h1>
                        <h2>
                            <img src={men} alt="" />
                            <span>{this.state.info.buyNum > 1000 ? "1000+" : (this.state.info.buyNum)}</span>
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
                    this.state.serOpen ? dl :
                        <div className={style.three}>
                            {
                                this.state.info === {} ? "" : this.state.introduces.map(v => (
                                    <div key={v.educationCourseSummaryExtendId}>
                                        <h2>{v.title}</h2>
                                        <div>
                                            {
                                                v.introduce.replace(this.state.re, '')
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
                {/* 底部 */}
                <div className={style.bottom}>
                    <span onClick={() => {
                        this.props.history.push(`/video`);
                    }}>
                        <img src={more} alt="" />
                        <div>更多课程</div>
                    </span>
                    <span onClick={offline}>
                        <img src={qqq} alt="" />
                        <div>咨询</div>
                    </span>
                    <b onClick={offline}>￥29 购买专栏</b>
                </div>
            </div>

        )
    }

    async componentDidMount() {
        console.log(this.props.match.params.id);// https://www.hongbeibang.com/lessonSeries?contentId=10533
        const { data } = await this.$axios.get(`/hbb/education/getCourse?_t=1589588538562&educationCourseId=10533`);
        console.log(data);
        console.log((data.introduces[0].introduce));
        this.setState({
            info: data,
            introduces: data.introduces,
        })
    }
}
