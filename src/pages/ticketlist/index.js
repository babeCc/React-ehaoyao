import React from "react";

import { TicketListContainer } from "./styled";
import TarBar from "../../components/tabBar"
import {withRouter} from "react-router-dom";
import{connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class TicketList extends React.Component {
    constructor() {
        super()

    }
    render() {
        let {data} = this.props;
        let goodsList = data.goodsList;
        console.log(goodsList)
        let {name} = this.props.match.params;
        console.log(data)
        return (
            <TicketListContainer>
                <div className="search_header">
                    <div className="left" onClick={this.handleBack.bind(this)}>&lt;</div>
                    <div className="input">
                        <div className="search">
                            <img src="./public/img/lsearch.png" alt="" />
                        </div>
                        <input type="text" placeholder="请输入药品或症状" />
                    </div>
                    <div></div>
                </div>
                <div className="couponProduct-wrapper">
                    <ul className="sort-wrapper">
                        <li className="on">综合排序</li>
                        <li>价格<span><div className="top"></div><div className="bottom"></div></span></li>
                    </ul>
                </div>
                <div className="content">
                    <ul>
                      {(data.goodsList?data.goodsList:[]).map((item)=>(
                          <li key={item.goodsId}>
                          <div className="img"><img src={"http://image.qumaiyao.com/"+item.bigPic} alt=""/></div>
                          <div className="right">
                              <p className="product-name">
                                  <span className="label three">商家</span>
                                 {item.goodsName}
                              </p>
                              <p className="desc">{item.brief}</p>
                              <p className="specification">{item.spec}</p>
                              <ul className="promotions"></ul>
                              <div className="otherInfo">
                                  <div className="price">
                                      <span className="sell-price">￥{item.price}</span>
                                      <span className="old-price">￥{item.oldPrice}</span>
                                  </div>
                                  <span className="btn-cart">+</span>
                              </div>
                          </div>
                      </li>
                      ))}
                        
                       
                    </ul>
                   <div style={{display:data.pagination.total?"none":"block"}}>
                      <div className="noresult" >抱歉没找到{name}相关的商品</div>
                    <a href="">咨询药师</a>
                    </div>
                </div>
                <TarBar></TarBar>
            </TicketListContainer>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
    componentDidMount(){
        let {id} = this.props.match.params;
        this.props.handleGetData(id)
    }
}

export default TicketList;