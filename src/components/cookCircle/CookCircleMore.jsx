import React, { Component } from 'react'
import style from "./CookCircleMore.module.scss";
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}

class One extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
          }}
        >
          <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
            {obj.title}
          </div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
            <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ display: 'inline-block' }}>
              <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
              <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
            </div>
          </div>
        </div>
      );
    };
    return (<div>
      <Button
        style={{ margin: '30px 15px' }}
        inline
        onClick={() => this.setState({ useBodyScroll: !this.state.useBodyScroll })}
      >
        {this.state.useBodyScroll ? 'useBodyScroll' : 'partial scroll'}
      </Button>
      <ListView
        key={this.state.useBodyScroll ? '0' : '1'}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>Pull to refresh</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        useBodyScroll={this.state.useBodyScroll}
        style={this.state.useBodyScroll ? {} : {
          height: this.state.height,
          border: '1px solid #ddd',
          margin: '5px 0',
        }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
        onEndReached={this.onEndReached}
        pageSize={5}
      />
    </div>);
  }
}

// ReactDOM.render(<One />, mountNode);
// class CookCircleMore extends Component {
//     getContentPic(imageList) {
//         if (imageList.length === 1) {
//             return (
//                 <div className={style.contentPic1}>
//                     <img src={imageList} alt="" />
//                 </div>
//             )
//         } else if (imageList.length === 4) {
//             return (
//                 <div className={style.contentPic4}>
//                     {
//                         imageList.map((v, key) => (
//                             <img src={v + "&imageView2/1/w/375/h/375"} key={key} alt="" />
//                         ))
//                     }
//                 </div>
//             )
//         } else if (imageList.length === 2) {
//             return (
//                 <>
//                     {
//                         imageList.map((v, key) => (
//                             <img className={style.contentPic2} src={v + "&imageView2/1/w/375/h/375"} key={key} alt="" />
//                         ))
//                     }
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     {
//                         imageList.map((v, key) => (
//                             <img className={style.contentPicOther} src={v + "&imageView2/1/w/250/h/250"} key={key} alt="" />
//                         ))
//                     }
//                 </>
//             )
//         }
//     }
//     render() {
//         return (
//             <div className={style.bigContent}>
//                     {
//                         this.props.contentList.map(v => (
//                             <div className={style.smallContent} key={v.contentId}>
//                                 <div className={style.contentHeader}>
//                                     <div>
//                                         <img height="38" src={v.clientImage} alt="" />
//                                     </div>
//                                     <div>
//                                         <p>
//                                             {
//                                                 (v.isMaster === 0) ? "" : (<img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" alt=""></img>)
//                                             }
//                                             <span>{v.clientName}</span>
//                                         </p>
//                                         <h4>
//                                             <span>{
//                                                 (Date.now() - (new Date(v.createTime)).getTime()) > 60000 ?
//                                                     parseInt((Date.now() - (new Date(v.createTime)).getTime()) / 60000) + "分钟" :
//                                                     parseInt((Date.now() - (new Date(v.createTime)).getTime()) / 1000) + "秒"
//                                             }前</span>
//                                             <span>{v.coverTitle}</span>
//                                         </h4>
//                                     </div>
//                                 </div>
//                                 {
//                                     (v.communityName === '' && v.introduce === '') ? '' : (<div className={style.words}>
//                                         <span>{v.communityName}</span>
//                                         <span>{v.introduce}</span>
//                                     </div>)
//                                 }
//                                 <div className={style.bigContentPic}>
//                                     <div className={style.smallContentPic}>
//                                         {
//                                             this.getContentPic(v.image)
//                                         }
//                                     </div>
//                                 </div>
//                                 <div className={style.recipe}>
//                                     {
//                                         v.recipe.clientId === 0 ? '' :
//                                             (
//                                                 <div className={style.erceng}>
//                                                     <img width="70" height="70" src={v.recipe.image + "&imageView2/1/w/70/h/70"} alt="" />
//                                                     <div className={style.youbian}>
//                                                         <div>{v.recipe.title} </div>
//                                                         <div>作者：{v.recipe.clientName}</div>
//                                                     </div>
//                                                 </div>
//                                             )
//                                     }
//                                 </div>
//                                 <div className={style.interaction}>
//                                     <div className={style.smallInteraction}>
//                                         <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" />
//                                         <span>{v.likeNum === 0 ? "点赞" : v.likeNum}</span>
//                                     </div>
//                                     <div className={style.smallInteraction}>
//                                         <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt="" />
//                                         <span>{v.rewardNum === 0 ? "打赏" : v.rewardNum}</span>
//                                     </div>
//                                     <div className={style.smallInteraction}>
//                                         <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt="" />
//                                         <span>{v.commentNum === 0 ? "评论" : v.commentNum}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//         )
//     }
//     componentDidMount() {
//         console.log(456789,this.props)
//     }
// }
export default One;