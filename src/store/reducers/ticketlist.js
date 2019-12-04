import {getTicketListAsync} from "actions/home/homeActionType";

import {handleActions} from "redux-actions";
let  defaultState = {
    data:{},
    flag:false
}

export default handleActions({
    [getTicketListAsync]:(state,action)=>{
        let ticketState = JSON.parse(JSON.stringify(state));
        ticketState.data = action.payload.data;
        if(!action.payload.data.goodList){
        ticketState.flag=true;
        }
        return  ticketState;
    }
},defaultState)