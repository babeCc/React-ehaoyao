
import {handleActions} from "redux-actions";

import {goodsKeysAsync,seacrhAsync,inputValueAction} from "actions/home/homeActionType";

 let defaultState =  {
    goodsKey:[],
    searchResult:[],
    inputValue:""
 }

 export default handleActions({
    [goodsKeysAsync]:(state,action)=>{
        var  searchState = JSON.parse(JSON.stringify(state));
            searchState.goodsKey=action.payload.data;
            localStorage.setItem("goodsKey",JSON.stringify(action.payload.data))
            return searchState;
    },
    [seacrhAsync]:(state,action)=>{
        var searchState = JSON.parse(JSON.stringify(state));
       
        searchState.searchResult = action.payload.status==0?action.payload.data:[];
        return searchState;
    },
    [inputValueAction]:(state,action)=>{
        var searchState = JSON.parse(JSON.stringify(state));
           
            searchState.inputValue = action.payload;
        return searchState;
    },
 },defaultState)