
import React from "react";
import {HeaderContainer} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Header extends React.Component{
        constructor(){
            super()
            this.flag=false;
        }
        render(){
         
            return(
                <HeaderContainer>
                     <div className="doctor_header">
                        <div className="header_left" onClick={this.handleBack.bind(this)} >&lt;</div>
                        <div className="header_title">{this.props.title?this.props.title:"问好药师"}</div>
                        <div className="header_right" onClick={this.handleClick.bind(this)}>...</div>
                    </div>
                    <div className="header_box" style={{display:this.flag?"block":"none"}}>
                        <div className="mask" onClick={this.handleClick.bind(this)}></div>
                        <div className="menu_list">
                            <ul>
                                <a href="#/home" style={{color:"#000"}}><li>首页</li></a>
                                <a  href="#/sort" style={{color:"#000"}}><li>分类</li></a>
                                <a  href="#/mine" style={{color:"#000"}}><li>我的</li></a>
                                <a  href="#/search" style={{color:"#000"}}> <li>搜索</li></a>
                            </ul>
                        </div>
                    </div>
                </HeaderContainer>
                   
            )
        }
        handleClick(){
            this.flag=!this.flag;
            this.forceUpdate();

        }
        handleBack(){
            this.props.history.goBack();
        }
}

export default Header;