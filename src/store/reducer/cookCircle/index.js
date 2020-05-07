import cookCircleInit from "../../state/cookCircle";
import cookCircleType from "../../actionType/cookCircle";
export default function (state = cookCircleInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    if (type === cookCircleType.CHANGE_NEWS_LIST) {
        state.newsList = payload;
    }else if(type === cookCircleType.CHANGE_COMMUNITY_LIST) {
        state.communityList = payload;
    }else if(type === cookCircleType.CHANGE_CONTENT_LIST) {
        state.contentList = [
            ...state.contentList,
            ...payload
        ]
    }
    return state;
}