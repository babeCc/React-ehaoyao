
import {commandAsyncAction} from "actions/cartCommand/commandActionCreator";
import {AddProAction,addCartAction,numChangeAction,reduceCartAction,allSelectedAction,setFlagAction,eachSelectAction} from "actions/cart/cartActionCreator";
export const mapStateToProps = (state)=>({
    list:state.cart.prolist|| [],
    countNum:state.cart.countNum||"",
    countPrice:state.cart.countPrice||"",
    all:state.cart.all,
    num:state.cart.num,

})

// export const mapDispatchToProps = (dispatch)=>({
//     // handleGetCommand(){
//     //     dispatch(commandAsyncAction(1))
//     // }
// })
// export const mapDispatchToProps = (dispatch)=>({
//     handleGetCommand(){
//         dispatch(commandAsyncAction(1))
//     }
// })

export const mapDispatchToProps = (dispatch)=>({
    handleAddPro(id){
        dispatch(addCartAction(id))
    },
    handleNumChangePro(val,id){
        dispatch(numChangeAction(val,id))
    },
    handleReducePro(id){
        dispatch(reduceCartAction(id))
    },
    handleAllselect(){
        dispatch(allSelectedAction())
    },
    handleSetFlag(){
        dispatch(setFlagAction())
    },
    handleEachSelect(id){
        dispatch(eachSelectAction(id))
    }
    
})