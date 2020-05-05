import React, { Component } from 'react'
import GoBack from '../../../components/common/GoBack'
import style from "../css/skill.module.scss"
import app from "../../../assets/img/cookStudy/app.jpg"

export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guide: []
        }
    }
    render() {
        return (
            <div>

                {/* 返回按钮 */}
                <GoBack props={this.props}></GoBack>

                <div className={style.skill}>
                    <ul>
                        {
                            this.state.guide.map(v => (
                                <li key={v.contentId}>
                                    <img src={v.image} alt="" />
                                    <span>{v.title}</span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <img className={style.app} src={app} alt=""/>
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await this.$axios.get("/hbb/education/getNewbieGuide?type=5&_t=1588664743839");
        let arr = data.courseGuide;
        arr.splice(6);
        this.setState({
            guide: arr
        })

    }
}
