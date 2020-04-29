import React, { Component } from 'react';
import RootRouter from "../components/common/RootRouter";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/">学烘焙</NavLink>
                    <NavLink to="/cookCircle">烘焙圈</NavLink>
                    <NavLink to="/questionAnswers">问答</NavLink>
                    <NavLink to="/my">我的</NavLink>
                </nav>
                <RootRouter router={this.props.childrens}></RootRouter>
            </div>
        )
    }
    componentDidMount() {
    }
}
