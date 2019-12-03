import {linkAsyncAction} from "actions/sort/sortActionCreator"
import {AddProAction} from "actions/cart/cartActionCreator"
export const mapStateToProps = (state)=>({
    data:state.sort.data || [],
    goods:state.sort.goods
})

export const mapDispatchToProps = (dispatch)=>({
   
    handleGetLink(link){
        dispatch(linkAsyncAction(link))
    },
    handleListAdd(obj){
        dispatch(AddProAction(obj))
        

    }
    
})