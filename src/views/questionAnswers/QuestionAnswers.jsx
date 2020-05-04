import React, { Component } from 'react'
import RootRouter from "../../components/common/RootRouter"
import ErquestionAnswers from "../../components/questionAnswers/ErquestionAnswers"
export default class QuestionAnswers extends Component {
    render() {
        return (
            <div>                    
                <ErquestionAnswers></ErquestionAnswers>            
                <RootRouter router={this.props.childrens}></RootRouter>  
            </div>
        )
    }
}
