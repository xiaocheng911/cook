import home from "./home";
import Home from "../views/Home";

//以下是无导航的组件引入
import Add from './../views/cookStudy/index/Add';
import Message from './../views/cookStudy/index/Message';
import Search from './../views/cookStudy/index/Search';
import Skill from './../views/cookStudy/index/Skill';
import Video from './../views/cookStudy/index/Video';
import Course from './../views/cookStudy/index/Course';
import RecipeClass from './../views/cookStudy/index/RecipeClass';

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
        component:Video
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
        path: "/",
        name: "home",
        component: Home,
        childrens: [
            ...home
        ]
    },
    
]