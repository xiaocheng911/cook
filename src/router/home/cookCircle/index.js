import Newest from "../../../views/cookCircle/index/Newest";
import Master from "../../../views/cookCircle/index/Master";
import Follow from "../../../views/cookCircle/index/Follow";
export default [
    {
        path: "/cookCircle",
        component: Newest,
        exact:true
    },
    {
        path: "/cookCircle/follow",
        component: Follow
    },
    {
        path: "/cookCircle/master",
        component: Master
    }
]