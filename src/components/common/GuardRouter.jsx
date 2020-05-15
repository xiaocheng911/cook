import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import img from "../../assets/img/loading.gif"
class GuardRouter extends Component {

    constructor(){
        super()
        this.state={
            isloding:false
        }
    }

    changeLoding(isloding){
        
        this.setState({
            isloding
        })
    }

    render() {
        return (

            <div>
                {
                   // this.state.isloding ? (<img src={img} alt=""/>) :(  
                        <div>
                            <this.props.component  changeLoding={this.changeLoding.bind(this)} {...this.props}></this.props.component>
                        </div>
                  //  )
                }

            </div>
           
        )
    }
    
}
export default withRouter(GuardRouter);