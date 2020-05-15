import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cookStudy from "../../store/actionCreator/cookStudy"
import { withRouter } from 'react-router-dom';
import Loading from "../common/Loading"

// 引入样式
import style from "../../views/cookStudy/css/cookClass.module.scss"


// 引入图片
// import b1 from "../../assets/img/cookStudy/b1.jpg";
// import b2 from "../../assets/img/cookStudy/b2.jpg";
// import b3 from "../../assets/img/cookStudy/b3.jpg";
// import b4 from "../../assets/img/cookStudy/b4.jpg";
// import b5 from "../../assets/img/cookStudy/b5.jpg";
// import b6 from "../../assets/img/cookStudy/b6.jpg";

class CookClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            advise: [],
            isLoading:true
        };
    }
    render() {
        const { category, advise } = this.props;

        const xuanran =(
            
            <div>
                <div className={style.main}>
                    {
                        <div className={style.cla}>
                            
                            <h2>
                                推荐课程
                            </h2>
                            <div className={style.xxx}>
                                <div>
                                    {
                                        advise.map(vv => (
                                            <section onClick={() => {
                                                this.props.history.push(`/lesson/${vv.courseId}`);
                                                console.log(111, this.props)
                                            }} key={vv.courseId}>
                                                <img src={vv.coverImage} alt="" />
                                                <i>{vv.buyNum < 1000 ? vv.buyNum : "1000+"}  在学</i>
                                                <h3>{vv.title}</h3>
                                            </section>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    {
                        category.map(v => (
                            <div key={v.categoryId} className={style.cla}>
                                <h2>
                                    {v.title}
                                </h2>
                                <div className={style.xxx}>
                                    <div>
                                        {
                                            v.item.map(vv => (
                                                <section onClick={() => {
                                                    this.props.history.push(`/lesson/${vv.educationCourseId}`);
                                                    console.log(111, this.props)
                                                }} key={vv.categoryItemId}>
                                                    <img src={vv.verticalImages[0]} alt="" />
                                                    <i>{vv.buyNum < 1000 ? vv.buyNum : "1000+"}  在学</i>
                                                    <h3>{vv.title}</h3>
                                                </section>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )

        return this.state.isLoading ?  <Loading></Loading> : xuanran

    }
    componentDidMount() {
        
        this.props.getCat.call(this);
        this.props.getAdv.call(this);
        
    }
}

function mapStateToProps({ cookStudy }) {
    return {
        category: cookStudy.category,
        advise: cookStudy.advise
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(cookStudy, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CookClass))