import React, { Component } from 'react'
import style from "./ZrQuestion.module.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import questAnswersCreator from "../../../store/actionCreator/questAnswers/index"
import img from "../../../assets/img/loading.gif"
import Loading from "../../../components/common/Loading"
class ZxQuestion extends Component {
    constructor(){
        super()
        this.state ={
            isloading:true
        }
    }
    componentDidMount(){   
        this.setState({
            isloading:true
        },function(){
           
            this.props.getZxList(this)        
         
        })
            
    }

    render() {
        const xuanran = (
            <div className={style.bigmain}>
                <main>  
                    {this.props.questAnswers.zxList.map(v=>(
                        <div className={style.xiaokuai} key={v.contentId}>
                            <div className={style.yiceng}>{v.title} </div>                            
                            <div className={style.erceng}>
                                <img width="70" height="70" src={v.recipe.image} alt="" />
                                <div className={style.youbian}>
                                    <div>{v.recipe.clientName} </div>
                                    <div>作者：{v.recipe.title}</div>
                                </div>
                            </div>                                                         
                            <div className={style.sanceng}>
                                {v.answerNum>0 ? <div style={{color:"#999999"}}>{v.answerNum+"个回答"}</div> : <div>暂无回答</div>}
                                <div>
                                    <div className={style.scyoubian}>
                                        <img width="19" src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt="" />
                                    </div>
                                    <span>写答案</span>
                                </div>
                            </div>                                             
                        </div>
                    ))}                                                                     
                </main>
            </div>         
        )
        return   this.state.isloading ? <img  className={style.image} src={img}></img> : xuanran 
    }
}
function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(questAnswersCreator,dispatch)
}

export default  connect(mapStateToProps,mapDispatchToProps)(ZxQuestion)
