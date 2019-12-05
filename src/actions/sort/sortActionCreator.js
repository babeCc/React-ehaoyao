import {sortAsync,linkAsync,sortIndexPro,sortXuanPro,getSerchProAsync,serchXuanProAsync} from "./sortActionType";
import {createAction} from "redux-actions";
import {sortApi,linkApi,sortXuanApi,getSerchProApi,getSerchSortProApi} from "api/activityA";
export const sortAsyncAction = (id,page)=>{
    let sortAction = createAction(sortAsync,(data)=>data)
        return async (dispatch)=>{
            let data = await sortApi(id,page);
          
            dispatch(sortAction(data))
        }
}
export const linkAsyncAction = (link,page)=>{
        return async (dispatch)=>{
            let data = await linkApi(link);
           
            dispatch(sortAsyncAction(data.data.thirdNew?data.data.thirdNew:"",page))
        }
}
// export const sortIndexAction = (index)=>({
//     type:sortIndexPro,
//     index:index

// })
export const sortXuanAction = (isSelf,type,descs,key,index)=>{
    console.log(index)
    let xuanAsyncAction = createAction(sortXuanPro,(data)=>data);
    
    return async (dispatch)=>{
        let data = await sortXuanApi(isSelf,type,descs,key);
        let obj={
        arr:data,
        isSelf,
        type,
        descs,
        index
    
    }
       
        dispatch(xuanAsyncAction(obj))
    }

}
//模糊查询获取默认数据

export const changeKeyActions = (val,page) =>{
    let getSerchProAction = createAction (getSerchProAsync,(data)=>data);
    return async (dispatch)=>{
        let data = await getSerchProApi(val,page);
        let obj={
            list:data,
            val:val
        }
        console.log(obj)
        dispatch(getSerchProAction(obj))
    }
}

//关键字排序渲染
export const serchXuanAction = (isSelf,type,descs,key,index) =>{
    let serchXuanProAction = createAction (serchXuanProAsync,(data)=>data);
    return async (dispatch)=>{
        let data = await getSerchSortProApi(isSelf,type,descs,key);
        let obj={
            list:data,
            isSelf,
            type,
            descs,
            index
        }
       
        dispatch(serchXuanProAction(obj))
    }
}


