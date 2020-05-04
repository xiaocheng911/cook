import React, { Component } from 'react';
import RootRouter from "../components/common/RootRouter";
import { NavLink } from "react-router-dom";
import MyHeader from "../components/MyHeader/MyHeader"
export default class Home extends Component {
    render() {
        return (
            <div>
                <MyHeader></MyHeader>
                <RootRouter router={this.props.childrens}></RootRouter>
            </div>
        )
    }
    componentDidMount() {
    }
}
