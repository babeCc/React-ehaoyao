import React, { Fragment } from "react"
import { Icon } from 'antd';
// import { Header } from "../detail/styled";
import { Header, Container } from "./styled"

import {withRouter} from "react-router-dom";
@withRouter
class Mine extends React.Component {
    constructor(){
        super()
        this.state={
            userInfo:JSON.parse(sessionStorage.getItem("userInfo"))
        }
    }
    render() {
        let {userInfo} = this.state;
        return (
            <Fragment>
                <Header>
                    <Icon type="left"onClick={this.handleBack.bind(this)} />
                    <div >
                        个人中心
                    </div>
                    <span>设置</span>
                </Header>
                <Container>
                    <div className="title-box">
                        <div className="picBox">
                            <img src={userInfo.urlPic} alt="" />
                        </div>
                        <h4>{userInfo.name}</h4>
                        <span>充值</span>
                        <div className="fbox">
                            <img src="img/1574938198(1).jpg" alt="" />
                        </div>

                    </div>
                    <div className="internal">
                    <ul>
                        <li>
                            <span>¥0</span>
                            <p>余额</p>
                        </li>
                        <li>
                            <span>¥0</span>
                            <p>余额</p>
                        </li>
                        <li>
                            <span>¥0</span>
                            <p>余额</p>
                        </li>
                        <li>
                            <span>¥0</span>
                            <p>余额</p>
                        </li>
                        <li>
                        <Icon type="pay-circle" theme="filled" style={{ color:'#f7b95f',fontSize:'19px'}}/>
                        <p>分销赚钱</p>
                        </li>
                        <li>
                        <Icon type="pay-circle" theme="filled" style={{ color:'#f7b95f',fontSize:'19px' }}/>
                        <p>分销赚钱</p>
                        </li>
                        <li>
                        <Icon type="pay-circle" theme="filled" style={{ color:'#f7b95f',fontSize:'19px' }}/>
                        <p>分销赚钱</p>
                        </li>
                        <li>
                        <Icon type="pay-circle" theme="filled" style={{ color:'#f7b95f',fontSize:'19px' }}/>
                        <p>分销赚钱</p>
                        </li>
                        <li>
                        <Icon type="pay-circle" theme="filled" style={{ color:'#f7b95f',fontSize:'19px' }}/>
                        <p>分销赚钱</p>
                        </li>
                    </ul>
                    <div>
                        <img src="img/_20191128193206.png" alt=""/>
                        
                    </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
    handleBack(){
        this.props.history.push("/home")
    }
}
export default Mine;