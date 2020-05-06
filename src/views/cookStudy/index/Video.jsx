import React, { Component } from 'react'
import CookClass from '../../../components/cookStudy/CookClass'
import style from "../css/video.module.scss"
import search from "../../../assets/img/cookStudy/search.jpg"
// import { NavLink } from 'react-router-dom';
export default class Video extends Component {
    constructor(props){
        super(props);
        this.state = {
            cla:[],
            claOpen:false,
            claItem:[]
        }
    }
    render() {

        const claItem = (
            this.state.claItem.map(vv=>(
                <div key={vv.categoryItemId} className={style.item}>
                    <section>
                        <img src={vv.verticalImages[0]} alt=""/>
                        <div>{vv.title}</div>
                    </section>
                </div>
            ))
        )

        return (
            <div>
                <div className={style.videoCla}>
                    <div>
                        <span onClick={()=>{
                            this.setState({
                                claOpen:false
                            })
                        }}>推荐</span>
                        {
                            this.state.cla.map(v=>(
                                <span onClick={async ()=>{
                                    console.log(this)
                                    this.setState({
                                        claOpen:true
                                    })
                                    const {data} = await this.$axios.get(`/hbb/index/getIndexItem?_t=1588673301274&categoryId=${v.categoryId}`);
                                    console.log(data);

                                    this.setState({
                                        claItem:data
                                    });
                                }} key={v.categoryId}>{v.title}</span>
                                
                            ))
                        
                        }
                        <i></i>
                    </div>
                    <img className={style.ss} src={search} alt=""/>
                </div>
                {
                    // 教程展示
                    this.state.claOpen?claItem:<CookClass/>
                }
                
            </div>
        )
    }
    async componentDidMount(){
        const {data} = await this.$axios.get("/hbb/index/getByType?_t=1588671929336&type=11");
        console.log(data);
        this.setState({
            cla:data
        });
    }
}
