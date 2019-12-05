import {sortAsync,linkAsync,sortIndexPro,sortXuanPro,getSerchProAsync,serchXuanProAsync} from "actions/sort/sortActionType";
import {handleActions} from "redux-actions"
let defaultState = {
    totalPage:1,
    reducerPage:1,
    goods:[],
    data:[],
 
    isSelf:"",
    type: 1,
    descs:'',
    activeClass:0,
    total:[]
}

export default  handleActions({
   
    [sortAsync]:(state,action)=>{
        var sortState = JSON.parse(JSON.stringify(state));
        console.log(action.payload)
        sortState.totalPage = action.payload.pagination.totalPage;
        sortState.reducerPage = action.payload.pagination.page;
        if(action.payload.pagination.page==1){
            sortState.goods=action.payload.data.goodsList;
           
        }else{
            sortState.goods = [...sortState.goods,...action.payload.data.goodsList];
           
        }
      
        return sortState;
       
   

    },
    [sortXuanPro]:(state,action)=>{
        var sortXuanState = JSON.parse(JSON.stringify(state));
       
        sortXuanState.activeClass=action.payload.index;
        sortXuanState.goods = action.payload.arr.data.goodsList;
        sortXuanState.isSelf=action.payload.isSelf;
        sortXuanState.type=action.payload.type;
        sortXuanState.descs=action.payload.descs;
  // sortState.goods = [...sortState.goods,...action.payload.data.goodsList];
        return sortXuanState;
    },
    [getSerchProAsync]:(state,action)=>{
        var sortState = JSON.parse(JSON.stringify(state));
       
        
        if(action.payload.list.pagination.page==1){
            sortState.goods=action.payload.list.data.goodsList;
           
        }else{
            sortState.goods = [...sortState.goods,...action.payload.list.data.goodsList];
           
        }
        sortState.totalPage = action.payload.list.pagination.totalPage;
        sortState.reducerPage = action.payload.list.pagination.page;
        return sortState;
        
        
    },
    [serchXuanProAsync]:(state,action)=>{
        var sortkeyXuanState = JSON.parse(JSON.stringify(state));
        sortkeyXuanState.activeClass=action.payload.index;
        sortkeyXuanState.goods = action.payload.list.data.goodsList;
        sortkeyXuanState.isSelf=action.payload.isSelf;
        sortkeyXuanState.type=action.payload.type;
        sortkeyXuanState.descs=action.payload.descs;
  // sortState.goods = [...sortState.goods,...action.payload.data.goodsList];
        return sortkeyXuanState;
    },

},defaultState)
// let obj={
//     data:data.data.goodsList,
//     isSelf,
//     type,
//     descs,
//     index

// }
