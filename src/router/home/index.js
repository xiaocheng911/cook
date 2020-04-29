import CookCircle from "../../views/cookCircle/CookCircle";
import cookCircle from "./cookCircle";
export default [
    // {
    //     path:"/",
    //     name:"cookStudy"

    // },
    {
        path: "/cookCircle",
        name: "cookCircle",
        component: CookCircle,
        childrens: [
            ...cookCircle
        ]
    },
    // {
    //     path:"/questionAnswers",
    //     name:"questionAnswers"
    // },
    // {
    //     path:"/my",
    //     name:"my"
    // }
]