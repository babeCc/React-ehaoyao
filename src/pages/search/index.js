import React from "react";

import {SearchContainer} from './styled';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDipatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDipatchToProps)
@withRouter

class Search extends React.Component{
    constructor(){
        super()
       this.flag=true;
    }
    render(){
        
        let{goodsKey,inputValue,searchResult} = this.props;
      
        return(
            <SearchContainer>
                <div className="search_header">
                    <div className="left" onClick={this.handleBack.bind(this)}>&lt;</div>
                    <div className="input">
                        <div className="search">
                            <img src="img/lsearch.png" alt=""/>
                        </div>
                        <input type="text" placeholder="泰尔丝 补肺丸 鸿茅药酒" value={inputValue} onChange={this.props.handleInputChange}/>
                        <div className="close">
                            <img src="img/close.png" alt=""/>
                        </div>
                    </div>
                    <div className="right">搜索</div>
                </div>
                <div className="search_wrapper" style={{display:searchResult.length?"none":"block"}}>
                    <dl className="hot-search">
                        <dt className="title" >热门搜索</dt>
                        {
                            goodsKey.map((item)=>(
                            <dd key={item.keysId}>{item.keysValue}</dd>
                            ))
                        }
                    </dl>
                </div>
                <ul className="search-result" style={{display:searchResult?"block":"none"}}>
                   {    
                         
                           
                              searchResult.map((item)=>(
                              <li key={item}>{item}</li>
                              )
                                    
                                )
                            }
                
                </ul>
            </SearchContainer>
        )
    }
  
    handleBack(){
        this.props.history.goBack();
    }
    componentDidMount(){
        this.props.handleGetGoodsKey();
    }
}

export default Search;