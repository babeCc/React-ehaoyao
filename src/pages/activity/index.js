import React from "react";
import { ActivityContainer } from "./styled";
import Header from "components/header";
import { TimeDown } from "utils/timer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import{mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Activity extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "限时抢购"
        }
    }

    render() {
       let {goods} = this.props;
       console.log(this.props.goods)
        let { title } = this.state;
        return (
            <ActivityContainer>
                <Header title={title} />
                <div className="activity_content">
                    <div className="content_banner">
                        <img src="img/qiang.png" alt="" />
                    </div>
                    <div className="countdown">
                        <div className="time_title">距结束</div>
                        <div></div>
                        <div id="time_wrapper"></div>
                    </div>
                </div>
                <ul className="seckill-list">
                    {
                       goods.map((item,index)=>(
                        <li key={item.goodsId} onClick={this.handleToDetail.bind(this,item.groupId)}>
                        <div className="img">
                            <img src={"http://image.qumaiyao.com/"+item.smallPic} alt="" />
                        </div>
                        <div className="right">
                            <div>
                                <p className="p-name">{item.goodsName}</p>
                       <p className="p-specifications">规格:{item.spec}</p>
                            </div>
                            <div>
                                <div className="has-sale">{(((item.virStore-item.store)/item.virStore)*100).toFixed(0)+"%"}
                                            <div className="progress-bar">
                                        <span className="percentage" style={{ width:(((item.virStore-item.store)/item.virStore)*100).toFixed(0)+"%"  }}></span>
                                    </div>
                                </div>
                                <div className="opt">
                                    <span className="price"><i>￥</i>{item.buyingPrice}<span className="old-price">￥{item.price}</span></span>

                                    <span className="btn_base" onClick={this.handleAddCart.bind(this, goods, index)}>立即抢购</span>
                                </div>
                            </div>
                        </div>
                    </li>
                       ))
                    }
                    
                </ul>
            </ActivityContainer>

        )
    }
    handleToDetail(groupId){
       
        this.props.history.push("/detail/"+groupId)
    }
    componentDidMount() {
        this.props.handleActivityAsyncData()
        TimeDown("time_wrapper", '2019-12-07 12:00:00')
    }
    handleAddCart(goods, index, e) {
        var obj = {img:"http://image.qumaiyao.com/"+goods[index].smallPic,groupId: goods[index].goodsId, name: goods[index].goodsName, type: goods[index].spec, price: goods[index].buyingPrice, num: 1 }
        e.stopPropagation()
        this.props.handleListAdd(obj)
        // console.log(goods[index].goodsName, goods[index].spec, goods[index].price)
        // console.log(obj)
    }
}

export default Activity;