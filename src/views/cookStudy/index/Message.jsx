import React, { Component } from 'react'
import GoBack from './../../../components/common/GoBack';

export default class Message extends Component {
    render() {
        return (
            <div>
                <GoBack props={this.props}></GoBack>
                <h1>消息</h1>
            </div>
        )
    }
}
