import React from "react";
import {TicketContainer} from "./styled";
import Header from "../../components/header";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDipatchToProps} from "./mapStore";
import Cookies from  "js-cookie";
@connect(mapStateToProps,mapDipatchToProps)
@withRouter
class Ticket extends React.Component{
    constructor(){
        super()
        this.flag=false;
    }
    render(){
      
        let{data}=this.props
        return(
            <TicketContainer>
                <Header title={"领取优惠券"}></Header>
                <div className="ticket_content">
                    <div className="coupon-code-box">
                        <input type="text" placeholder="请输入激活码"/>
                        <span className="btn_active">激活</span>
                    </div>
                    <ul>
                        {(data?data:[]).map((item,index)=>(
                            <li key={item.couponId} ref="ticket">
                                  <div className="left">
                                <div className="c-title">
                                    <span className="icon-type blue">{item.couponTypeString}</span>
                                    <span className="content">{item.couponName}</span>
                                </div>
                                <p className="c-use-condition">{item.couponDesc}</p>
                                <p className="c-user-time">{item.couponTime}</p>
                                <p className="c-use-money">{item.couponRemark}</p>
                            </div>
                            <div className="right">
                                <div className="coupon-money ">￥<span className="num">{item.couponNum}</span></div>
                                 {/* <div className="product-canuse-list" style={{display:this.flag?"block":"none"}}>可用商品<span>&gt;</span></div>  */}
                                <div className="btn-get" onClick={this.handleGetTicket.bind(this,item.couponId,item.couponName)} >立即领取</div>
                            </div>
                                 </li>
                        ))}
                       
                    </ul>
                </div>
            </TicketContainer>
        )
    }
    componentDidMount(){
        this.props.handleGetData()
    }
    handleGetTicket(id,name){
        if(Cookies.get("token")){
                this.props.history.push("/ticketlist/"+id+"/"+name)

        }else{
            this.props.history.push("/login")
        }
    }
}

export default Ticket;