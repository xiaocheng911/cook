import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import GuardRouter from "./GuardRouter";
class RootRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {
                        this.props.router.map(v => (
                            <Route key={v.path} path={v.path} exact={v.exact} render={() => <GuardRouter {...v}></GuardRouter>}></Route>
                        ))
                    }
                </Switch>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default RootRouter;