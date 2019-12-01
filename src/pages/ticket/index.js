import React from "react";
import {TicketContainer} from "./styled";
import Header from "../../components/header";
class Ticket extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <TicketContainer>
                <Header title={"领取优惠券"}></Header>
                <div className="ticket_content">
                    <div className="coupon-code-box">
                        <input type="text" placeholder="请输入激活码"/>
                        <span className="btn_active">激活</span>
                    </div>
                    <ul>
                        <li>
                            <div className="left">
                                <div className="c-title">
                                    <span className="icon-type blue">商城券</span>
                                    <span className="content">金戈满499减20元券</span>
                                </div>
                                <p className="c-use-condition">适用于部分商品</p>
                                <p className="c-user-time">11月14日-11月30日</p>
                                <p className="c-use-money">满499元可用</p>
                            </div>
                            <div className="right">
                                <div className="coupon-money ">￥<span className="num">20</span></div>
                                <div className="product-canuse-list">可用商品<span>&gt;</span></div>
                                <div className="btn-get">立即领取</div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <div className="c-title">
                                    <span className="icon-type blue">商城券</span>
                                    <span className="content">金戈满499减20元券</span>
                                </div>
                                <p className="c-use-condition">适用于部分商品</p>
                                <p className="c-user-time">11月14日-11月30日</p>
                                <p className="c-use-money">满499元可用</p>
                            </div>
                            <div className="right">
                                <div className="coupon-money ">￥<span className="num">20</span></div>
                                <div className="product-canuse-list">可用商品<span>&gt;</span></div>
                                <div className="btn-get">立即领取</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </TicketContainer>
        )
    }
}

export default Ticket;