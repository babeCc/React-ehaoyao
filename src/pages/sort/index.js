import React from "react"
import { Header, Container } from "./styled"
import { Icon } from 'antd';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import  BscrollY from "common/ScrollY";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Sort extends React.Component {
    constructor() {
        super()
        this.activeIndex = 0;
       
    }
    render() {
        let { list } = this.props;
      
        return (
            <div>
                
                <Header>
                    <Icon type="left" onClick={this.handleBack.bind(this)} />
                    <div onClick={this.handleToSearch.bind(this)}>
                        <Icon type="search" />
                        <span>请输入药品名称或症状</span>
                    </div>
                </Header>
                <Container>
                    <div className="category-wrapper">
                        <div className="navleft">
                            <ul>
                                {
                                    (list[this.activeIndex]?list[this.activeIndex].list:[]).map((item, index) => (
                                        <li key={index} id={item.cid} onClick={this.handleActive.bind(this, index)}
                                            className={index == this.activeIndex ? "active" : "" }
                                           
                                        >{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="subject bg">
                            <div>
                                <div className="label-list">
                                    {
<<<<<<< HEAD
                                        (list[this.activeIndex]?list[this.activeIndex].list:[]).map((item) => (
=======
                                      (list[this.activeIndex]?list[this.activeIndex].list:[]).map((item) => (
>>>>>>> c74ca575f06ec7df21474bb9672dbf7d233aa961
                                            <a href={"#sort#"+item.cid} key={item.cid} >{item.name}</a>
                                        ))
                                    }
                                </div>
                            </div>

                            {
<<<<<<< HEAD
                                (list[this.activeIndex]?list[this.activeIndex].list:[]).map((item, index) => (
=======
                                (list[this.activeIndex]?list[this.activeIndex].list:[]).map((item) => (
>>>>>>> c74ca575f06ec7df21474bb9672dbf7d233aa961
                                    <dl id={"sort#"+item.cid} key={item.cid} >
                                        <dt>{item.name}</dt>
                                        {
                                            item.list.map((item, index) => (
                                                <dd key={item.cid} id={item.cid} onClick={this.handleToList.bind(this,list[this.activeIndex].cid,item.cid)}>
                                                    <img src={"http://image.qumaiyao.com/" + item.imageUrl}></img>
                                                    <span>{item.name}</span>
                                                </dd>
                                            ))
                                        }
                                    </dl>
                                ))
                            }


                        </div>

                        <Icon type="vertical-align-top" />

                    </div>

                </Container>

            </div>
        )
    }
    
   handleToList(type,detail){
      

        this.props.history.push("/list/c"+type+"-s"+detail)
       
   }
    handleToSearch() {
        this.props.history.push("./search");
    }
    handleBack() {
        this.props.history.goBack();
    }
    handleActive(index) {
       
        this.activeIndex = index;
        this.forceUpdate()
    }
    componentDidMount() {
       this.props.handleGetList()
<<<<<<< HEAD
=======
      
>>>>>>> c74ca575f06ec7df21474bb9672dbf7d233aa961
    }
}

export default Sort;