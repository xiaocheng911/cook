import cookCircleType from "../../actionType/cookCircle";
import axios from "axios";
function changeNewsList(payload) {
    return {
        type: cookCircleType.CHANGE_NEWS_LIST,
        payload
    }
}
function changeCommunityList(payload) {
    return {
        type:cookCircleType.CHANGE_COMMUNITY_LIST,
        payload
    }
}
function changeContentList(payload) {
    // console.log("hhh",payload)
    return {
        type:cookCircleType.CHANGE_CONTENT_LIST,
        payload
    }
}
export default {
    getNewsList() {
        return async (dispatch) => {
            const { data } = await axios.get("/hbb/feed/getCategory")
            dispatch(changeNewsList(data.category[0].item))
        }
    },
    getCommunity() {
        return async (dispatch) => {
            // community/getByLimit?isShow=4&pageIndex=0&pageSize=99
            const {data} = await axios.get("/hbb/community/getByLimit",{
                params:{
                    isShow:4,
                    pageIndex:0,
                    pageSize:99
                }
            })
            dispatch(changeCommunityList(data.data))
        }
    },
    getContent(pageIndex=0) {
        return async (dispatch) => {
            // console.log("pageIndex",pageIndex)
            // https://api.hongbeibang.com/v2/feed/getNew?&pageIndex=0&pageSize=10
            const {data} = await axios.get("/hbb/v2/feed/getNew",{
                params:{
                    pageIndex,
                    pageSize:10
                }
            })
            console.log(data.content)
            dispatch(changeContentList({
                contentList:data.content,
                contentPageIndex:pageIndex
            }));
        }
    }
}