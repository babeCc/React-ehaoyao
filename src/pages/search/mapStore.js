import Throttle from 'lodash-decorators/throttle';
import {goodsKeyActions,searchAsyncActions,inputValueChange,pushChooseActions} from "actions/home/homeActionCreator";
export const mapStateToProps = (state)=>({
    goodsKey : JSON.parse(localStorage.getItem("goodsKey"))|| state.search.goodsKey || [],
    searchResult :state.search.searchResult|| [],
    inputValue:state.search.inputValue
})
    


export const mapDipatchToProps = (dispatch) =>({
    handleGetGoodsKey(){
        dispatch(goodsKeyActions())
    },
    handleInputChange(e){
            let val = e.target.value;
           dispatch(inputValueChange(val))    
  
    },
   
    handleGetData(val){
     
        dispatch(searchAsyncActions(val))
    },
    handlepushChoose(val){

        dispatch(pushChooseActions(val))

    }
    // handleChangeKey(val){
    //     dispatch(changeKeyActions(val))
    // }
    
   
})  
   