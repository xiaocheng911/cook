import React, { Component } from 'react'
import GoBack from './../../../components/common/GoBack';
import style from "../css/recipeClass.module.scss"

// 引入图片
import app2 from "../../../assets/img/cookStudy/app2.jpg"

export default class RecipeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adviseCla: [],
            cla: [],
            adviseName: "",
            allCla: [],
            claOpen: false
        }
    }
    render() {

        const claDiv = (
            <div className={style.rightCla}>
                {
                    this.state.allCla.map(v => (
                        <div key={v.classifyId}>
                            <h3>{v.name}</h3>
                            <ol>

                                {
                                    v.list.map(vv => (
                                        <li key={vv.classifyId}>
                                            <img src={vv.image} alt="" />
                                            <div>{vv.name}</div>
                                        </li>
                                    ))
                                }

                            </ol>
                        </div>

                    ))
                }
            </div>
        )

        const adviseCla = (
            <div  className={style.rightCla}>
                {
                    <h3>{this.state.adviseName}</h3>
                }
                <ol>

                    {
                        this.state.adviseCla.map(vv => (
                            <li key={vv.classifyId}>
                                <img src={vv.image} alt="" />
                                <div>{vv.name}</div>
                            </li>
                        ))
                    }

                </ol>
            </div>
        )

        return (
            <div>
                <div className={style.bigSs}>
                    {/* 返回按钮 */}
                    <GoBack props={this.props}></GoBack>

                    {/* 搜索框 */}
                    <div onClick={()=>{
                        this.props.history.push("/search");
                    }} className={style.ss}>
                        <i>搜索食谱/食材</i>
                    </div>
                </div>

                {/* 主体展示 */}
                <div className={style.cla}>
                    {/* 左侧分类 */}
                    <ul >
                        <li onClick={() => {
                            this.setState({
                                claOpen: false,
                                currCla:-1
                            });
                        }} className={this.state.claOpen?"":(style.one)}>推荐</li>
                        {
                            this.state.cla.map((v,i) => (
                                <li onClick={() => {
                                    this.setState({
                                        claOpen: true,
                                        allCla: v.list,
                                        currCla:i
                                    });
                                }} key={v.classifyId}  className={this.state.currCla===i?(style.one):""}>{v.name}</li>
                            ))
                        }

                    </ul>

                    {/* 右侧展示 */}
                    {
                        this.state.claOpen ? claDiv : (this.state.adviseName === "" ? <div>暂无数据</div> : adviseCla)
                    }

                </div>

                {/* 底部app */}
                <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.hongbeibang.app">
                    <img className={style.app} src={app2} alt="" />
                </a>
                
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await this.$axios.get("/hbb/classify/get?_t=1588678332885");
        this.setState({
            cla: data.classify
        })

        const adviseCla = await this.$axios.get("/hbb/classify/getRecommend?_t=1588678715431");
        console.log(adviseCla.data[0]);
        this.setState({
            adviseCla: adviseCla.data[0].classifys,
            adviseName: adviseCla.data[0].name
        })
    }

}
