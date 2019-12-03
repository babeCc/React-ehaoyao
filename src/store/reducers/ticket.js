
import {handleActions} from "redux-actions";
import {ticketAsync} from "actions/home/homeActionType";
let defaultState = {
data:[]
}

export default handleActions({
    [ticketAsync]:(state,action)=>{
        let ticketState = JSON.parse(JSON.stringify(state));
        ticketState.data = action.payload.data;
      
        localStorage.setItem("ticket",JSON.stringify(action.payload.data));
        return ticketState;
    }
},defaultState)

