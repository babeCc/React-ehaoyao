import {sortAsync,linkAsync} from "actions/sort/sortActionType";
import {handleActions} from "redux-actions"
let defaultState = {
    data:[],
    goods:[]
}

export default  handleActions({
   
    [sortAsync]:(state,action)=>{
        var sortState = JSON.parse(JSON.stringify(state));
         sortState.data = action.payload;
        sortState.goods = action.payload.data.goodsList;
        return sortState;
    }
},defaultState)