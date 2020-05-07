import React, { Component } from 'react'
import style from "./ZrQuestion.module.css"
import questAnswersCreator from "../../../store/actionCreator/questAnswers/index"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
class ZrQuestion extends Component {

    componentDidMount(){
        if(this.props.zrList.length<1)
            this.props.getZrList()
    }

    render() {
        return (
            <div>
                <div className={style.bigmain}>
                    <main>
                        {this.props.zrList.map(v=>(
                            <div className={style.xiaokuai} key={v.clientId}>
                                <div className={style.yiceng}>{v.coverTitle}</div>
                                <div className={style.erceng}>
                                    <img width="70" src={v.recipe.image} alt="" />
                                    <div className={style.youbian}>
                                        <div>{v.recipe.title}</div>
                                        <div>{v.recipe.clientName}</div>
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
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        zrList:state.questAnswers.zrList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(questAnswersCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ZrQuestion)