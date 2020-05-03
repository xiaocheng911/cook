import questAnswersInit from "../../state/questAnswers/index"
import questAnswersType from "../../actionType/questAnswers/index"
export default function(state=questAnswersInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state))

    // 获取精华列表----------------------
    if(type===questAnswersType.CHANGE_GET_JH){
        state.jhList =[
            ...state.jhList,
            ...payload
        ]
    }
    
    // 获取最新列表--------------------
    if(type===questAnswersType.CHANGE_GET_ZX){
        state.zxList = [
            ...state.zxList,
            ...payload
        ] 
    }    
    return state
}