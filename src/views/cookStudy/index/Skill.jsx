import React, { Component } from 'react'
import GoBack from '../../../components/common/GoBack'
import style from "../css/skill.module.scss"
import app from "../../../assets/img/cookStudy/app.jpg"

import cookStudy from "../../../store/actionCreator/cookStudy";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guide: []
        }
    }
    render() {
        const { guide } = this.props;
        return (
            <div>
                {/* 返回按钮 */}
                <GoBack props={this.props}></GoBack>

                <div className={style.skill}>
                    <ul>
                        {
                            guide.map(v => (
                                <li key={v.contentId}>
                                    <img src={v.image} alt="" />
                                    <span>{v.title}</span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.hongbeibang.app">
                    <img className={style.app} src={app} alt="" />
                </a>

            </div>
        )
    }

    componentDidMount() {
        this.props.getGuide.call(this);
    }
}

function mapStateToProps({ cookStudy }) {
    return {
        guide: cookStudy.guide
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(cookStudy, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Skill)