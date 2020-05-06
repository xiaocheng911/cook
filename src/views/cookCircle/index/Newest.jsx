import React, { Component } from 'react'
import style from "../css/Newest.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cookCircleCreactor from "../../../store/actionCreator/cookCircle";
class Newest extends Component {
    render() {
        return (
            <div>
                <div className={style.bigNews}>
                    <div className={style.smallNews}>
                        {
                            this.props.newsList.map(v => (
                                <div className={style.pic} key={v.categoryItemId}>
                                    <img src={v.image} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={style.bigCommunity}>
                    <div className={style.smallCommunity}>
                        {
                            this.props.communityList.map(v => (
                                <div className={style.community} key={v.communityId}>{v.name}</div>
                            ))
                        }
                    </div>
                </div>

                <div className={style.bigContent}>
                    {
                        this.props.contentList.map(v => (
                            <div className={style.smallContent} key={v.contentId}>
                                <div className={style.contentHeader}>
                                    <div>
                                        <img src={v.clientImage} alt="" />
                                    </div>
                                    <div>
                                        <p>{v.clientName}</p>
                                        <h4>
                                            <span>{
                                                (Date.now() - (new Date(v.createTime)).getTime()) > 60000 ?
                                                    parseInt((Date.now() - (new Date(v.createTime)).getTime()) / 60000) + "分钟" :
                                                    parseInt((Date.now() - (new Date(v.createTime)).getTime()) / 1000) + "秒"
                                            }前</span>
                                            <span>{v.coverTitle}</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getNewsList();
        this.props.getCommunity();
        this.props.getContent();
    }
}
function mapStateToProps(state) {
    return {
        ...state.cookCircle
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(cookCircleCreactor, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Newest)