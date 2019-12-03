import { AddCart,AddCartPro,numChangePro,ReduceCartPro,allSelectedPro,setFlagPro,eachSelectPro} from "./cartActionType";
// import {createAction} from "redux-actions"
// import {doctorApi} from "api/activityA";
// console.log(111)
export const AddProAction = (obj) => ({
    type: AddCart,
    obj: obj
})

export const addCartAction=(id)=>({
    type:AddCartPro,
    id:id
})
export const reduceCartAction=(id)=>({
    type:ReduceCartPro,
    id:id
})

export const numChangeAction=(val,id)=>({
    type:numChangePro,
    val:val,
    id:id


})
export const allSelectedAction=()=>({
    type:allSelectedPro,

})
export const setFlagAction=()=>({
    type:setFlagPro,

})
export const eachSelectAction=(id)=>({
    type:eachSelectPro,
    id:id


})






