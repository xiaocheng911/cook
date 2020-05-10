import React, { Component } from 'react'
// import CookClass from '../../../components/cookStudy/CookClass'
import RootRouter from './../../../components/common/RootRouter';
// import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/lib/carousel/style/css'; 
// 引入样式
import style from "../css/video.module.scss"
// 引入图片
import search from "../../../assets/img/cookStudy/search.jpg";
import b1 from "../../../assets/img/cookStudy/b1.jpg";
import b2 from "../../../assets/img/cookStudy/b2.jpg";
import b3 from "../../../assets/img/cookStudy/b3.jpg";
import b4 from "../../../assets/img/cookStudy/b4.jpg";
import b5 from "../../../assets/img/cookStudy/b5.jpg";
import b6 from "../../../assets/img/cookStudy/b6.jpg";

import { NavLink } from 'react-router-dom';
export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cla: [],
            claOpen: false,
            claItem: [],
            data: ['1', '2', '3', '4', '5', '6'],
            imgHeight: 176,
            imgList: [b1, b2, b3, b4, b5, b6]
        }
    }
    render() {

        return (

            <div>
                <div className={style.videoCla}>
                    <div className={style.middleCla}>
                        <NavLink exact activeClassName={style.Aactive} to={"/video"}>
                            推荐
                            <i></i>
                        </NavLink>
                        {
                            this.state.cla.map((v, i) => (
                                <NavLink activeClassName={style.Aactive} to={"/video/c" + i + "?" + v.categoryId} key={v.categoryId}>
                                    {v.title}
                                    <i></i>
                                </NavLink>
                            ))
                        }
                    </div>
                    <img onClick={()=>{
                        this.props.history.push("/search");
                    }} className={style.ss} src={search} alt="" />
                </div>
                    {/* <Carousel
                        autoplay={true}
                        infinite={true}
                        
                    >
                        {this.state.data.map((val, i) => (
                            <a
                                key={val}
                                href='http://localhost:3000/lesson/10589'
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={this.state.imgList[i]}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel> 
                    */}
                <RootRouter router={this.props.childrens}></RootRouter>
            </div>

        )
    }
    async componentDidMount() {
       
        const { data } = await this.$axios.get("/hbb/index/getByType?_t=1588671929336&type=11");
        console.log(data);
        this.setState({
            cla: data
        });
    }
}
