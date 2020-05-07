import React, { Component } from 'react'
import GoBack from './../../../components/common/GoBack';

export default class Search extends Component {
    render() {
        return (
            <div>
                <GoBack props={this.props}></GoBack>
                <h1>搜索</h1>
            </div>
        )
    }
}
