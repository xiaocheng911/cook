import cookStudyInit from "../../state/cookStudy";

export default function (state = cookStudyInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));

    switch (type) {
        case "UP_CAT":
            state.category = payload;
            return state;
        case "UP_ADV":
            state.advise = payload;
            return state;
        case "UP_GUIDE":
            state.guide = payload;
            return state;
            
        default:
            return state;
    }
}