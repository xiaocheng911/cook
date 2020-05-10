import CookCircle from "../../views/cookCircle/CookCircle";
import cookCircle from "./cookCircle";
import QuestionAnswers from "../../views/questionAnswers/QuestionAnswers.jsx"
import questionAnswers from "./questionAnswers"
import CookStudy from "../../views/cookStudy/CookStudy";
import cookStudy from "./cookStudy";
import My from '../../views/my/My';
import my from "./my";


export default [
    {
        path:"/",
        name:"cookStudy",
        component:CookStudy,
        exact:true,
        childrens:[
            ...cookStudy
        ]
    },
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
    },
    {
        path:"/my",
        name:"my",
        component:My,
        childrens:[
            ...my
        ]
    }
]