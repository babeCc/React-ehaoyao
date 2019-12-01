
import {goodsKeyActions,searchAsyncActions,inputValueChange} from "actions/home/homeActionCreator";
export const mapStateToProps = (state)=>({
    goodsKey : state.search.goodsKey || [],
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
            dispatch(searchAsyncActions(val))
    }
})  
   