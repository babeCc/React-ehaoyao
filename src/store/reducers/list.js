import {listAsync,} from "actions/list/listActionType";
import {handleActions} from "redux-actions";

let defaultState =  {
    list:[]
}

export default handleActions({
    [listAsync]:(state,action)=>{
        let listState = JSON.parse(JSON.stringify(state));
        
        listState.list = action.payload.data;
        
        localStorage.setItem("list",JSON.stringify(action.payload.data));
        return listState
    },
    
    

},defaultState)