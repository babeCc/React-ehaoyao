import React,{Fragment} from "react"
import {Icon} from "antd"
import {Header,Container} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProp} from "./mapStore";


import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps,mapDispatchToProp)





class Login extends React.Component{
    constructor(){
        super()
        this.state={
            status:"注册"
        }
    }
    render(){
        let {status}=this.state;
        return(
            <Fragment>
               
                <Header>
              
                    <Icon type="left" onClick={this.handleBack.bind(this)} />
                    <div>
                        会员登录
                    </div>
                    <a onClick={this.handleChange.bind(this)}>{this.props.flag?"登录":"注册"}</a>
                </Header>
                <Container>
               
                    <div className="mes">
                    <input type="text" placeholder="请输入手机号码/用户名" className="userName" value={this.props.username||""} onChange={this.props.handleChangeUsername}/>
                    <input type="password" placeholder="密码" className="password" value={this.props.password||''} onChange={this.props.handleChangePassword}/>
                    <p className="forgetmm" style={{display:this.props.flag?"none":"block"}}>
                        <span>忘记密码?</span>
                        <span>短信快捷登录</span>
                    </p>
                        
                    </div>
                    <div className="login" style={{display:this.props.flag?"none":"block"}}>
                        <button className="deng" onClick={this.handleLogin.bind(this,this.props.username,this.props.password)} >登录</button>
                        <h2>第三方登录</h2>
                    </div>
                    <div className="register" style={{display:!this.props.flag?"none":"block"}}>
                        <button className="deng" onClick={this.handleRegiser.bind(this,this.props.username,this.props.password)} >注册</button>
                    </div>
                  
                </Container>
            </Fragment>

        )
    }
    componentDidMount(){
        
        
    }
    handleLogin(username,password){
        this.props.handleLogin(username,password)
        
    }
    handleRegiser(username,password){
        this.props.handleRegiser(username,password)
        
    }
    handleChange(){
        this.props.handleFlag();
    }
    handleBack(){
        this.props.history.goBack();
    }
    handleTurn(){
        
    }
}
export default Login;