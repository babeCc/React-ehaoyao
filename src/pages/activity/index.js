import React from "react";
import { ActivityContainer } from "./styled";
import Header from "components/header";
import { TimeDown } from "utils/timer";
import {connect} from "react-redux";
import{mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
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
                       goods.map((item)=>(
                        <li key={item.goodsId}>
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

                                    <span className="btn_base">立即抢购</span>
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
    componentDidMount() {
        this.props.handleActivityAsyncData()
        TimeDown("time_wrapper", '2019-12-07 12:00:00')
    }
}

export default Activity;