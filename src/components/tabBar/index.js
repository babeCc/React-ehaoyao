import React, { Component } from 'react'
import {TabBarRoute} from "router"
import {TabBarContainer} from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class TabBar extends Component {
    constructor(){
        super()
        
      
    }
    render(){
        let {path}=this.props;
        return(
            <TabBarContainer>
                <div className="home_footer">
                    <ul>
                        {
                            TabBarRoute.map((item)=>(
                            <li key={item.title} onClick={this.handleTo.bind(this,item.path)}
                            style={{color:path==item.path?"#ff3c54":"#000"}} 
                            >
                                <i className="iconfont">{item.icon}</i>
                                    <p>{item.title}</p>
                                    
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </TabBarContainer>
        )
    }
    handleTo(path){
       
        this.props.history.push(path);
    
    }
}

export default TabBar;
