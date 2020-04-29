import cookCircleInit from "../../state/cookCircle";
export default function (state = cookCircleInit, action) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}