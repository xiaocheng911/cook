import home from "./home";
import Home from "../views/Home";
export default [
    {
        path: "/",
        name: "home",
        component: Home,
        childrens: [
            ...home
        ]
    }
]