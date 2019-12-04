import {sortAsync,linkAsync} from "actions/sort/sortActionType";
import {handleActions} from "redux-actions"
let defaultState = {
    totalPage:1,
    goods:[]
}

export default  handleActions({
   
    [sortAsync]:(state,action)=>{
        var sortState = JSON.parse(JSON.stringify(state));
         sortState.totalPage = action.payload.pagination.totalPage;
       
        if(action.payload.pagination.page==1){
            sortState.goods=action.payload.data.goodsList;
           
        }else{
            sortState.goods = [...sortState.goods,...action.payload.data.goodsList];
           
        }
        
        return sortState;
       
    }
},defaultState)