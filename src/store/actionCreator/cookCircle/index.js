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
    // console.log("payload",payload)
    return {
        type:cookCircleType.CHANGE_IS_LOADING,
        payload
    }
}
function changeMasterList(payload) {
    return {
        type:cookCircleType.CHANGE_MASTER_LIST,
        payload
    }
}
export default {
    getNewsList(_this) {
        return async (dispatch) => {
            const { data } = await axios.get("/hbb/feed/getCategory")
            dispatch(changeNewsList(data.category[0].item))
            _this.setState({
                isLoading:false
            })
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
    getContent(pageIndex = 0) {
        return async (dispatch) => {
            dispatch(changeIsLoading(true));
            const { data } = await axios.get("/hbb/v2/feed/getNew", {
                params: {
                    pageIndex,
                    pageSize: 10,
                    _t:Date.now()
                }
            })
            dispatch(changeContentList({
                contentList: data.content,
                contentPageIndex: pageIndex
            }));
            dispatch(changeIsLoading(false));
        }
    },
    getMasterList(pageIndex = 0) {
        return async (dispatch) => {
            dispatch(changeIsLoading(true));
            // https://api.hongbeibang.com/v2/feed/getMasterNew?pageIndex=0&pageSize=10
            const { data } = await axios.get("/hbb/v2/feed/getMasterNew", {
                params: {
                    pageIndex,
                    pageSize: 10,
                    _t:Date.now()
                }
            })
            dispatch(changeMasterList({
                masterList: data.content,
                masterPageIndex: pageIndex
            }));
            dispatch(changeIsLoading(false));
        }
    }
}