import JhQuestion from "../../../views/questionAnswers/index/JhQuestion"
import ZrQuestion from "../../../views/questionAnswers/index/ZrQuestion"
import ZxQuestion from "../../../views/questionAnswers/index/ZxQuestion"

export default [

    {
        path:"/questionAnswers",
        name:"zxQuest",
        component:ZxQuestion,
        exact:true
    },
    {
        path:"/questionAnswers/jhQuest",
        name:"jhQuest",
        component:JhQuestion,
    },
    {
        path:"/questionAnswers/zrQuest",
        name:"zrQuest",
        component:ZrQuestion,
    },

]