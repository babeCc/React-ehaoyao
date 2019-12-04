import {AddCart,AddCartPro,numChangePro,ReduceCartPro,allSelectedPro,setFlagPro,eachSelectPro} from "actions/cart/cartActionType";
import {handleActions} from "redux-actions";
let defaultState = {
    prolist:JSON.parse(localStorage.getItem("cartList"))||[],
    countNum:0,
    countPrice:0,
    all:false,
    num:JSON.parse(localStorage.getItem("num"))||""
}

export default handleActions({
    
    [AddCart]:(state,action)=>{
        let addCartState = JSON.parse(JSON.stringify(state));
        let has=0,num=0;
        addCartState.prolist.forEach(item => {
            if(item.id==action.obj.id){
                item.num++
                has=1;
            }  
            num+=item.num;            
        });
        if(!has){
            addCartState.prolist.push(action.obj)
        }
        addCartState.num=num;
        localStorage.setItem("cartList",JSON.stringify(addCartState.prolist))    
        localStorage.setItem("num",JSON.stringify(addCartState.num))    
        return addCartState;
    },
    [AddCartPro]:(state,action)=>{
        let addCartProState = JSON.parse(JSON.stringify(state));
        let countNum = 0,countPrice=0,num=0
        addCartProState.prolist.forEach(item => {
            if(item.id==action.id){
                item.num++
            }
            if(item.flag){
                countNum+=Number(item.num);
                countPrice+=(10*Number(item.price))/10*Number(item.num);
            }
            num+=item.num;           
        });
        addCartProState.num=num;
        addCartProState.countNum = countNum;
        addCartProState.countPrice = countPrice;
       
        localStorage.setItem("cartList",JSON.stringify(addCartProState.prolist))
        localStorage.setItem("num",JSON.stringify(addCartProState.num))       
        // var arr=localStorage.getItem("cartList")
        return addCartProState;
    },
    [ReduceCartPro]:(state,action)=>{
        let reduceCartProState = JSON.parse(JSON.stringify(state));
        let countNum = 0,countPrice=0,num=0
        reduceCartProState.prolist.forEach(item => {
            if(item.id==action.id){
                if(item.num==1){
                    item.num=1
                }else{
                    item.num--
                }
                
            }   
            if(item.flag){
                countNum+=Number(item.num);
                countPrice+=(10*Number(item.price))/10*Number(item.num);
            }   
            num+=item.num;     
        });
        reduceCartProState.num=num;
        reduceCartProState.countNum = countNum;
        reduceCartProState.countPrice = countPrice;
        localStorage.setItem("cartList",JSON.stringify(reduceCartProState.prolist)) 
        localStorage.setItem("num",JSON.stringify(reduceCartProState.num))         
        // var arr=localStorage.getItem("cartList")
        return reduceCartProState;
    },
    [numChangePro]:(state,action)=>{
        let numChangeProState = JSON.parse(JSON.stringify(state));
        let countNum = 0,countPrice=0,num=0
        numChangeProState.prolist.forEach(item => {
            if(item.id==action.id){
                item.num=action.val
            } 
            if(item.flag){
                countNum+=Number(item.num);
                countPrice+=(10*Number(item.price))/10*Number(item.num);
            }  
            num+=item.num;       
        });
        numChangeProState.num=num;
        numChangeProState.countNum = countNum;
        numChangeProState.countPrice = countPrice;
        
        localStorage.setItem("cartList",JSON.stringify(numChangeProState.prolist))
        localStorage.setItem("num",JSON.stringify(numChangeProState.num))        
        console.log(numChangeProState.prolist,1111)
        // var arr=localStorage.getItem("cartList")
        return numChangeProState;
    },
    [allSelectedPro]:(state,action)=>{
        let allSelectedState = JSON.parse(JSON.stringify(state));
        allSelectedState.all=!allSelectedState.all;
        let countNum = 0,countPrice=0
        allSelectedState.prolist.forEach(item => {
            item.flag=allSelectedState.all;
            if(item.flag){
                countNum+=Number(item.num);
                countPrice+=(10*Number(item.price))/10*Number(item.num);
            }
        });
        allSelectedState.countNum = countNum;
        allSelectedState.countPrice = countPrice;
      
        // var arr=localStorage.getItem("cartList")
        return allSelectedState;
    },
    [setFlagPro]:(state,action)=>{
        let setFlagState = JSON.parse(JSON.stringify(state));
        let num=0;
        setFlagState.prolist.forEach(item => {
            item.flag=setFlagState.all;
            num+=item.num;
        });
        setFlagState.num=num;
        console.log(num)

        localStorage.setItem("cartList",JSON.stringify(setFlagState.prolist))   
            
        // var arr=localStorage.getItem("cartList")
        return setFlagState;
    },
    [eachSelectPro]:(state,action)=>{
        let eachSelectState = JSON.parse(JSON.stringify(state));
        let a=1,countNum = 0,countPrice=0
        
        eachSelectState.prolist.forEach(item => {
            if(item.id==action.id){
                item.flag=!item.flag;
            }
            if(!item.flag){
                a=0;
            }
            if(item.flag){
                countNum+=Number(item.num);
                countPrice+=(10*Number(item.price))/10*Number(item.num);
            }
        });
        eachSelectState.countNum = countNum;
        eachSelectState.countPrice = countPrice;
        eachSelectState.all=a;

        
      
        localStorage.setItem("cartList",JSON.stringify(eachSelectState.prolist))       
        // var arr=localStorage.getItem("cartList")
        return eachSelectState;
    },
},defaultState)

