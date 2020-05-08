import home from "./home";
import Home from "../views/Home";

//以下是无导航的组件引入
import Add from './../views/cookStudy/index/Add';
import Message from './../components/common/Message';
import Search from './../views/cookStudy/index/Search';
import Skill from './../views/cookStudy/index/Skill';
import Video from './../views/cookStudy/index/Video';
import Course from './../views/cookStudy/index/Course';
import RecipeClass from './../views/cookStudy/index/RecipeClass';
import Lesson from './../views/cookStudy/index/Lesson';
import videoRouter from "./home/cookStudy/video"

export default [
    {
        path:"/add",
        name:"add",
        component:Add
    },
    {
        path:"/message",
        name:"message",
        component:Message
    },
    {
        path:"/search",
        name:"search",
        component:Search
    },
    {
        path:"/skill",
        name:"skill",
        component:Skill
    },
    {
        path:"/video",
        name:"video",
        component:Video,
        childrens:[
            ...videoRouter
        ]
    },
    {
        path:"/course",
        name:"course",
        component:Course
    },
    {
        path:"/recipeClass",
        name:"recipeClass",
        component:RecipeClass
    },
    {
        path:"/lesson/:id",
        name:"lesson",
        component:Lesson
    },
    {
        path: "/",
        name: "home",
        component: Home,
        childrens: [
            ...home
        ]
    },
    
]