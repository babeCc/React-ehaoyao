import React, { Fragment } from "react"
import { Icon } from 'antd';
// import { Header } from "../detail/styled";
import { Header, Container } from "./styled"
import { List, Checkbox, Flex } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;


class Cart extends React.Component {
    onChange = (val) => {
        console.log(val);
    }
    render() {
        return (
            <Fragment>
                <Header>
                    <Icon type="left" />
                    <div>
                        <span>购物车
                            <i>5</i>
                        </span>
                        <span>需求清单</span>
                    </div>
                    <span>编辑</span>
                </Header>
                <Container>
                    <div className="cart-list">
                        <div className="Top bg pt">
                            <span className="selectAll">
                                {/* <Icon type="check" style={{ fontSize: '10px', }} /> */}
                                <CheckboxItem onChange={() => this.onChange(0)} style={{ fontSize: '10px', }}>

                                </CheckboxItem>
                            </span>
                            <span className="city">好药师商城</span>
                            <span className="you">满79元包邮</span>
                            <p>
                                领券
                                <Icon type="right" />
                            </p>
                        </div>
                        <div className="mainCart bg">
                            <ul>
                                <li>
                                    <span className="selectEach">
                                        <CheckboxItem onChange={() => this.onChange(0)} style={{ fontSize: '10px', }}>

                                        </CheckboxItem>
                                    </span>

                                    <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_64690/000000006368978e01636cd08a390384_zfx_small0.jpg" alt="" />
                                    <div className="right">
                                        <h2 className="to">【儿童套餐】迪巧 儿童维D钙咀嚼片60片+振海康红外线电子体温计HTD8813C 耳温枪</h2>
                                        <h3>规格: 60片+HTD8813C</h3>

                                        <div className="number">
                                            <p>¥<span>149</span></p>
                                            <div>
                                                <div className="pri">
                                                    <Icon type="minus" style={{ fontSize: '10px', color: '#cccccc' }} />

                                                    <input type="text" defaultValue="1" />
                                                    <Icon type="plus" style={{ fontSize: '10px', color: '#cccccc' }} />

                                                </div>
                                                <Icon type="rest" style={{ fontSize: '18px', color: 'rgb(154, 154, 154)' }} />
                                            </div>
                                        </div>

                                    </div>

                                </li>
                                <li>
                                    <span className="selectEach">
                                        <CheckboxItem onChange={() => this.onChange(0)} style={{ fontSize: '10px', }}>

                                        </CheckboxItem>
                                    </span>

                                    <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_64690/000000006368978e01636cd08a390384_zfx_small0.jpg" alt="" />
                                    <div className="right">
                                        <h2 className="to">【儿童套餐】迪巧 儿童维D钙咀嚼片60片+振海康红外线电子体温计HTD8813C 耳温枪</h2>
                                        <h3>规格: 60片+HTD8813C</h3>

                                        <div className="number">
                                            <p>¥<span>149</span></p>
                                            <div>
                                                <div className="pri">
                                                    <Icon type="minus" style={{ fontSize: '10px', color: '#cccccc' }} />

                                                    <input type="text" defaultValue="1" />
                                                    <Icon type="plus" style={{ fontSize: '10px', color: '#cccccc' }} />

                                                </div>
                                                <Icon type="rest" style={{ fontSize: '18px', color: 'rgb(154, 154, 154)' }} />
                                            </div>
                                        </div>

                                    </div>

                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="recommendWrapper">
                        <p className="title">
                            您可能还需要
                        </p>
                        <div className="product">
                            <ul>
                                <li>
                                    <div className="borderimg">
                                        <div className="image">

                                            <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_416/0000000060976144016102c190cd1d4c_zfx_big0.JPG" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="titleone to" style={{ fontSize: '12px', color: 'black' }}>
                                            广誉远 定坤丹口服液 10ml*5支*4小盒

                                    </p>
                                        <p className="to">滋补气血，调经疏郁。用于气血两虚，气滞血瘀所致的月经不调、行经腹痛</p>
                                        <p className="to">规格: 10ml*5支*4小盒</p>
                                        <div className="proPrice">
                                            <div>
                                                <p className="p1">¥<span>1580</span> </p>
                                                <p className="p2">¥<span>1580</span> </p>
                                            </div>
                                            <h2>+</h2>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="borderimg">
                                        <div className="image">

                                            <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_416/0000000060976144016102c190cd1d4c_zfx_big0.JPG" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="titleone to" style={{ fontSize: '12px', color: 'black' }}>
                                            广誉远 定坤丹口服液 10ml*5支*4小盒

                                    </p>
                                        <p className="to">滋补气血，调经疏郁。用于气血两虚，气滞血瘀所致的月经不调、行经腹痛</p>
                                        <p className="to">规格: 10ml*5支*4小盒</p>
                                        <div className="proPrice">
                                            <div>
                                                <p className="p1">¥<span>1580</span> </p>
                                                <p className="p2">¥<span>1580</span> </p>
                                            </div>
                                            <h2>+</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="borderimg">
                                        <div className="image">

                                            <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_416/0000000060976144016102c190cd1d4c_zfx_big0.JPG" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="titleone to" style={{ fontSize: '12px', color: 'black' }}>
                                            广誉远 定坤丹口服液 10ml*5支*4小盒

                                    </p>
                                        <p className="to">滋补气血，调经疏郁。用于气血两虚，气滞血瘀所致的月经不调、行经腹痛</p>
                                        <p className="to">规格: 10ml*5支*4小盒</p>
                                        <div className="proPrice">
                                            <div>
                                                <p className="p1">¥<span>1580</span> </p>
                                                <p className="p2">¥<span>1580</span> </p>
                                            </div>
                                            <h2>+</h2>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>
                    <div className="cart-footer">
                        <p>
                            合计
                        <span>￥518.50</span>
                        </p>
                        <h5>
                            结算(5)
                        </h5>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
export default Cart