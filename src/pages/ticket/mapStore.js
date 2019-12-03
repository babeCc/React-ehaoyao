
import {ticketAsyncAction,getAsynAction} from "actions/home/homeActionCreator";
export const mapStateToProps=(state)=>({
    data: JSON.parse((localStorage.getItem("ticket"))) || state.ticket.data || []
})

export const mapDipatchToProps=(dispatch)=>({
     handleGetData(){
         dispatch(ticketAsyncAction())
     },
     handleGet(Id){
         dispatch(getAsynAction(Id))
     }
})