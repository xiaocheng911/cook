import React, { Component } from 'react'
import GoBack from './../../../components/common/GoBack';
import style from "../css/search.module.scss"
import axios from "axios"

// 引入插件
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';   
function offline() {
    Toast.offline('搜索功能还在开发中...', 2);
}

export default class Search extends Component {

    constructor(){
        super()
        this.state={
            searchList:[]
        }
    }

    async componentDidMount(){
        // https://api.hongbeibang.com/keyword/detail?_t=1588867554292&csrfToken=
        const data = await axios.get("/hbb/keyword/detail")
        this.setState({
            searchList:data.data.popularSearch
        })
    }
    render() {
        return (
            <div>                
                <div className={style.header}>                    
                    <GoBack props={this.props}></GoBack>                    
                    <div><input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全"/></div>                    
                    <span onClick={offline}>搜索</span>                    
                </div>
                <div className={style.rmsearch}>热门搜索</div> 
                
                <div className={style.content}>
                {this.state.searchList.map(v=>(
                    <section onClick={offline} key={v.popularSearchId}>{v.keyword}</section>
                ))}                    
                </div>               
            </div>
        )
    }
}
