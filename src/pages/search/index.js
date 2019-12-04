import React from "react";

import {SearchContainer} from './styled';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDipatchToProps} from "./mapStore";
import throttle from 'lodash/throttle';
@connect(mapStateToProps,mapDipatchToProps)
@withRouter

class Search extends React.Component{
    constructor(props){
        super(props)
       this.flag=true;
       let {handleGetData} = this.props;
       
        this.handleGetDataMain=throttle(handleGetData,1000) 
    }
    handleGetData(e){
        let val = e.target.value;
        
        
                this.handleGetDataMain(val)
       
       
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
                        <input type="text" placeholder="泰尔丝 补肺丸 鸿茅药酒" value={inputValue} onChange={this.props.handleInputChange} onInput={this.handleGetData.bind(this)}/>
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
                            (goodsKey?goodsKey:[]).map((item)=>(
                            <dd key={item.keysId}>{item.keysValue}</dd>
                            ))
                        }
                    </dl>
                </div>
                <ul className="search-result" style={{display:searchResult?"block":"none"}}>
                   {          
                              (searchResult?searchResult:searchResult).map((item)=>(
                              <li key={item} onClick={this.chooseHandle.bind(this,item)}>{item}</li>
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
    chooseHandle(item){
        // console.log(item)
        this.props.handlepushChoose(item);
        setTimeout(()=>{
            this.props.history.push("/search/"+item)
        },1000)
        


    }
}

export default Search;