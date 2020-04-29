import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import RootRouter from "../../components/common/RootRouter";
class CookCircle extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/cookCircle/follow">关注</NavLink>
                    <NavLink to="/cookCircle" exact>最新</NavLink>
                    <NavLink to="/cookCircle/master">大人</NavLink>
                </nav>
                <RootRouter router={this.props.childrens}></RootRouter>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default CookCircle;