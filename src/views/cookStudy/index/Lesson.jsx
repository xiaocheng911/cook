import React, { Component } from 'react'

// 引入样式
import style from "../css/lesson.module.scss"

// 引入图片
import men from "../../../assets/img/cookStudy/men.jpg"
import onSmall from "../../../assets/img/cookStudy/v_on_small.jpg"

export default class Lesson extends Component {
    constructor(props){
        super(props);
        this.state = {
            info:{}
        }
    }
    render() {
        return (
            <div className={style.big}>

                {/* 视频部分 */}
                <div className={style.video}>
                    <video poster={this.state.info.playURL} controls
                        autoPlay={true} >
                        <source
                            // src={this.state.info.playURL2}
                            src={"https://alivideo.hongbeibang.com/daxue-2019-3-29-16-6-44-courseId_10481-h264?auth_key=1588777607-6986345644078477031-0-7db0e00eaa1477852b8101d0f7ee2bce"}
                            type="video/mp4" />

                    </video>
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
                <ul>
                    <li> <i></i> <span>永久回看</span></li>
                    <li> <i></i> <span>报名即学</span></li>
                    <li> <i></i> <span>自营课程</span></li>
                    <li> <i></i> <span>高效学习体验</span></li>
                    <li> <i></i> <span>分步骤学</span></li>
                    <li> <i></i> <span>唯一品类</span></li>
                    <li> <i></i> <span>图片下载</span></li>
                    <li> <i></i> <span>工具材料参考</span></li>
                </ul>
            
                <div className={style.three}>暂略...</div>
            </div>
        )
    }

    async componentDidMount(){
        console.log(this.props.match.params.id);
        //                                      /education/getCourse?_t=1588687642825&educationCourseId=10481
        const {data} = await this.$axios.get(`/hbb/education/getCourse?_t=1588688352996&educationCourseId=${this.props.match.params.id}`);
        console.log(data);
        console.log(this.state.info)
        this.setState({
            info:data
        },()=>{
            console.log(this.state.info.playURL2)
        })

    }
}
