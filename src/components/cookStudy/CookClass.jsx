import React, { Component } from 'react'
import style from "../../views/cookStudy/css/cookClass.module.scss"

export default class CookClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: []
        };
    }
    render() {
        return (
            <div>
                <div className={style.main}>
                    {
                        this.state.category.map(v => (
                            <div key={v.categoryId} className={style.cla}>
                                <h2>
                                    {v.title}
                                </h2>
                                <div className={style.xxx}>
                                    <div>
                                        {
                                            v.item.map(vv => (
                                                <section onClick={()=>{
                                                    this.props.props.history.push(`/lesson/${vv.educationCourseId}`);
                                                    console.log(111,this.props)
                                                }} key={vv.categoryItemId}>
                                                    <img src={vv.verticalImages[0]} alt="" />
                                                    <i>{vv.buyNum < 1000 ? vv.buyNum : "1000+"}  在学</i>
                                                    <h3>{vv.title}</h3>
                                                </section>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    async componentDidMount() {
        console.log(111111);
        const { data } = await this.$axios.get("/hbb/education/getIndexByWeb?_t=1588577321865");
        const category = data.category;
        console.log(category)
        this.setState({
            category
        });

        const data2 = await this.$axios.get("/hbb/recommend/getRandContent?_t=1588577321861&type=3&pageSize=10")
        const advise = data2.data;
        console.log(advise);
        // const cate = this.state.category.splice(0,1);
        // const arr = [
        //     advise,
        //     ...this.state.category
        // ];
        // console.log(arr)
        // this.setState({
        //     category:[
        //         advise,
        //         ...this.state.category.splice(0,1)
        //     ]
        // })
    }
}
