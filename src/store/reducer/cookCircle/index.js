import cookCircleInit from "../../state/cookCircle";
import cookCircleType from "../../actionType/cookCircle";
export default function (state = cookCircleInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    // console.log("pageIndex",payload)
    if (type === cookCircleType.CHANGE_NEWS_LIST) {
        state.newsList = payload;
    }else if(type === cookCircleType.CHANGE_COMMUNITY_LIST) {
        state.communityList = payload;
    }else if(type === cookCircleType.CHANGE_CONTENT_LIST) {
        // console.log("contentPageIndex",payload.contentPageIndex)
        if(payload.contentPageIndex/1 === 0) {
            state.contentList = payload.contentList
        }else {
            // console.log(111111)
            // state.contentList = [
            //     ...state.contentList,
            //     ...payload.contentList
            // ]
            payload.contentList.forEach(element => {
                if(!state.contentList.find(v=>v===element)) {
                    state.contentList.push(element)
                }
            });
        }
        // console.log("shshshshsh",state)
        state.contentPageIndex = payload.contentPageIndex || 0;
    }else if(type === cookCircleType.CHANGE_IS_LOADING) {
        state.contentIsLoading = payload;
        // console.log("yeyeye",state)
    }else if(type === cookCircleType.CHANGE_MASTER_LIST) {
        if(payload.masterPageIndex/1 === 0) {
            state.masterList = payload.masterList
        }else {
            payload.masterList.forEach(element => {
                if(!state.masterList.find(v=>v===element)) {
                    state.masterList.push(element)
                }
            });
        }
        state.masterPageIndex = payload.masterPageIndex || 0;
    }
    return state;
}