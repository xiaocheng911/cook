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
        type: cookCircleType.CHANGE_COMMUNITY_LIST,
        payload
    }
}
function changeContentList(payload) {
    // console.log("hhh",payload)
    return {
        type: cookCircleType.CHANGE_CONTENT_LIST,
        payload
    }
}
function changeIsLoading(payload) {
    console.log("payload",payload)
    return {
        type:cookCircleType.CHANGE_IS_LOADING,
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
            const { data } = await axios.get("/hbb/community/getByLimit", {
                params: {
                    isShow: 4,
                    pageIndex: 0,
                    pageSize: 99
                }
            })
            dispatch(changeCommunityList(data.data))
        }
    },
    getContent(isLoading = false, pageIndex = 0) {
        return isLoading ? {} : async (dispatch) => {
            dispatch(changeIsLoading(true));
            const { data } = await axios.get("/hbb/v2/feed/getNew", {
                params: {
                    pageIndex,
                    pageSize: 10
                }
            })
            dispatch(changeContentList({
                contentList: data.content,
                contentPageIndex: pageIndex
            }));
            dispatch(changeIsLoading(false));
        }
    }
}