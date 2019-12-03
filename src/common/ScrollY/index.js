import React, { Component} from 'react'
import BScroll from "better-scroll"
import {Bswrapper} from "./styled"
 class BscrollY extends Component {
    constructor(){
        super()
    }
    render() {
       
        return (
            <Bswrapper ref="wrapper">
               {this.props.children};
            </Bswrapper>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            pullUpLoad:true,
            click:true,
            tap:true,
            
        });
    }
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback();
        })
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
}
export default BscrollY