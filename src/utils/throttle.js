
 export const throttle=(()=>{
    var _firstTime = 0;
    return (callBack,time=500)=> {
      
        var _lastTime = new Date().getTime();
      
        if(_lastTime - _firstTime > time){
            callBack()
            _firstTime = _lastTime;
        }
    }
})()