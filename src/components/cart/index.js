import React, { Component } from 'react'

import {Container} from "./styled"

import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class CartCom extends React.Component{
        constructor(){
            super();
           
        }
        render(){
            let{flag}=this.props;
            
            return(
                <Container style={{display:!flag?"none":"block"}}>
                <div className="mask" ></div>
                <div className="box">
                    <p>商品已添加到购物车</p>
                    <a onClick={this.handleToCart.bind(this)}>去结算</a>
                    <a onClick={this.handleBack.bind(this)}>再逛逛</a>
                </div>
            </Container>
            )
          
        }
        handleToCart(){
            this.props.history.push("/cart")
            this.props.handleFlag()
        }
        handleBack(){
           this.props.handleFlag()
        }
}

export default CartCom;