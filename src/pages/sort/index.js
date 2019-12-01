import React from "react"
import { Header, Container } from "./styled"
import { Icon } from 'antd';

class Sort extends React.Component {
    render() {
        return (
            <div>
                {/* <Header bg="yellow">猫眼电影</Header>
                <MovieHeader bg="pink">千锋教育</MovieHeader>
                <SearchInput value="请输入内容" onChange={this.handleChange.bind(this)}/>
                <Container/> */}
                <Header>
                    <Icon type="left" />
                    <div>
                        <Icon type="search" />
                        <span>请输入药品名称或症状</span>
                    </div>
                </Header>
                <Container>
                    <div className="category-wrapper">
                        <div className="navleft">
                            <ul>
                                <li>中西药品</li>
                                <li>中西药品</li>
                                <li>中西药品</li><li>中西药品</li>
                                <li>中西药品</li>
                            </ul>
                        </div>
                        <div className="subject bg">
                            <div className="label-list">
                                <a href="">补益用药</a>
                                <a ref="">补益用药</a>
                                <a ref="" >补益用药</a>
                                <a ref="" >补益用药</a>
                                <a ref="">补益用药</a>
                                <a ref="">补益用药</a>
                            </div>
                            <dl>
                                <dt>补益用药</dt>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                
                            </dl>
                            <dl>
                                <dt>补益用药</dt>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                
                            </dl>
                            <dl>
                                <dt>补益用药</dt>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                <dd>
                                    <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""/>
                                    <span>补气养血</span>
                                </dd>
                                
                            </dl>

                        </div>
                       
                        <Icon type="vertical-align-top" />
                       
                    </div>

                </Container>

            </div>
        )
    }
    handleChange() {

    }
}

export default Sort;