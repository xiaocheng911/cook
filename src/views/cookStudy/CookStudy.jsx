import React, { Component } from 'react'
import style from "./css/cookStudy.module.scss"
import { NavLink } from 'react-router-dom';
import Add from './index/Add';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: []
        };
    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <header >
                    <div id={style.bigsearch}>
                        <div className={style.search}>
                            <div>
                                <NavLink to="/add">
                                    <img width="27" src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" />
                                </NavLink>
                            </div>
                            <div>
                                <i>搜索食谱/食材</i>
                            </div>
                            <div>
                                <img width="27" src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
                            </div>
                        </div>
                    </div>
                </header>
                {/* 导航栏 */}
                <div className={style.nav}>
                    <div>
                        <img src="https://image.hongbeibang.com/FqTIqQgUiGzbGvFBjYJyJRIvmb7W?80X80&imageView2/1/w/80/h/80" alt="" />
                        <span>技巧百科</span>
                    </div>
                    <div>
                        <img src="https://image.hongbeibang.com/FsdwLQX6d3HCUvTO6krgAvL12e5z?80X80&imageView2/1/w/80/h/80" alt="" />
                        <span>视频学堂</span>
                    </div>
                    <div>
                        <img src="https://image.hongbeibang.com/Ftas3mziKsE3fMQvZ3jC4YgDugVk?80X80&imageView2/1/w/80/h/80" alt="" />
                        <span>新手教程</span>
                    </div>
                    <div>
                        <img src="https://image.hongbeibang.com/FqkRcAKpMnFUL3qs1BB9aOhbihlj?80X80&imageView2/1/w/80/h/80" alt="" />
                        <span>食谱分类</span>
                    </div>
                </div>
                {/* 推荐部分 */}
                <div className={style.main}>
                    {
                        this.state.category.map(v => (
                            <div key={v.categoryId} className={style.cla}>
                                <h2>
                                    {v.title}
                                </h2>
                                <div className={style.xxx}>
                                    <div>
                                        {
                                            v.item.map(vv => (
                                                <section key={vv.categoryItemId}>
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
    }
    async componentDidMount() {
        const { data } = await this.$axios.get("/hbb/education/getIndexByWeb?_t=1588577321865");
        const category = data.category;
        console.log(category)
        this.setState({
            category
        });

        // const data2 = await this.$axios.get("/hbb/recommend/getRandContent?_t=1588577321861&type=3&pageSize=10")
        // const advise = data2.data;
        // console.log(advise);
        // const cate = this.state.category.splice(0,1);
        // const arr = [
        //     advise,
        //     ...this.state.category
        // ];
        // console.log(arr)
        // this.setState({
        //     category:[
        //         advise,
        //         ...this.state.category.splice(0,1)
        //     ]
        // })
    }
}
