import React, { Fragment } from "react"
import { Icon } from 'antd';
// import { Header } from "../detail/styled";
import { Header, Container } from "./styled"


class Mine extends React.Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <Icon type="left" />
                    <div>
                        个人中心
                    </div>
                    <span>设置</span>
                </Header>
                <Container>
                    <div className="title-box">
                        <img src="../../../public/img/_20191128183059.png" alt="" />
                        <h4>hys17715582879nxd</h4>
                        <span>充值</span>
                        <div className="fbox">
                            <img src="../../../public/img/1574938198(1).jpg" alt="" />
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
                        <img src="../../../public/img/_20191128193206.png" alt=""/>
                        
                    </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
export default Mine;