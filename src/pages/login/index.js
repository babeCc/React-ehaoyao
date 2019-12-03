import React,{Fragment} from "react"
import {Icon} from "antd"
import {Header,Container} from "./styled"
import {connect} from "react-redux";

import {withRouter} from "react-router-dom";


@withRouter
class Login extends React.Component{
    render(){
        return(
            <Fragment>
                <Header>
                    <Icon type="left" onClick={this.handleBack.bind(this)} />
                    <div>
                        会员登录
                    </div>
                    <a>注册</a>
                </Header>
                <Container>
                    <div className="mes">
                    <input type="text" placeholder="请输入手机号码/用户名" className="userName"/>
                    <input type="text" placeholder="密码" className="password"/>
                    <p className="forgetmm">
                        <span>忘记密码?</span>
                        <span>短信快捷登录</span>
                    </p>
                        
                    </div>
                    <button className="deng" >登录</button>
                    <h2>第三方登录</h2>
                    {/* <div className="login-third">
                        <img src="../../../public/img/_20191128201651.png" alt=""/>
                    </div> */}
                </Container>
            </Fragment>

        )
    }
    handleBack(){
        this.props.history.goBack();
    }
}
export default Login;