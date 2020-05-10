import React, { Component } from 'react'
import style from "../../views/cookStudy/css/cookVideoClass.module.scss"

export default class CookVideoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claItem: []
        }
    }
    render() {
        
        return (
            <div>
                {
                    this.state.claItem.map(vv => (
                        <div key={vv.categoryItemId} className={style.item}>
                            <section>
                                <img src={vv.verticalImages[0]} alt="" />
                                <div>{vv.title}</div>
                            </section>
                        </div>
                    ))
                }
            </div>
        )
    }
    async componentDidMount() {
        console.log(this.props.location.search.slice(1))
        const { data } = await this.$axios.get(`/hbb/index/getIndexItem?_t=1588673301274&categoryId=${this.props.location.search.slice(1)}`);
        console.log(data)
        this.setState({
            claItem: data
        });
    }
}
