import {activityAsyncAction} from "actions/home/homeActionCreator";
import {AddProAction} from "actions/cart/cartActionCreator"
export const mapStateToProps = (state)=>({
    goods:state.activity.goods || []
})


export const mapDispatchToProps = (dispatch)=>({
    handleActivityAsyncData(){
        dispatch(activityAsyncAction())
    },
    handleListAdd(obj){
        dispatch(AddProAction(obj))
    },
})