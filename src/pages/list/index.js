import React, { Fragment } from "react"
import { Header, Container } from "./styled"
import { Icon } from 'antd';

import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import BscrollY from "common/ScrollY";

@connect(mapStateToProps, mapDispatchToProps)

@withRouter
class List extends React.Component {
    constructor() {
        super()
        this.page = 1;
        this.state = {
            nav: [
                "综合排序",
                "价格",
                "筛选",
                "自营",],
            on: 0
        }


    }

    render() {
        let { nav } = this.state;
        let { goods, activeClass } = this.props;
        let {keyWord}=this.props.match.params
        return (
            <Fragment>
                <Header>
                    <Icon type="left" onClick={this.handleBack.bind(this)} />
                    <div onClick={this.handleToSearch.bind(this)}>
                        <Icon type="search" />
                        <span>{keyWord?keyWord:"请输入药品或症状"}</span>

                    </div>
                    <Icon type="pic-right" />
                </Header>
                <Container>
                    <div className="navTop">
                        <ul>
                            {
                                nav.map((item, index) => (
                                    < li className={activeClass == index ? 'active' : '11'} key={index} onClick={this.handleClick.bind(this, index)}>{item}</li>

                                ))

                            }
                        </ul>
                    </div>
                    <BscrollY ref="scroll">
                        <div className="product">
                            <ul>
                                {
                                    (goods?goods:[]).map((item, index) => (
                                        <li key={index} onClick={this.handleToDetail.bind(this, item.groupId)}>
                                            <div className="borderimg">
                                                <div className="image">

                                                    <img src={"http://image.qumaiyao.com/" + item.smallPic} alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p className="title to">
                                                    <span>{item.pharmName == "好药师商城" ? "自营" : "商家"}</span>{item.goodsName}

                                                </p>
                                                <p className="to">{item.brief}</p>
                                                <p className="to">规格: {item.spec}</p>
                                                <div className="proPrice">
                                                    <div>
                                                        <p className="p1">¥<span>{item.price}</span> </p>
                                                        <p className="p2">¥<span>{item.oldPrice}</span> </p>
                                                    </div>
                                                    <h2 onClick={this.handleAddCart.bind(this, goods, index)}>+</h2>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }


                            </ul>

                        </div>
                    </BscrollY>
                </Container>

            </Fragment >

        )
    }
   
    

    handleClick(index) {
        // this.props.activeClass=index;
        // console.log(this.props)
        let ff="", tt="", dd="",key='';
        let {isSelf,type,descs } = this.props;
        // console.log(descs)
        if (index == 0) {
                ff = "";
                tt = 1;
                dd = descs
        } else if (index == 1) {
            if (descs == 'asc') {
                    ff = "";
                    tt = 2;
                    dd = 'desc'
            } else {
                    ff = "";
                    tt = 2;
                    dd = 'asc'
            }
        } else if (index == 3) {
                ff = 1;
                tt = type;
                dd = descs
        }
        console.log(222,index)
        if(!this.props.match.params.link){
            key=this.props.match.params.keyWord
            this.props.handleSerchXuan(ff, tt, dd,key,index)
        }else{
            this.props.handleXuan(ff, tt, dd,key,index)
        }

        // this.props.handleGetData(index)
        

    }
   
    handleToDetail(groudId) {


        this.props.history.push("/detail/" + groudId);
    }
    handleBack() {
        this.props.history.goBack()
    }
    handleToSearch() {
        this.props.history.push("/search")
    }
   
    componentDidUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
    componentDidMount() {
     
        let page = this.page;
      
        if(this.props.match.params.link){
  
              let { link } = this.props.match.params;
              this.props.handleGetLink(link, page)
             
           
        }else{
            let { keyWord } = this.props.match.params;
            // console.log(keyWord)
            this.props.handleChangeKey(keyWord, page);
          
        }
        this.refs.scroll.handlepullingUp(()=>{
            let page = this.props.reducerPage;
            if(this.props.reducerPage<this.props.totalPage){
               
                page++;
             
                if(this.props.match.params.link){
                    let { link } = this.props.match.params;
                        this.props.handleGetLink(link,page)
                }else{
                    let { keyWord } = this.props.match.params;
                        this.props.handleChangeKey(keyWord,page)
                }
            }
        })

    }
    handleAddCart(goods, index, e) {
        var obj = { img: "http://image.qumaiyao.com/" + goods[index].smallPic, groupId: goods[index].groupId, name: goods[index].goodsName, type: goods[index].spec, price: goods[index].price, num: 1 }
        e.stopPropagation()
        this.props.handleListAdd(obj)
        
        // console.log(goods[index].goodsName, goods[index].spec, goods[index].price)
        // console.log(obj)
    }


}
export default List;