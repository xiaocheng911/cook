import CookCircle from "../../views/cookCircle/CookCircle";
import cookCircle from "./cookCircle";
import QuestionAnswers from "../../views/questionAnswers/QuestionAnswers.jsx"
import questionAnswers from "./questionAnswers"
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
    {
        path:"/questionAnswers",
        name:"questionAnswers",
        component:QuestionAnswers,
        childrens:[
            ...questionAnswers
        ]
    }
    // {
    //     path:"/my",
    //     name:"my"
    // }
]