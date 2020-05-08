import React, { Component } from 'react'
import style from "../css/Newest.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cookCircleCreactor from "../../../store/actionCreator/cookCircle";
import One from "../../../components/cookCircle/CookCircleMore";
class Newest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        }
    }
    getContentPic(imageList) {
        if (imageList.length === 1) {
            return (
                <div className={style.contentPic1}>
                    <img src={imageList} alt="" />
                </div>
            )
        } else if (imageList.length === 4) {
            return (
                <div className={style.contentPic4}>
                    {
                        imageList.map((v, key) => (
                            <img src={v + "&imageView2/1/w/375/h/375"} key={key} alt="" />
                        ))
                    }
                </div>
            )
        } else if (imageList.length === 2) {
            return (
                <>
                    {
                        imageList.map((v, key) => (
                            <img className={style.contentPic2} src={v + "&imageView2/1/w/375/h/375"} key={key} alt="" />
                        ))
                    }
                </>
            )
        } else {
            return (
                <>
                    {
                        imageList.map((v, key) => (
                            <img className={style.contentPicOther} src={v + "&imageView2/1/w/250/h/250"} key={key} alt="" />
                        ))
                    }
                </>
            )
        }
    }
    render() {
        // console.log(111,document.documentElement.scrollTop)
        return (
            <div>
                {/* <div className={style.bigNews}>
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
                </div> */}

                <One {...this.props}></One>

                {/* {
                    
                    this.state.scrollTop > 500 ? (
                        <div className={style.toTop} onClick={() => {
                            document.documentElement.scrollTop = 0;
                        }}>
                            <img src="https://image.hongbeibang.com/FrIiahAq_aEalPRiQP09YjhM9was?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                    ) : ''
                } */}
            </div>
        )
    }
    // getScrollTop() {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //     // console.log(222,document.querySelector(".Newest_bigContent__3Qcvx").clientHeight)
    //     let contentHeight = document.querySelector(".Newest_bigContent__3Qcvx").clientHeight;
    //     console.log(contentHeight + 200 - document.documentElement.scrollTop);
    //     if((contentHeight + 200 - document.documentElement.scrollTop) <= 667.7) {
    //         this.props.getContent(this.props.contentPageIndex + 10)
    //     }
    //     this.setState({
    //         scrollTop
    //     })
    // }
    componentDidMount() {
        this.props.getNewsList();
        this.props.getCommunity();
        this.props.getContent();
        // window.addEventListener('scroll', this.getScrollTop.bind(this), true);
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