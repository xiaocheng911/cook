import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import cookCircleCreactor from "../../../store/actionCreator/cookCircle";
import style from "../css/Master.module.scss";
class Master extends Component {
    getContentPic(imageList) {
        if (imageList.length === 1) {
            return (
                <div className={style.contentPic1}>
                    <a href={imageList}>
                        <img src={imageList} alt="" />
                    </a>
                </div>
            )
        } else if (imageList.length === 4) {
            return (
                <div className={style.contentPic4}>
                    {
                        imageList.map((v, key) => (
                            <a key={key} href={v + "&imageView2/1/w/375/h/375"}>
                                <img src={v + "&imageView2/1/w/375/h/375"} alt="" />
                            </a>
                        ))
                    }
                </div>
            )
        } else if (imageList.length === 2) {
            return (
                <>
                    {
                        imageList.map((v, key) => (
                            <a key={key} href={v + "&imageView2/1/w/375/h/375"}>
                                <img className={style.contentPic2} src={v + "&imageView2/1/w/375/h/375"} alt="" />
                            </a>
                        ))
                    }
                </>
            )
        } else {
            return (
                <>
                    {
                        imageList.map((v, key) => (
                            <a key={key} href={v + "&imageView2/1/w/250/h/250"}>
                                <img className={style.contentPicOther} src={v + "&imageView2/1/w/250/h/250"} alt="" />
                            </a>
                        ))
                    }
                </>
            )
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
    }
    render() {
        return (
            <div>
                <div className={style.bigContent}>
                    {
                        this.props.masterList.map((v, key) => (
                            <div className={style.smallContent} key={key}>
                                <div className={style.contentHeader}>
                                    <div>
                                        <img height="38" src={v.clientImage} alt="" />
                                    </div>
                                    <div>
                                        <p>
                                            {
                                                (v.isMaster === 0) ? "" : (<img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" alt=""></img>)
                                            }
                                            <span>{v.clientName}</span>
                                        </p>
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
                                {
                                    (v.communityName === '' && v.introduce === '') ? '' : (<div className={style.words}>
                                        <span>{v.communityName}</span>
                                        <span>{v.introduce}</span>
                                    </div>)
                                }
                                <div className={style.bigContentPic}>
                                    <div className={style.smallContentPic}>
                                        {
                                            this.getContentPic(v.image)
                                        }
                                    </div>
                                </div>
                                <div className={style.recipe}>
                                    {
                                        v.recipe.clientId === 0 ? '' :
                                            (
                                                <div className={style.erceng}>
                                                    <img width="70" height="70" src={v.recipe.image + "&imageView2/1/w/70/h/70"} alt="" />
                                                    <div className={style.youbian}>
                                                        <div>{v.recipe.title} </div>
                                                        <div>作者：{v.recipe.clientName}</div>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </div>
                                <div className={style.interaction}>
                                    <div className={style.smallInteraction}>
                                        <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" />
                                        <span>{v.likeNum === 0 ? "点赞" : v.likeNum}</span>
                                    </div>
                                    <div className={style.smallInteraction}>
                                        <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt="" />
                                        <span>{v.rewardNum === 0 ? "打赏" : v.rewardNum}</span>
                                    </div>
                                    <div className={style.smallInteraction}>
                                        <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt="" />
                                        <span>{v.commentNum === 0 ? "评论" : v.commentNum}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    this.state.scrollTop > 500 ? (
                        <div className={style.toTop} onClick={() => {
                            document.documentElement.scrollTop = 0;
                        }}>
                            <img src="https://image.hongbeibang.com/FrIiahAq_aEalPRiQP09YjhM9was?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                    ) : ''
                }
            </div>
        )
    }
    getScrollTop() {
        if (!this.props.contentIsLoading) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(222,document.querySelector(".Newest_bigContent__3Qcvx").clientHeight)
            // let contentHeight = document.querySelector(".Master_bigContent__3Qcvx").clientHeight;
            // // console.log(contentHeight + 200 - document.documentElement.scrollTop);

            // if ((contentHeight + 200 - document.documentElement.scrollTop) <= 667.7) {
            //     this.props.getMasterList(this.props.masterPageIndex + 10);
            // }
            this.setState({
                scrollTop
            })
        }
    }
    componentDidMount() {
        this.props.getMasterList();
        // window.addEventListener('scroll', this.getScrollTop.bind(this), true);
        // window.removeEventListener("scroll", this.getScrollTop.bind(this))
    }
    componentWillUnmount() {
        this.setState = function() {
            return false;
        }
    }
}
function mapStateToProps(state) {
    return {
        ...state.cookCircle
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(cookCircleCreactor, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Master);