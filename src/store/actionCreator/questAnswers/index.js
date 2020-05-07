import questAnswersType from "../../actionType/questAnswers/index"
import axios from "axios"
// 获取最新列表------------------------------
function changeZxList(payload){
    return{
        type:questAnswersType.CHANGE_GET_ZX,
        payload
    }

}
// 获取精华提问--------------------------------
function changeJhList(payload){
    return{
        type:questAnswersType.CHANGE_GET_JH,
        payload
    }
}
// 获取最热列表------------------------------------
function changeZrList(payload){
    return{
        type:questAnswersType.CHANGE_GET_ZR,
        payload
    }
}


export default {

    // 获取最新列表------------------------------
    getZxList(){
        // https://api.hongbeibang.com/question/getNew?pageIndex=0&pageSize=10
        return async (dispatch)=>{

            const data = await axios.get("/hbb/question/getNew",{
                params:{
                    pageIndex:0,
                    pageSize:5
                }                
            })
            console.log(data.data.content.data)
            dispatch(changeZxList(data.data.content.data))
        }
    },

    // 获取精华提问--------------------------------
    getJhList(){
        // https://api.hongbeibang.com/question/getEssence?pageIndex=0&pageSize=10
        return async (dispatch)=>{
            const data = await axios.get("/hbb/question/getEssence",{
                params:{
                    pageIndex:0,
                    pageSize:5
                }   
            }) 
            dispatch(changeJhList(data.data.content.data))
        }
    },
    // 获取最热列表---------------------------------------
    getZrList(){
    // https://api.hongbeibang.com/question/getHot?_t=1588854928674&csrfToken=&pageIndex=10&pageSize=10
        return async (dispatch)=>{
            const data = await axios.get("/hbb/question/getHot",{
                params:{
                    pageIndex:0,
                    pageSize:5 
                }
            })
            console.log(data.data.content.data)
            dispatch(changeZrList(data.data.content.data))
        }
    }




}