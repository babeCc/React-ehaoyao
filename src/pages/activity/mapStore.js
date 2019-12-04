<<<<<<< HEAD
import {activityAsyncAction,flagAction} from "actions/home/homeActionCreator";

=======
import {activityAsyncAction} from "actions/home/homeActionCreator";
import {AddProAction} from "actions/cart/cartActionCreator"
>>>>>>> tutu
export const mapStateToProps = (state)=>({
    goods:state.activity.goods || [],
    title:"限时抢购",
    flag:state.activity.flag
})


export const mapDispatchToProps = (dispatch)=>({
    handleActivityAsyncData(){
        dispatch(activityAsyncAction())
    },
<<<<<<< HEAD
    handleFlag(){
        dispatch(flagAction())
    }
=======
    handleListAdd(obj){
        dispatch(AddProAction(obj))
    },
>>>>>>> tutu
})