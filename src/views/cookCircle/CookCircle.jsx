import React, { Component } from 'react';
import CookCircleHeader from "../../components/cookCircle/CookCircleHeader";
import RootRouter from "../../components/common/RootRouter";
class CookCircle extends Component {
    render() {
        return (
            <div>
                <CookCircleHeader></CookCircleHeader>
                <RootRouter router={this.props.childrens}></RootRouter>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default CookCircle;