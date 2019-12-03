
 export const throttle=(()=>{
    var _firstTime = 0;
    return (callBack,time=500)=> {
        console.log(callBack)
        var _lastTime = new Date().getTime();
        callBack()
        if(_lastTime - _firstTime > time){
           
            _firstTime = _lastTime;
        }
    }
})()