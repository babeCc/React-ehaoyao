import {sortAsync,linkAsync,sortIndexPro,sortXuanPro,getSerchProAsync,serchXuanProAsync} from "actions/sort/sortActionType";
import {handleActions} from "redux-actions"
let defaultState = {
    data:[],
    goods:[],
    isSelf:"",
    type: 1,
    descs:'',
    activeClass:0,
    total:[]
}

export default  handleActions({
   
    [sortAsync]:(state,action)=>{
        var sortState = JSON.parse(JSON.stringify(state));
         sortState.data = action.payload;
         
        sortState.goods = [...sortState.goods,...action.payload.data.goodsList];
        return sortState;
    },
    [sortXuanPro]:(state,action)=>{
        var sortXuanState = JSON.parse(JSON.stringify(state));
        sortXuanState.activeClass=action.payload.index;
        sortXuanState.goods = action.payload.arr;
        sortXuanState.isSelf=action.payload.isSelf;
        sortXuanState.type=action.payload.type;
        sortXuanState.descs=action.payload.descs;
  // sortState.goods = [...sortState.goods,...action.payload.data.goodsList];
        return sortXuanState;
    },
    [getSerchProAsync]:(state,action)=>{
        var searchGetState = JSON.parse(JSON.stringify(state));
        searchGetState.goods=action.payload.list;
        // console.log(searchGetState.goodsList)
        return searchGetState;
    },
    [serchXuanProAsync]:(state,action)=>{
        var sortkeyXuanState = JSON.parse(JSON.stringify(state));
        sortkeyXuanState.activeClass=action.payload.index;
        sortkeyXuanState.goods = action.payload.list;
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