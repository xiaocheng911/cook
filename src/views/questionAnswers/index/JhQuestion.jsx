import React, { Component } from 'react'
import style from "./jhQuestion.module.css"
import {bindActionCreators} from "redux"
import questAnswersCreator from "../../../store/actionCreator/questAnswers/index"
import {connect} from "react-redux"
class JhQuestion extends Component {

    componentDidMount(){
        if(this.props.jhList.length<1)
            this.props.getJhList()
    }
    
    render() {
        return (
               
            <div className={style.bigmain}>
                <main>   
                    {this.props.jhList.map(v=>(
                        <div className={style.xiaokuai} key={v.clientId}>
                            <div className={style.yiceng}>
                                <div>
                                    <img height="38" src={v.clientImage} alt="" />
                                </div>
                            <div>{v.clientName}</div>                
                            </div>
                            <div className={style.erceng}>
                                {v.coverTitle}
                            </div>
                            <div className={style.sanceng}>
                                {v.coverSummary}
                            </div>
                            <div className={style.siceng}>
                                {v.likeNum} 个赞
                            </div>
                        </div>     
                    ))}     
                                   
                </main>
            </div>            
        )
    }
}

function mapStateToProps(state){    
    return {
        jhList:state.questAnswers.jhList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(questAnswersCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(JhQuestion)
