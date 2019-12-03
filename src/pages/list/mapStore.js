import {linkAsyncAction} from "actions/sort/sortActionCreator"
import {AddProAction} from "actions/cart/cartActionCreator"
export const mapStateToProps = (state)=>({
    data:state.sort.data || [],
    goods:state.sort.goods
})

export const mapDispatchToProps = (dispatch)=>({
   
<<<<<<< HEAD
    handleGetLink(link){
        dispatch(linkAsyncAction(link))
    },
    handleListAdd(obj){
        dispatch(AddProAction(obj))
        

=======
    handleGetLink(link,page){
       
        dispatch(linkAsyncAction(link,page))
>>>>>>> c74ca575f06ec7df21474bb9672dbf7d233aa961
    }
    
})