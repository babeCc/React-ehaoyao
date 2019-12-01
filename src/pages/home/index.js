import React, { Component } from 'react'
import {TimeDown} from "../.././utils/timer";
import { HomeHeaderContainer, HomeContainer, HomeContentContainer } from "./styled";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
  
@withRouter

 class Home extends Component {
   
            constructor() {

               
                super()
                this.state = {
                    list: [
                        {
                            title: "咨询问诊",
                            img: "img/list1.png"
                        },
                        {
                            title: "领券中心",
                            img: "img/list2.png",
                            path:"#/ticket"
                        },
                        {
                            title: "医疗器械",
                            img: "img/list3.png"
                        },
                        {
                            title: "海外精选",
                            img: "img/list4.png"
                        },
                        {
                            title: "中药滋补",
                            img: "img/list5.png"
                        },
                        {
                            title: "男性健康",
                            img: "img/list6.png"
                        },
                        {
                            title: "女性健康",
                            img: "img/list7.png"
                        },
                        {
                            title: "营养保健",
                            img: "img/list8.png"
                        },
                    ],
                    shops:[
                        {
                            href:"http://m.ehaoyao.com/special/2015/10/89828.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556011585611_10.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/9/3/1567493946289_53.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/8/2/1564711235699_23.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014554172_29.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014694563_48.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014652510_21.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014770635_24.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/7/11/1562816092099_90.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/8/1/1564641302303_82.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014704396_31.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/6/12/1560322721161_57.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/7/5/1562319157726_0.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014843152_51.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014753093_98.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/8/30/1567130942650_36.jpg"
                        },
                        {
                            href:"http://m.ehaoyao.com/special/2019/91638.html",
                            img:"https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/23/1556014881579_10.jpg"
                        },
                        
                    ]
                }
            }
            render() {
              let {home_goods} = this.props;
             
                return (
                    <HomeContainer>
                        <div id="home">
                            <HomeHeaderContainer>
                                <div className="home_header" onClick={this.handleToSeacrh.bind(this)} >
                                    <div className="header_logo"></div>
                                    <div className="header_search">
                                        <input type="text" placeholder="泰尔丝 补肺丸 鸿茅药酒" />
                                        <div className="search_logo"></div>
                                    </div>
                                    <div className="header_login" onClick={this.handleLogin.bind(this)}>登录</div>
                                </div>
                            </HomeHeaderContainer>
                            <HomeContentContainer>
                                <div className="home_content">
                                    <div className="content_swiper">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide"><img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/6/1573008629780_79.jpg" alt="" /></div>
                                                <div className="swiper-slide"><img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/18/1574038059874_49.jpg" alt="" /></div>
                                                <div className="swiper-slide"><img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/25/1574642275568_34.jpg" alt="" /></div>
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>
                                    <div className="content_promise">
                                        <ul>
                                            <li>
                                                <img src="img/yan.png" alt="" />
                                                正品保证</li>
        
                                            <li>
                                                <   img src="img/yan.png" alt="" />
                                                满79包邮</li>
                                            <li>
                                                <img src="img/yan.png" alt="" />
                                                隐私包装</li>
        
                                        </ul>
                                    </div>
                                    <div className="content_list">
                                        <ul>
                                            {
                                                this.state.list.map((item, index) => (
                                                    <li key={index}>
                                                       <a href={index==0?"https://ehaoyao.qiyukf.com/client?k=54a3f1e9144f5fceee378923f235fd7d&amp;wp=1&amp;robotShuntSwitch=0":item.path}><img src={item.img} alt="" /></a> 
                                                        <p>{item.title}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="little_banner">
                                        <div className="img_container">
                                            <img src="img/jian.png" alt="" />
                                        </div>
        
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"><a href="">海狗丸吃多时间达到治疗效果？</a></div>
                                        </div>
                                    </div>
                                    <div className="content_time">
                                        <div className="time_container">
                                            <div className="img_container">
                                                <img src="img/xian.png" alt=""/>
                                            </div>
                                            <div id="time_wrapper">  </div>   
                                            <div className="activity_more"onClick={this.handleToActivity.bind(this)}>更多</div> 
                                        </div>   
                                        <div className="activity_goods">
                                            <ul  >
                                                {
                                               home_goods.map((item)=>(
                                                    <li key={item.goodsId} onClick={this.handleToActivity.bind(this,item.goodsId)}>
                                                        
                                                    <img src={"http://image.qumaiyao.com/"+item.smallPic}></img>
                                                    <p className="goods_activity">秒杀</p>
                                                    <p className="goods_price">￥{item.buyingPrice}</p>
                                                     <p className="goods_oldPrice">￥{item.price}</p>
                                                </li>
                                                ))
                                                }
                                          
                                            </ul>
                                           
                                        </div>
                                        
                                    </div>
                                    <div className="content_goods">
                                            <div className="content_title">精品专区</div>
                                            <div className="content">
        
                                            
                                           <div className="left">
                                               <a href="http://m.ehaoyao.com/product-58111.html">
                                                   <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/25/1574643657966_23.jpg" alt=""/>
                                               </a>
                                           </div>
                                           <div className="right">
                                               <a href="http://m.ehaoyao.com/specials/100022.html">
                                                   <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/9/1573268802093_58.jpg" alt=""/>
                                               </a>
                                               <a href="http://m.ehaoyao.com/product-43944.html">
                                                   <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/22/1574413193766_81.jpg" alt=""/>
                                               </a>
                                           </div>
                                           </div>
                                    </div>
                                    <div className="content_shop">
                                            <div className="content_title">品牌旗舰店</div>
                                            <ul>
                                               {
                                                  this.state.shops.map((item)=>(
                                                  
                                                        <li key={item.img}>
                                                            <a href={item.href}>
                                                                <img src={item.img} alt=""/>
                                                            </a>
                                                        </li>
                                                   
                                                  ))
                                                }
                                            </ul>
                                        </div>
                                </div>
                                <div className="bottom_box">
                                    <img src="img/bottom.png" alt=""/>
                                </div>
                            </HomeContentContainer>
                          
                        </div>
                    </HomeContainer>
                )
        
            }
            handleToSeacrh(){
                this.props.history.push("./search");
            }
            handleToActivity(){
                this.props.history.push("./activity");
            }
            handleLogin(){
                console.log(this.props)
                this.props.history.push("./login")
            }
            componentDidMount() {
               
                this.props.handleHomeAsyncData()
                TimeDown("time_wrapper", '2019-12-07 12:00:00')
               
                
            }
       
    }
    export default Home;
