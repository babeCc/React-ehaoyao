import {linkAsyncAction,sortIndexAction,sortXuanAction,changeKeyActions,serchXuanAction} from "actions/sort/sortActionCreator"
import {AddProAction} from "actions/cart/cartActionCreator"
export const mapStateToProps = (state)=>({
<<<<<<< HEAD
    totalPage:state.sort.totalPage,
    goods:state.sort.goods
})

export const mapDispatchToProps = (dispatch)=>({
    handleListAdd(obj){
        dispatch(AddProAction(obj))
       
=======
    data:state.sort.data || [],
    goods:state.sort.goods,
    isSelf:state.sort.isSelf,
    type: state.sort.type,
    descs: state.sort.descs,
    activeClass:state.sort.activeClass
})

export const mapDispatchToProps = (dispatch)=>({
   

    handleListAdd(obj){
        dispatch(AddProAction(obj))
>>>>>>> tutu
    },

    handleGetLink(link,page){
       
        dispatch(linkAsyncAction(link,page))
<<<<<<< HEAD
=======

    },
    // handleGetData(index){
    //     dispatch(sortIndexAction(index))
    // },

    //传id列表排序
    handleXuan(isSelf,type,descs,key,index){
        dispatch(sortXuanAction(isSelf,type,descs,key,index))
    },


    //关键字排序渲染
    handleSerchXuan(isSelf,type,descs,key,index){
        dispatch(serchXuanAction(isSelf,type,descs,key,index))
    },

    //关键字默认渲染
    handleChangeKey(val,page){
        dispatch(changeKeyActions(val,page))
>>>>>>> tutu
    }

    
    
})