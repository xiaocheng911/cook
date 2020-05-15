import cookStudyType from "../../actionType/cookStudy";

// 1.更新其他课程
export function upCat(payload) {
    return {
        type: cookStudyType.UP_CAT,
        payload
    }
}

// 2.更新推荐课程
export function upAdv(payload) {
    return {
        type: cookStudyType.UP_ADV,
        payload
    }
}

// 3.更新技巧百科
export function upGuide(payload){
    return {
        type: cookStudyType.UP_GUIDE,
        payload
    }
}

export default {

    // 1.获取其他课程
    getCat() {
        return async (dispatch) => {
            console.log(111, this.props);
            const { data } = await this.$axios.get("/hbb/education/getIndexByWeb?_t=1588577321865");
            data.category.splice(0, 1);
            const category = data.category;
            dispatch(upCat(category))
            this.setState({
                isLoading:false
            })
        }
    },

    // 2.获取推荐课程
    getAdv() {
        return async (dispatch) => {
            console.log(222, this.props);
            const data2 = await this.$axios.get("/hbb/recommend/getRandContent?_t=1588577321861&type=3&pageSize=10")
            const advise = data2.data.data;
            dispatch(upAdv(advise));
            this.setState({
                isLoading:false
            })
        }
    },

    // 3.获取技巧百科
    getGuide() {
        return async (dispatch) => {
            const { data } = await this.$axios.get("/hbb/education/getNewbieGuide?type=5&_t=1588664743839");
            let arr = data.courseGuide;
            arr.splice(6);
            dispatch(upGuide(arr));
        }
    }
}