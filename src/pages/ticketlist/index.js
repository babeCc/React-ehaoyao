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
        let {data,flag} = this.props;
       
        
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
                        <input type="text" placeholder="请输入药品或症状" onClick={this.handleToSearch.bind(this)} />
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
                      {(data.goodsList?data.goodsList:[]).map((item,index)=>(
                          <li key={item.goodsId} onClick={this.handleToDetail.bind(this,item.groupId)}>
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
                                  <span className="btn-cart" onClick={this.handleAddCart.bind(this, data.goodsList, index)}>+</span>
                              </div>
                          </div>
                      </li>
                      ))}
                        
                       
                    </ul>
                   <div style={{display:flag?"none":"block"}}>
                      <div className="noresult" >抱歉没找到{name}相关的商品</div>
                    <a href="">咨询药师</a>
                    </div>
                </div>
                <TarBar></TarBar>
            </TicketListContainer>
        )
    }
    handleToDetail(id){
        this.props.history.push("/detail/"+id);
    }
    handleToSearch(){
        this.props.history.push('/search')
    }
    handleBack(){
        this.props.history.goBack()
    }
    componentDidMount(){
        let {id} = this.props.match.params;
        this.props.handleGetData(id)
    
    }
    handleAddCart(goods, index, e) {
        var obj = {img:"http://image.qumaiyao.com/"+goods[index].item.bigPic,id: goods[index].goodsId, name: goods[index].goodsName, type: goods[index].spec, price: goods[index].price, num: 1 }
        e.stopPropagation()
        this.props.handleListAdd(obj)
        // console.log(goods[index].goodsName, goods[index].spec, goods[index].price)
        // console.log(obj)
    }
}

export default TicketList;