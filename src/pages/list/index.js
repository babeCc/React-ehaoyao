import React, { Fragment } from "react"
import { Header, Container } from "./styled"
import { Icon } from 'antd';
import {withRouter} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class List extends React.Component {
    constructor(){
        super()
     

    }
    render() {
        console.log(this.props.data)
        let {goods} = this.props;
        return (
            <Fragment>
                <Header>
                    <Icon type="left" onClick={this.handleBack.bind(this)} />
                    <div onClick={this.handleToSearch.bind(this)}>
                        <Icon type="search" />
                        <span>请输入药品名称或症状</span>

                    </div>
                    <Icon type="pic-right" />
                </Header>
                <Container>
                    <div className="navTop">
                        <ul>
                            <li>综合排序</li>
                            <li>价格
                            <span>
                                    <Icon type="caret-up" />
                                    <Icon type="caret-down" />
                                </span>
                            </li>
                            <li>自营</li>
                            <li>自营</li>
                        </ul>
                    </div>
                    <div className="product">
                        <ul>
                           {    
                              goods.map((item,index)=>(
                                <li key={index} onClick={this.handleToDetail.bind(this,item.groupId)}>
                                <div className="borderimg">
                                    <div className="image">

                                        <img src={"http://image.qumaiyao.com/"+item.smallPic} alt="" />
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="title to">
                                        <span>{item.pharmName=="好药师商城"?"自营":"商家"}</span>{item.goodsName} 

                                    </p>
                                    <p className="to">{item.brief}</p>
                                    <p className="to">规格: {item.spec}</p>
                                    <div className="proPrice">
                                        <div>
                                            <p className="p1">¥<span>{item.price}</span> </p>
                                            <p className="p2">¥<span>{item.oldPrice}</span> </p>
                                        </div>
                                        <h2>+</h2>
                                    </div>
                                </div>
                            </li>
                               ))
                           }
                         
                         
                        </ul>

                    </div>

                </Container>

            </Fragment>

        )
    }
    handleToDetail(groudId){

        this.props.history.push("/detail/"+groudId);
    }
    handleBack(){
        this.props.history.goBack()
    }
    handleToSearch(){
        this.props.history.push("/search")
    }
    componentDidMount(){
        let {link} = this.props.match.params;
        
        this.props.handleGetLink(link);
        
    }
  
}
export default List;